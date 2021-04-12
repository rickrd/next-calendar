import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { ReminderListFlagWrapper } from '../../../styles/reminder/ReminderList'
import doRequest from '../../../services/request'

const ReminderListFlag = ({ reminder: { id, title, description, city, date }, onClick }) => {
  const [data, setData] = useState<any>({})
  const [forecastIcon, setForecastIcon] = useState<any>('')
  const [forecastDescription, setForecastDescription] = useState<any>('')
  const [forecastDate, setForecastDate] = useState<any>('')

  useEffect(() => {
    ;(async () => {
      const citySearchResult = await doRequest(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAYEg8S1BPZ02iJ--0hFjo4Qb0v5uS3BmQ`)
      console.log(citySearchResult)
      if (citySearchResult.status === 'OK') {
        const location = citySearchResult?.results[0]?.geometry?.location
        if (!Object.keys(data).length) {
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&appid=01460cb31eb2c443498031402b438f94&lang=en`
          setData(await doRequest(url))
        }
      } else console.log('No city found')
    })()
  })

  if (Object.keys(data).length) {
    const longestForecastDate = moment.unix(data.daily[data.daily.length - 1].dt).format('YYYY-MM-DD HH:mm')
    if (moment(date).isBefore(moment(longestForecastDate))) {
      data.daily.map((dayForecast) => {
        // console.log(dayForecast)
        if (moment.unix(dayForecast.dt).isSame(moment(date), 'day')) {
          if (forecastDescription === '') setForecastDescription(dayForecast.weather[0].description)
          if (forecastDate === '') setForecastDate(moment.unix(dayForecast.dt).format('LLL'))
          ;(async () => {
            const img = `http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`
            if (forecastIcon === '') setForecastIcon(img)
          })()
        }
      })
    } else console.log(`${moment(date)} isnt before ${moment(longestForecastDate)}`)
  }
  return (
    <ReminderListFlagWrapper onClick={onClick} style={{ cursor: 'pointer' }}>
      <div>{id}</div>
      <br />
      <div>{title}</div>
      <br />
      <div>{description}</div>
      <br />
      <div>{city}</div>
      <br />
      <div>{moment(date).format('LLL')}</div>
      <br />
      <div>forecast description: {forecastDescription}</div>
      <br />
      <div>closest forecast date: {forecastDate}</div>
      <div>
        <img src={forecastIcon} />
      </div>
    </ReminderListFlagWrapper>
  )
}

export default ReminderListFlag
