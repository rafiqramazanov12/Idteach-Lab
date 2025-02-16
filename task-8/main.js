
let btn = document.querySelector('.calculateBtn');
btn.addEventListener('click', function () {
    calculateAge();
});

function calculateAge() {
    
    let inputDay = parseInt(document.getElementById('date').value);
    let inputMonth = parseInt(document.getElementById('month').value); 
    let inputYear = parseInt(document.getElementById('year').value); 
    
    let currentDate = new Date();
    let currentDay = currentDate.getDate(); // gun
    let currentMonth = 1 + currentDate.getMonth(); //ay
    let currentYear = currentDate.getFullYear(); //il
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 12 ayin tarixi

    if (inputDay > currentDay) {
        currentDay = currentDay + daysInMonth[currentMonth - 1];  // Günun hesablaması
        currentMonth = currentMonth - 1;
    }

    if (inputMonth > currentMonth) {
        currentMonth = currentMonth + 12; // ayin hesablaması
        currentYear = currentYear - 1;
    }

    let calculatedDays = currentDay - inputDay;
    let calculatedMonths = currentMonth - inputMonth;  // yasin hesablaması
    let calculatedYears = currentYear - inputYear;

    document.getElementById('age').innerHTML =
        'Your age is ' + calculatedYears + ' years, ' + calculatedMonths + ' months, and ' + calculatedDays + ' days.';
}
