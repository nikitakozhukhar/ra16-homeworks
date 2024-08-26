export function getFormattedDate(date) {
   
  const weekdayArr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',];

  const monthObj = {
    0: {material: 'января', header: 'январь'},
    1: { material: 'февраля', header: 'февраль'},
		2: { material: 'марта', header: 'март'},
		3: { material: 'апреля', header: 'апрель'},
		4: { material: 'мая', header: 'май'},
		5: { material: 'июня', header: 'июнь'},
		6: { material: 'июля', header: 'июль'},
		7: { material: 'августа', header: 'август'},
		8: { material: 'сентября', header: 'сентябрь'},
		9: { material: 'октября', header: 'октябрь'},
		10: { material: 'ноября', header: 'ноябрь'},
		11: { material: 'декабря', header: 'декабрь'},
  }

  const weekday = weekdayArr[date.getDay() - 1];
  const day = date.getDate();
  const month = monthObj[date.getMonth()].header;
  const year = date.getFullYear();
  const headerMonth = monthObj[date.getMonth()].material;
  
  return (
    {
      weekday: weekday,
      day: day,
      month: month,
      headerMonth: headerMonth,
      year: year,
    }
  )
}