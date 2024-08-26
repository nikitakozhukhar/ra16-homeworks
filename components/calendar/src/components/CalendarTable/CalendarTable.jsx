import { getCalendarWeeks } from "./getCalendarWeeks";

export function CalendarTable({ date }) {
  const calendarWeeks = getCalendarWeeks(date);

  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col span={5} />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" title="Понедельник">
            Пн
          </th>
          <th scope="col" title="Вторник">
            Вт
          </th>
          <th scope="col" title="Среда">
            Ср
          </th>
          <th scope="col" title="Четверг">
            Чт
          </th>
          <th scope="col" title="Пятница">
            Пт
          </th>
          <th scope="col" title="Суббота">
            Сб
          </th>
          <th scope="col" title="Воскресенье">
            Вс
          </th>
        </tr>
      </thead>
      <tbody>
        {calendarWeeks.map((week, index) => (
          <tr key={index}>
            {week.map((day, index) => (
              <td
                className={`${
                  day.isOtherMonth ? "ui-datepicker-other-month" : ""
                }${day.isCurrDate ? "ui-datepicker-today" : ""}`}
                key={index}
              >
                {day.date}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
