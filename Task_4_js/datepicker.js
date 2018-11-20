var inputContainer = document.createElement('div');
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "row";
calendContainer.insertBefore(inputContainer, calendContainer.firstChild);

var dateInput = document.createElement('input');
dateInput.id = "date__input";
dateInput.setAttribute("type", "text");
dateInput.setAttribute("placeholder", "DD/MM/YYYY");
inputContainer.appendChild(dateInput);

var calendarWievButton = document.createElement('input');
calendarWievButton.setAttribute("type", "button");
calendarWievButton.setAttribute("value", "\u25BC");
calendarWievButton.style.padding = 0;
inputContainer.appendChild(calendarWievButton);

calendarWievButton.onclick = function () {
    var container = document.getElementsByClassName('container');
    if (container[0] === undefined) {
        showCalendar();

    } else {
        removeContainer();
    }

}