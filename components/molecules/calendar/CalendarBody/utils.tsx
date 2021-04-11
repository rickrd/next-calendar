import moment from 'moment'

export const fillCalendar = (setCalendar: any, selectedYear: any, selectedMonth: any, selectedDay: any) => {
  const startDay = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`).clone().startOf('month').startOf('week')
  const endDay = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`).clone().endOf('month').endOf('week')

  let weeks = []

  var index = startDay.clone().subtract(1, 'day')

  while (index.isBefore(endDay, 'day')) {
    weeks.push({
      days: new Array(7).fill(0).map(() => {
        return { label: index.add(1, 'day').clone().date().toString(), date: index.clone().format('YYYY-MM-DD') }
      }),
    })
  }

  setCalendar(weeks)
}
