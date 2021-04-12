import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { ReminderListFlagWrapper } from '../../../styles/reminder/ReminderList'
import LocationIcon from '../../atoms/icons/LocationIcon'

const ReminderListFlag = ({
  reminder: {
    title,
    description,
    city,
    date,
    time,
    forecastData: { weatherData, forecastDescription, forecastDate, forecastIcon },
  },
  onClick,
}) => {
  console.log(weatherData)
  return (
    <ReminderListFlagWrapper onClick={onClick} style={{ cursor: 'pointer' }}>
      <ReminderFlagCol>
        <ReminderFlagRow>
          <div style={{ fontSize: '21px', fontWeight: 'bold', marginRight: '1em', backgroundColor: '#000', color: '#fff' }}>{title}</div>
          <div style={{ fontSize: '19px', fontWeight: 'bold', color: 'indianred' }}>{moment(time, 'HH:mm').format('LT')}</div>
        </ReminderFlagRow>
      </ReminderFlagCol>
      <ReminderFlagCol>
        <ReminderFlagRow>
          <div style={{ fontSize: '18px', marginRight: '1em' }}>{description}</div>
        </ReminderFlagRow>
      </ReminderFlagCol>
      <ReminderFlagRow>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
          <LocationIcon />
          {city}
        </div>
      </ReminderFlagRow>
      <ReminderFlagRow>
        <div>
          <h4 style={{ marginBottom: '0' }}>Forecast:</h4>
          <strong>{forecastDescription}</strong>
        </div>
      </ReminderFlagRow>
      <ReminderFlagRow>{forecastDate !== '' && <div>date: {forecastDate}</div>}</ReminderFlagRow>
      <ReminderFlagRow>
        <div>
          {forecastIcon !== '' ? (
            <ForecastIconWrapper>
              <img src={forecastIcon} width='50px' height='50px' />
            </ForecastIconWrapper>
          ) : null}
        </div>
      </ReminderFlagRow>
    </ReminderListFlagWrapper>
  )
}

const ForecastIconWrapper = styled.div`
  background-color: #fff;
  padding: 1em;
  max-width: fit-content;
  border-radius: 100%;
`

const ReminderFlagRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
`

const ReminderFlagCol = styled.div`
  display: flex;
  flex-direction: column;
`

export default ReminderListFlag
