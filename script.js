const totAmount = document.querySelector('.card__total-amount');
const firstPayment = document.querySelector('.card__first-payment');
const percent = document.querySelector('.card__percent');
const monthlyPayment = document.querySelector('.card__monthly-payment');
const addButton = document.querySelector('.add-card-button');
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const date = document.querySelector('.card__date');
const buttonSave = document.querySelector('.card__buttons-save');
const buttonDelete = document.querySelector('.card__buttons-delete');
const toSave = document.querySelectorAll('.to-save');
const buttonEdit = document.querySelector('.card__edit-button');

var today = new Date();
var dd = String(today.getDate()).padStart(1, '0');
var mm = String(today.getMonth() + 1).padStart(1, '0');
var yyyy = today.getFullYear();
let moneyBoxTerm;

date.addEventListener('change', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 31).toFixed(2);
    if (isFinite(totAmount.value) && isFinite(firstPayment.value) && isFinite(percent.value)) {
        monthlyPayment.value = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
    }
});

addButton.addEventListener('click', () => {
    let newCard = document.createElement('div');
    newCard.innerHTML = card.innerHTML;
    newCard.classList.add('card');
    container.append(newCard);
    let totAmount = newCard.querySelector('.card__total-amount');
    let firstPayment = newCard.querySelector('.card__first-payment');
    let percent = newCard.querySelector('.card__percent');
    let monthlyPayment = newCard.querySelector('.card__monthly-payment');
    let date = newCard.querySelector('.card__date');
    const buttonSave = newCard.querySelector('.card__buttons-save');
    const buttonDelete = newCard.querySelector('.card__buttons-delete');
    const toSave = newCard.querySelectorAll('.to-save');
    const buttonEdit = newCard.querySelector('.card__edit-button');
    
    date.addEventListener('change', () => {
        moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 31).toFixed(2);
        if (isFinite(totAmount.value) && isFinite(firstPayment.value) && isFinite(percent.value)) {
            monthlyPayment.value = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
        }
    });

    buttonSave.addEventListener('click', () => {
        toSave.forEach((item) => {
            item.classList.add('inaccessible');
        })
        buttonSave.style.display = 'none';
        buttonDelete.style.display = 'none';
        buttonEdit.style.display = 'inline-block';
    })

    buttonEdit.addEventListener('click', () => {
        toSave.forEach((item) => {
            item.classList.remove('inaccessible');
        })

        buttonSave.style.display = 'inline-block';
        buttonDelete.style.display = 'inline-block';
        buttonEdit.style.display = 'none';
    })

    buttonDelete.addEventListener('click', () => {
        newCard.remove();
    })
})

buttonSave.addEventListener('click', () => {
    toSave.forEach((item) => {
        item.classList.add('inaccessible');
    })
    buttonSave.style.display = 'none';
    buttonDelete.style.display = 'none';
    buttonEdit.style.display = 'inline-block';
})

buttonEdit.addEventListener('click', () => {
    toSave.forEach((item) => {
        item.classList.remove('inaccessible');
    })

    buttonSave.style.display = 'inline-block';
    buttonDelete.style.display = 'inline-block';
    buttonEdit.style.display = 'none';
})

buttonDelete.addEventListener('click', () => {
    card.remove();
})


