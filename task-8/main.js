
// let btn = document.querySelector('.calculateBtn');
// btn.addEventListener('click', function () {
//     calculateAge();
// });

// function calculateAge() {
    
//     let inputDay = parseInt(document.getElementById('date').value);
//     let inputMonth = parseInt(document.getElementById('month').value); 
//     let inputYear = parseInt(document.getElementById('year').value); 
    
//     let currentDate = new Date();
//     let currentDay = currentDate.getDate(); 
//     let currentMonth = 1 + currentDate.getMonth(); 
//     let currentYear = currentDate.getFullYear(); 
//     let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

//     if (inputDay > currentDay) {
//         currentDay = currentDay + daysInMonth[currentMonth - 1]; 
//         currentMonth = currentMonth - 1;
//     }

//     if (inputMonth > currentMonth) {
//         currentMonth = currentMonth + 12; 
//         currentYear = currentYear - 1;
//     }

//     let calculatedDays = currentDay - inputDay;
//     let calculatedMonths = currentMonth - inputMonth;  
//     let calculatedYears = currentYear - inputYear;

//     document.getElementById('age').innerHTML =
//         'Your age is ' + calculatedYears + ' years, ' + calculatedMonths + ' months, and ' + calculatedDays + ' days.';
// }


//                             task-2

    // const searchInput = document.querySelector("input");
    // const userCards = document.querySelectorAll(".banner_main_first_box");

    // searchInput.addEventListener("input", function () {
    //     const searchText = searchInput.value.toLowerCase();

    //     userCards.forEach(card => {
    //         const userName = card.querySelector("h3").textContent.toLowerCase();
    //         if (userName.includes(searchText)) {
    //             card.style.display = "flex"; 
    //         } else {
    //             card.style.display = "none"; 
    //         }
    //     });
    // });
