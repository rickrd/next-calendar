import React from 'react'
import { useRouter } from 'next/router'
import Calendar from '../../components/organisms/Calendar'
import styled from 'styled-components'
import moment from 'moment'

const DateDetail = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(moment().days())

  return moment(id).isValid() ? (
    <DateDetailWrapper>
      <SelectedDateWrapper>A data escolhida foi {id}</SelectedDateWrapper>
      <Calendar />
    </DateDetailWrapper>
  ) : (
    <p>Not a valid date.</p>
  )
}

const DateDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SelectedDateWrapper = styled.div`
  display: flex;
`

export default DateDetail
