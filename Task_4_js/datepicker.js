var inputContainer = document.createElement('div');
inputContainer.className = "datepicker__input-container"
calendContainer.insertBefore(inputContainer, calendContainer.firstChild);

var dateInput = document.createElement('input');
dateInput.id = "date__input";
dateInput.className = "datepicker__input-element";

dateInput.oninput = function (event, dateInput) {
    var target = event.target;
    var dateValue = target.value;
    var userValue = dateValue;

    function DateIsValid(userValue) {
        var regexp = /^\d{1,2}\/\d{1,2}\/\d{1,4}$/;
        if (regexp.test(userValue)) {
            var values = userValue.split('/');
            var d = values[0] - 0;
            var m = values[1] - 0;
            var y = values[2] - 0;
            var daysInMonth = 31;

            if (m > 0 && m < 13 && y > 0 && y < 10000) {
                if (m == 2) {
                    daysInMonth = ((y % 400) == 0) ? 29 : ((y % 100) == 0) ? 28 : ((y % 4) == 0) ? 29 : 28;
                } else if (m == 4 || m == 6 || m == 9 || m == 11) {
                    daysInMonth = 30;
                }
                return (d <= daysInMonth);
            }
        }
        return false;
    }
    if (!DateIsValid(userValue)) {
        target.style.color = "red";
    } else {
        target.style.color = "black";
    }
    if (target.value == false) {
        target.style.color = "black";
    }
}
inputContainer.appendChild(dateInput);

var calendarWievButton = document.createElement('input');
calendarWievButton.className = "datepicker__input-button";
calendarWievButton.id = "datepicker__button";
inputContainer.appendChild(calendarWievButton);

calendarWievButton.onclick = function () {
    var container = document.getElementsByClassName('container');
    if (container[0] === undefined) {
        showCalendar();

    } else {
        removeContainer();
    }
}