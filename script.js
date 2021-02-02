const totAmount = document.querySelector('.card__total-amount');
const firstPayment = document.querySelector('.card__first-payment');
const date = document.querySelector('.card__date');
const percent = document.querySelector('.card__percent');
const monthlyPayment = document.querySelector('.card__monthly-payment');

var today = new Date();
var dd = String(today.getDate()).padStart(1, '0');
var mm = String(today.getMonth() + 1).padStart(1, '0');
var yyyy = today.getFullYear();
let moneyBoxTerm;



date.addEventListener('change', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy)* 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd)/31).toFixed(2);
    
    monthlyPayment.value = totAmount.value * (percent.value*0.01/12) * 1/(Math.pow((1+percent.value*0.01/12),moneyBoxTerm) - 1) - firstPayment.value * (percent.value*0.01/12) * 1/(Math.pow((1+percent.value*0.01/12),moneyBoxTerm) - 1);
    console.log(monthlyPayment.value);
});