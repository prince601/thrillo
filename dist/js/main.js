let uiYear = document.querySelector('#year');
let uiUserDate = document.querySelector('#userDate');

let date = new Date();



uiYear.textContent = `${date.getFullYear()}`;
// uiUserDate.textContent = `${date}`