function removeContainer() {
    var container = document.getElementsByClassName('container');
    container[0].remove();
}

function backward() {
    removeContainer();
    counter(-1);
    render();
    calendarStyle();
    displayValue();
}

function forward() {
    removeContainer();
    counter(1);
    render();
    calendarStyle();
    displayValue();
}

function showCalendar() {
    render();
    calendarStyle();
    displayValue();
}

function displayValue() {
    var month = getMonth(currentYear, currentMonth, count);
    var year = getYear(currentYear, currentMonth, count);
    var datesContainer = document.getElementById('dates-container');
    var dateInput = document.getElementById('date__input');
    var monthToDisplay = String(month + 1);
    if (monthToDisplay.length == 1) {
        monthToDisplay = 0 + monthToDisplay;
    }
    datesContainer.onclick = function (event) {
        var dateValue = event.target.innerHTML;
        if (event.target == datesContainer) {
            return;
        }
        if (dateValue.length == 1) {
            dateValue = 0 + dateValue;
        }
        if (dateValue.length < 1) {
            removeContainer();
        } else {
            dateInput.value = dateValue + "/" + monthToDisplay + "/" + year;
            removeContainer();
        }
    }
}