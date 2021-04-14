import moment from 'moment'
import { getWeatherByLatLon } from '../../../../hooks/weather'

export const parseForecast = async (
  citySearchResult: { status: string; results: { geometry: { location: { lat: string; lng: string } } }[] },
  data: { id?: number; title?: string; description?: string; date: any; city?: string }
): Promise<boolean | any> => {
  let weatherData: { daily?: any; date?: any } = {},
    forecastDescription: string,
    forecastDate: string,
    forecastIcon: string,
    forecastData: { weatherData?: any; forecastDescription?: string; forecastDate?: string; forecastIcon?: string } = {}

  if (citySearchResult.status === 'OK') {
    const location: { lat: string; lng: string } = citySearchResult?.results[0]?.geometry?.location
    if (!Object.keys(weatherData).length) {
      weatherData = await getWeatherByLatLon(location.lat, location.lng)
      if (Object.keys(weatherData).length) {
        const longestForecastDate = moment.unix(weatherData.daily[weatherData.daily.length - 1].dt).format('YYYY-MM-DD HH:mm')
        if (moment(data.date).isBefore(moment(longestForecastDate))) {
          weatherData.daily.map((dayForecast: { dt: number; weather: { icon: string; description: string }[] }) => {
            if (moment.unix(dayForecast.dt).isSame(moment(data.date), 'day')) {
              forecastDescription = dayForecast.weather[0].description
              forecastDate = moment.unix(dayForecast.dt).format('LLL')
              ;(async () => {
                const img = `http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`
                forecastIcon = img
                console.log({ weatherData, forecastDescription, forecastDate, forecastIcon })
                forecastData = { weatherData, forecastDescription, forecastDate, forecastIcon }
              })()
              return forecastData
            } else return {}
          })
        } else return {}
      } else return {}
    } else return {}
  } else return {}
  return forecastData
}
