export function getCalendarWeeks(date) {
  const year = date.getFullYear(),
    month = date.getMonth(),
    currentDay = date.getDate(),
    monthStartDate = new Date(year, month, 1),
    monthEndDate = new Date(year, month + 1, 0),
    monthStartDay = monthStartDate.getDay(),
    monthEndDay = monthEndDate.getDay(),
    monthDaysCount = monthEndDate.getDate();

  const calendarWeeks = [];

  // Определяем с какого дня недели начинать заполнять текущий месяц.
  let start = monthStartDay - 1;
  if (monthStartDay === 0) start = 0;

  // Заполняем calendarWeeks датами текущего месяца.
  // i - число месяца (1 ... 31)
  // j - день недели 0 - понедельник ... 6 - воскресение.
  for (let i = 1; i <= monthDaysCount; ) {
    const calendarWeek = [];

    for (let j = start; j <= 6; j++) {
      if (i <= monthDaysCount) {
        calendarWeek[j] = {
          date: i,
          isOtherMonth: false,
          isCurrDate: i === currentDay,
        };
        i += 1;
      }
    }
    start = 0; // После первой итерации заполнение недели будет начинаться с 0 т.е. с понедельника.
    calendarWeeks.push(calendarWeek);
  }
  // Если последний день месяца не воскресенье, то нужно добавить даты следующего месяца.
  if (monthEndDay !== 0) {
    for (let i = monthEndDay; i <= 6; i++) {
      calendarWeeks[calendarWeeks.length - 1].push({
        date: i - monthEndDay + 1, // Дата следующего месяца начиная с 1.
        isOtherMonth: true,
      });
    }
  }

  // Если первый день месяца не понедельник, то нужно добавить даты предыдущего месяца.
  if (monthStartDay !== 1) {
    const prevMonthDaysCount = new Date(year, month, 0).getDate(); // Количество дней в предыдущем месяце.
    let start = monthStartDay - 2;
    if (monthStartDay === 0) start = 5;

    for (let i = start; i >= 0; i -= 1) {
      calendarWeeks[0][i] = {
        date: prevMonthDaysCount + (i - start), // Дата предыдущего месяца начиная с конечной даты.
        isOtherMonth: true,
      };
    }
  }

  return calendarWeeks;
}
