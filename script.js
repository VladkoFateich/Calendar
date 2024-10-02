const list = document.querySelector('#calendar #list');
const info = document.querySelector('#calendar .info');
const prev = document.querySelector('#calendar .prev');
const next = document.querySelector('#calendar .next');

let now = new Date();

let dispYear = now.getFullYear();
let dispMonth = now.getMonth();

drawCalendar(dispMonth, dispYear);

prev.addEventListener('click', function () {
  if (dispMonth !== 0) {
    dispMonth--;
  } else {
    dispMonth = 11;
    dispYear--;
  }
  drawCalendar(dispMonth, dispYear);
});

next.addEventListener('click', function () {
  if (dispMonth !== 11) {
    dispMonth++;
  } else {
    dispMonth = 0;
    dispYear++;
  }
  drawCalendar(dispMonth, dispYear);
});

function drawCalendar(dispMonth, dispYear) {
  drawList(dispYear, dispMonth);
  showInfo(dispMonth, dispYear);
}

function drawList(dispYear, dispMonth) {
  list.textContent = '';

  let getLastDay = getLastMonthDay(dispYear, dispMonth);

  let now = new Date();
  let currentDay = now.getDate();
  let currentMonth = now.getMonth();
  let currentYear = now.getFullYear();
  for (let i = 1; i <= getLastDay; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    list.append(li);

    if (
      i === currentDay &&
      dispMonth === currentMonth &&
      dispYear === currentYear
    ) {
      li.classList.add('currentDay');
    }
  }
}

function getLastMonthDay(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function showInfo(dispMonth, dispYear) {
  info.textContent = `${getMonthName(dispMonth)} ${dispYear}`;
}

function getMonthName(monthNum) {
  const monthList = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  return monthList[monthNum];
}
