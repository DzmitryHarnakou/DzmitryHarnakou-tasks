function style() {

    var previousMonthLastFullDate = new Date(currentYear, currentMonth + count, 0);
    var previousMonthLastDateDay = previousMonthLastFullDate.getDay();
    var lastMonthDayFullDate = new Date(currentYear, currentMonth + 1 + count, 0);
    var lastMonthDate = lastMonthDayFullDate.getDate();
    var month = getMonth(currentYear, currentMonth, count);
    var year = getYear(currentYear, currentMonth, count);

    var calendContainer = document.getElementsByClassName('calendar');
    calendContainer[0].style.width = "520px";

    var container = document.getElementsByClassName('calendar__container');
    container[0].style.cssText = "\
display: flex;\
flex-wrap: wrap;\
justify-content: space-around;\
border: 2px;\
border-style: solid;\
border-color: rgb(190, 190, 190);\
border-radius: 0.5em;\
padding: 2%;\
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"

    var monthSelector = document.getElementsByClassName('calendar__month-container');
    monthSelector[0].style.cssText = "\
display:flex;\
justify-content:space-Between;\
align-items:center;\
background-color:rgb(233, 233, 233);\
border-radius:0.5em;\
padding-left:3%;\
padding-right:3%;\
width:100%;\
border:1px;\
border-style:solid;\
border-color:rgb(190, 190, 190);\
border-radius:0.5em;"

    var monthSelectorBackward = document.getElementsByClassName('calendar__backward-button');
    monthSelectorBackward[0].setAttribute('type', 'button');
    monthSelectorBackward[0].setAttribute('value', "\u25C4");
    monthSelectorBackward[0].setAttribute("onclick", "backward ();");
    monthSelectorBackward[0].style.cssText = "\
height: 2.05em;\
border-radius: 50%;\
border-style: none;\
color: rgb(233, 233, 233);\
background-color: black;\
outline: none;"

    var monthSelectorForward = document.getElementsByClassName('calendar__forward-button');
    monthSelectorForward[0].setAttribute('type', 'button');
    monthSelectorForward[0].setAttribute('value', '\u25BA');
    monthSelectorForward[0].setAttribute("onclick", "forward ();");
    monthSelectorForward[0].style.cssText = "\
height: 2em;\
border-radius: 50%;\
border-style: none;\
color: rgb(233, 233, 233);\
background-color: black;\
outline: none;"

    var elem = document.getElementsByClassName('calendar__days-names');
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.width = "13%";
        elem[i].style.textAlign = "center";
    }

    var datesContainer = document.getElementsByClassName('calendar__dates-container');
    datesContainer[0].style.cssText = "\
display: flex;\
flex-wrap: wrap;\
justify-content: space-around;"

    var element = document.getElementsByClassName('calendar__dates');
    for (var i = 0; i < element.length; i++) {
        element[i].style.cssText = "\
width: 13%;\
text-align: right;\
background-color: rgb(233, 233, 233);\
margin-bottom: 2%;\
height: 5%;\
border: 1px;\
border-style: solid;\
border-color: rgb(190, 190, 190);\
box-sizing: border-box;\
font-size: 1.5em;\
padding-right: 0.25em;"

        if (i < previousMonthLastDateDay || i >= previousMonthLastDateDay + lastMonthDate) {
            element[i].style.color = "rgb(190, 190, 190)";
        }

        if (i == currentDate + previousMonthLastDateDay - 1 && month == currentMonth && year == currentYear) {
            element[i].style.backgroundColor = "rgb(255, 250, 144)";
        }
    }
}

style();