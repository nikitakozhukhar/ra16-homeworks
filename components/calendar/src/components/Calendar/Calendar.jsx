import { getFormattedDate } from '../formatedDate/getFormatedDate'
import { CalendarTable } from '../CalendarTable/CalendarTable';
import './calendar.css'

export function Calendar({date}) {
  
  const formattedDate = getFormattedDate(date);

  const {weekday, day, month, headerMonth, year} = formattedDate;

  // const
	// 	years = date.getFullYear(),
	// 	months = date.getMonth();
  // console.log(new Date(years, months, 0));

  return (
    <div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{weekday}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{day}</div>
      <div className="ui-datepicker-material-month">{headerMonth}</div>
      <div className="ui-datepicker-material-year">{year}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{month}</span>&nbsp;
      <span className="ui-datepicker-year">{year}</span>
    </div>
  </div>
  <CalendarTable date={date}/>
</div>

  )
}