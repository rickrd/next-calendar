import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { ReminderListFlagWrapper } from '../../../styles/reminder/ReminderList'
import LocationIcon from '../../atoms/icons/LocationIcon'
import { useDispatch } from 'react-redux'
import { removeReminder } from '../../../store/actions/reminders'

const ReminderListFlag = ({
  reminder: {
    id,
    title,
    description,
    city,
    date,
    time,
    forecastData: { weatherData, forecastDescription, forecastDate, forecastIcon },
  },
  onClick,
}) => {
  const dispatch = useDispatch()
  return (
    <ReminderListFlagWrapper onClick={onClick} style={{ cursor: 'pointer' }}>
      <ReminderRemove onClick={() => {
        console.log(id)
        dispatch(removeReminder(id))
      }}>remove x</ReminderRemove>
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
        <strong>{forecastDescription}</strong>
      </ReminderFlagRow>
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

const ReminderRemove = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0;
`

export default ReminderListFlag
