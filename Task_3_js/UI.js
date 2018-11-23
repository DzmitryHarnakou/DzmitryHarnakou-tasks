function render() {

    var daysToDisplay = getLastMonthDate(currentYear, currentMonth, count);
    var monthName = getMonthName(montArr, month);
    var month = getMonth(currentYear, currentMonth, count);
    var year = getYear(currentYear, currentMonth, count);

    var calendContainer = document.getElementById('calend_container');
    calendContainer.className = "calendar";

    var container = document.createElement('div');
    container.className = "calendar__container";
    container.id = "calendar__container";
    calendContainer.appendChild(container);

    var monthSelector = document.createElement('div');
    monthSelector.className = "calendar__month-container";
    container.appendChild(monthSelector);

    var monthSelectorBackward = document.createElement('input');
    monthSelectorBackward.className = "calendar__backward-button";
    monthSelectorBackward.id = "monthSelector__Backward";
    monthSelector.appendChild(monthSelectorBackward);

    var monthSelectorValue = document.createElement('h2');
    monthSelectorValue.className = "monthSelector__value";
    monthSelectorValue.className = "calendar__month-value";
    monthSelectorValue.innerHTML = monthName + " " + year;
    monthSelector.insertBefore(monthSelectorValue, monthSelectorForward);

    var monthSelectorForward = document.createElement('input');
    monthSelectorForward.className = "calendar__forward-button";
    monthSelectorForward.id = "monthSelector__Forward";
    monthSelector.appendChild(monthSelectorForward);

    for (var i = 0; i < daysArr.length; i++) {
        var elem = document.createElement('h2');
        elem.className = "calendar__days-names";
        elem.innerHTML = daysArr[i];
        container.appendChild(elem);
    }

    var datesContainer = document.createElement('div');
    datesContainer.className = "calendar__dates-container";
    container.appendChild(datesContainer);

    for (var j = 0; j < daysToDisplay.length; j++) {
        var element = document.createElement('div');
        element.innerHTML = daysToDisplay[j];
        element.className = "calendar__dates";
        datesContainer.appendChild(element);
    }
}

   render();