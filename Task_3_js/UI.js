   var calendContainer = document.getElementById('calend_container');
   calendContainer.style.width = "520px";

   var container = document.createElement('div');
   container.style.display = "flex";
   container.style.flexWrap = "wrap";
   container.style.justifyContent = "space-around";
   container.style.border = "2px";
   container.style.borderStyle = "solid";
   container.style.borderColor = "rgb(190, 190, 190)";
   container.style.borderRadius = "0.5em";
   container.style.padding = "2%";
   container.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
   calendContainer.appendChild(container);


   var monthSelector = document.createElement('div');
   monthSelector.className = "month_selector";
   monthSelector.style.display = "flex";
   monthSelector.style.justifyContent = "space-Between";
   monthSelector.style.alignItems = "center";
   monthSelector.style.backgroundColor = "rgb(233, 233, 233)";
   monthSelector.style.borderRadius = "0.5em";
   monthSelector.style.paddingLeft = "3%";
   monthSelector.style.paddingRight = "3%";
   monthSelector.style.width = "100%";
   monthSelector.style.border = "1px";
   monthSelector.style.borderStyle = "solid";
   monthSelector.style.borderColor = "rgb(190, 190, 190)";
   monthSelector.style.borderRadius = "0.5em";
   container.appendChild(monthSelector);

   var monthSelectorBackward = document.createElement('input');
   monthSelectorBackward.id = "monthSelector__Backward";
   monthSelectorBackward.setAttribute('type', 'button');
   monthSelectorBackward.setAttribute('value', "\u25C4");
   monthSelectorBackward.style.height = "2.05em";
   monthSelectorBackward.style.borderRadius = "50%";
   monthSelectorBackward.style.borderStyle = "none";
   monthSelectorBackward.style.color = "rgb(233, 233, 233)";
   monthSelectorBackward.style.backgroundColor = "black";
   monthSelectorBackward.style.outline = "none";
   monthSelector.appendChild(monthSelectorBackward);

   function monthRender(monthName, year, monthSelector) {

       this.monthSelectorValue = document.createElement('h2');
       monthSelectorValue.className = "monthSelector__value";
       monthSelectorValue.innerHTML = monthName + " " + year;
       monthSelector.insertBefore(monthSelectorValue, monthSelectorForward);
   }

   monthRender(monthName, year, monthSelector);

   var monthSelectorForward = document.createElement('input');
   monthSelectorForward.id = "monthSelector__Forward";
   monthSelectorForward.setAttribute('type', 'button');
   monthSelectorForward.setAttribute('value', '\u25BA');
   monthSelectorForward.style.height = "2em";
   monthSelectorForward.style.borderRadius = "50%";
   monthSelectorForward.style.borderStyle = "none";
   monthSelectorForward.style.color = "rgb(233, 233, 233)";
   monthSelectorForward.style.backgroundColor = "black";
   monthSelectorForward.style.outline = "none";
   monthSelector.appendChild(monthSelectorForward);

   for (var i = 0; i < daysArr.length; i++) {
       var elem = document.createElement('h2');
       elem.innerHTML = daysArr[i];
       container.appendChild(elem);
       elem.style.width = "13%";
       elem.style.textAlign = "center";
   }



   function datesRender(daysToDisplay, previousMonthLastDateDay, previousMonthLastDateDay, lastMonthDate, currentMonth, container) {

       this.datesContainer = document.createElement('div');
       datesContainer.style.display = "flex";
       datesContainer.style.flexWrap = "wrap";
       datesContainer.style.justifyContent = "space-around";
       container.appendChild(datesContainer);

       for (var j = 0; j < daysToDisplay.length; j++) {
           var element = document.createElement('div');
           element.innerHTML = daysToDisplay[j];
           datesContainer.appendChild(element);
           element.id = "data" + j;
           element.style.width = "13%";
           element.style.textAlign = "right";
           element.style.backgroundColor = "rgb(233, 233, 233)";
           element.style.marginBottom = "2%";
           element.style.height = "5%";
           element.style.border = "1px";
           element.style.borderStyle = "solid";
           element.style.borderColor = "rgb(190, 190, 190)";
           element.style.boxSizing = "border-box";
           element.style.fontSize = "1.5em";
           element.style.paddingRight = "0.25em";
           if (j < previousMonthLastDateDay || j >= previousMonthLastDateDay + lastMonthDate) {
               element.style.color = "rgb(190, 190, 190)";
           }
           if (j == currentDate + previousMonthLastDateDay - 1 && month == currentMonth && year == currentYear) {
               element.style.backgroundColor = "rgb(255, 250, 144)";
           }
           

       }
   }


   datesRender(daysToDisplay, previousMonthLastDateDay, previousMonthLastDateDay, lastMonthDate, currentMonth, container);

   document.getElementById("monthSelector__Forward").onclick = function () {
       counter(1);
       monthSelectorValue.remove();
       datesContainer.remove();
       daysToDisplay = getLastMonthDate(currentYear, currentMonth, count);
       getMonth(currentYear, currentMonth, count, montArr);
       monthRender(monthName, year, monthSelector);
       datesRender(daysToDisplay, previousMonthLastDateDay, previousMonthLastDateDay, lastMonthDate, currentMonth, container);

   };

   document.getElementById("monthSelector__Backward").onclick = function () {
       counter(-1);
       monthSelectorValue.remove();
       datesContainer.remove();
       daysToDisplay = getLastMonthDate(currentYear, currentMonth, count);
       getMonth(currentYear, currentMonth, count, montArr);
       monthRender(monthName, year, monthSelector);
       datesRender(daysToDisplay, previousMonthLastDateDay, previousMonthLastDateDay, lastMonthDate, currentMonth, container);

   };