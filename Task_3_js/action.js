function backward() {
    document.getElementById('calendar__container').remove();
    counter(-1);
    getLastMonthDate(currentYear, currentMonth, count);
    render();
    this.style();
}

function forward() {
    document.getElementById('calendar__container').remove();
    counter(1);
    getLastMonthDate(currentYear, currentMonth, count);
    render();
    this.style();
}