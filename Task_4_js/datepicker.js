var inputContainer = document.createElement('div');
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "row";
calendContainer.insertBefore(inputContainer, calendContainer.firstChild);

var dateInput = document.createElement('input');
dateInput.setAttribute("type", "text");
dateInput.setAttribute("placeholder", "DD/MM/YYYY");
inputContainer.appendChild(dateInput);

var calendarWievButton = document.createElement('input');
calendarWievButton.setAttribute("type", "button");
calendarWievButton.setAttribute("value", "\u25BC");
calendarWievButton.style.padding = 0;
inputContainer.appendChild(calendarWievButton);

datesContainer.onclick = function (event) {
    var dateValue = event.target.innerHTML;
    if (dateValue.length == 1) {
        dateValue = 0 + dateValue;
    }
    if (dateValue.length < 1) {
        container.style.display = "none";
    } else {
        dateInput.value = dateValue + "/" + (month + 1) + "/" + year;
        container.style.display = "none";
    }
}

calendarWievButton.onclick = function () {
    if (container.style.display == "none") {
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
}