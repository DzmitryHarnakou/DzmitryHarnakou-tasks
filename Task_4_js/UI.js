var calendContainer = document.getElementById('calend_container');


function render() {
    var container = document.createElement('div');
    container.className = "container";
    calendContainer.appendChild(container);

    var monthSelector = document.createElement('div');
    monthSelector.className = "month__selector";
    container.appendChild(monthSelector);

    var monthSelectorBackward = document.createElement('input');
    monthSelectorBackward.className = "month__selector-backward";
    monthSelectorBackward.id = "monthSelector__Backward";
    monthSelector.appendChild(monthSelectorBackward);

    var monthSelectorValue = document.createElement('h2');
    monthSelectorValue.className = "month__selector-value";
    monthSelectorValue.innerHTML = monthName + " " + year;
    monthSelector.insertBefore(monthSelectorValue, monthSelectorForward);

    var monthSelectorForward = document.createElement('input');
    monthSelectorForward.id = "monthSelector__Forward";
    monthSelectorForward.className = "month__selector-forward";
    monthSelector.appendChild(monthSelectorForward);

    for (var i = 0; i < daysArr.length; i++) {
        var elem = document.createElement('h2');
        elem.className = "container__days-names";
        elem.innerHTML = daysArr[i];
        container.appendChild(elem);
    }

    var datesContainer = document.createElement('div');
    datesContainer.className = "container__dates-container";
    datesContainer.id = "dates-container";
    container.appendChild(datesContainer);

    for (var j = 0; j < daysToDisplay.length; j++) {
        var element = document.createElement('div');
        element.className = "container__dates-container__date";
        element.innerHTML = daysToDisplay[j];
        datesContainer.appendChild(element);
    }

}