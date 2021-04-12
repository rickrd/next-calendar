import React, { useEffect, useState } from 'react'
import moment, { HTML5_FMT } from 'moment'
import styled from 'styled-components'
import { ReminderListFlagWrapper } from '../../../styles/reminder/ReminderList'
import doRequest from '../../../services/request'
import { useSelector } from 'react-redux'

const ReminderListFlag = ({
  reminder: {
    title,
    description,
    city,
    date,
    time,
    forecastData: { forecastDescription, forecastDate, forecastIcon },
  },
  onClick,
}) => {
  return (
    <ReminderListFlagWrapper onClick={onClick} style={{ cursor: 'pointer' }}>
      <ReminderFlagCol>
        <ReminderFlagRow>
          <div style={{ fontSize: '21px', fontWeight: 'bold', marginRight: '1em' }}>{title}</div>
          <div style={{ fontSize: '19px', fontWeight: 'bold', color: 'indianred' }}>{moment(time, 'HH:mm').format(HTML5_FMT.TIME)}</div>
        </ReminderFlagRow>
      </ReminderFlagCol>
      <ReminderFlagCol>
        <ReminderFlagRow>
          <div style={{ fontSize: '21px', fontWeight: 'bold', marginRight: '1em' }}>{description}</div>
          <div style={{ fontSize: '19px', fontWeight: 'bold', color: 'indianred' }}>{city}</div>
        </ReminderFlagRow>
      </ReminderFlagCol>
      <ReminderFlagRow>
        <div>
          forecast description: <strong>{forecastDescription}</strong>
        </div>
      </ReminderFlagRow>
      <ReminderFlagRow>{forecastDate !== '' && <div>forecast date: {forecastDate}</div>}</ReminderFlagRow>
      <ReminderFlagRow>
        <div>
          {forecastIcon !== '' ? (
            <ForecastIconWrapper>
              <img src={forecastIcon} width='50px' height='50px' />
            </ForecastIconWrapper>
          ) : (
            <p>No forecast</p>
          )}
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
