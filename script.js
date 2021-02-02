const totAmount = document.querySelector('.card__total-amount');
const firstPayment = document.querySelector('.card__first-payment');
const date = document.querySelector('.card__date');
const percent = document.querySelector('.card__percent');
const monthlyPayment = document.querySelector('.card__monthly-payment');
const addButton = document.querySelector('.add-card-button');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

var today = new Date();
var dd = String(today.getDate()).padStart(1, '0');
var mm = String(today.getMonth() + 1).padStart(1, '0');
var yyyy = today.getFullYear();
let moneyBoxTerm;

addButton.addEventListener('click', () => {
    let newCard = document.createElement('div');
    newCard.innerHTML = card.innerHTML;
    newCard.classList.add('card');
    container.prepend(newCard);
})

date.addEventListener('change', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy)* 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd)/31).toFixed(2);
    if(isFinite(totAmount.value) && isFinite(firstPayment.value) && isFinite(percent.value)) {
        monthlyPayment.value = (totAmount.value * (percent.value*0.01/12) * 1/(Math.pow((1+percent.value*0.01/12),moneyBoxTerm) - 1) - firstPayment.value * (percent.value*0.01/12) * 1/(Math.pow((1+percent.value*0.01/12),moneyBoxTerm) - 1)).toFixed(2);
    }
});