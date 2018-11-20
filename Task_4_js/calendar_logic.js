var currentFullDate = new Date();
var currentMonth = currentFullDate.getMonth();
var currentYear = currentFullDate.getFullYear();
var currentDate = currentFullDate.getDate();
var montArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var daysArr = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

var count = 0;
var n = 0;

function counter(n) {

    count += n;
    return count;
};

function getLastMonthDate(currentYear, currentMonth, count) {
    var lastMonthDayFullDate = new Date(currentYear, currentMonth + 1 + count, 0);
    this.lastMonthDate = lastMonthDayFullDate.getDate();
    var previousMonthLastFullDate = new Date(currentYear, currentMonth + count, 0);
    var previousMonthLastDate = previousMonthLastFullDate.getDate();
    this.previousMonthLastDateDay = previousMonthLastFullDate.getDay();

    var daysArr = [];

    for (var i = 1; i <= lastMonthDate; i++) {
        daysArr.push(i);
    }
    var day = previousMonthLastDate;
    for (var j = previousMonthLastDateDay; j > 0; j--) {
        daysArr.unshift("");
    }
    var nextMonthDaysRest = 1;
    if (daysArr.length <= 35) {
        var numOfDays = 35;
    } else {
        numOfDays = 42;
    }
    while (daysArr.length != numOfDays) {
        daysArr.push("");
        nextMonthDaysRest = nextMonthDaysRest + 1;
    }
    return daysArr;
}

var daysToDisplay = getLastMonthDate(currentYear, currentMonth, count);

function getMonth(currentYear, currentMonth, count, montArr) {
    var monthCount = new Date(currentYear, currentMonth + count, 1);
    this.month = monthCount.getMonth();
    this.monthName = montArr[month];
    this.year = monthCount.getFullYear();
}

getMonth(currentYear, currentMonth, count, montArr);