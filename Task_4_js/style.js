function calendarStyle() {

    calendContainer.style.cssText = "\
width: 200px;\
font-size: 10px;";

    var container = document.getElementsByClassName('container');
    container[0].style.cssText = "\
display: flex;\
flex-wrap: wrap;\
justify-content: space-around;\
border: 2px;\
border-style: solid;\
border-color: rgb(190, 190, 190);\
border-radius: 0.5em;\
padding: 2%;\
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;";

    var monthSelector = document.getElementsByClassName('month__selector');
    monthSelector[0].style.cssText = "\
display: flex;\
justify-content: space-between;\
align-items: center;\
background-color: rgb(233, 233, 233);\
border-radius: 0.5em;\
padding-left: 3%;\
padding-right: 3%;\
width: 100%;\
border: 1px;\
border-style: solid;\
border-color: rgb(190, 190, 190);\
border-radius: 0.5em;";

    var monthSelectorBackward = document.getElementsByClassName('month__selector-backward');
    monthSelectorBackward[0].setAttribute('type', 'button');
    monthSelectorBackward[0].setAttribute('onclick', 'backward();');
    monthSelectorBackward[0].setAttribute('value', '\u25C4');
    monthSelectorBackward[0].style.cssText = "\
height: 2em;\
border-radius: 50%;\
border-style: none;\
color: rgb(233, 233, 233);\
background-color: black;\
outline: none;";

    var monthSelectorForward = document.getElementsByClassName('month__selector-forward');
    monthSelectorForward[0].setAttribute('type', 'button');
    monthSelectorForward[0].setAttribute('onclick', 'forward();');
    monthSelectorForward[0].setAttribute('value', '\u25BA');
    monthSelectorForward[0].style.cssText = "\
height: 2em;\
border-radius: 50%;\
border-style: none;\
color: rgb(233, 233, 233);\
background-color: black;\
outline: none;";

    var elem = document.getElementsByClassName("container__days-names");
    for (var j = 0; j < elem.length; j++) {
        elem[j].style.cssText = "\
    width: 13%;\
    text-align: center;"
    }

    var datesContainer = document.getElementsByClassName('container__dates-container');
    datesContainer[0].style.cssText = "\
display: flex;\
flex-wrap: wrap;\
justify-content: space-around;";

    var el = document.getElementsByClassName("container__dates-container__date");
    for (var i = 0; i < el.length; i++) {
        el[i].style.cssText = "\
width: 13%;\
text-align: center;\
background-color: rgb(233, 233, 233);\
margin-bottom: 2%;\
border: 1px;\
border-style: solid;\
border-color: rgb(190, 190, 190);\
box-sizing: border-box;\
font-size: 1.5em;";
    }

}