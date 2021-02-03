const totAmount = document.querySelector('.card__total-amount');
const firstPayment = document.querySelector('.card__first-payment');
const percent = document.querySelector('.card__percent');
const monthlyPayment = document.querySelector('.card__monthly-payment');
const addButton = document.querySelector('.add-card-button');
const card = document.querySelector('.first-card');
const container = document.querySelector('.container');
const date = document.querySelector('.card__date');
const buttonSave = document.querySelector('.card__buttons-save');
const buttonDelete = document.querySelector('.card__buttons-delete');
const toSave = document.querySelectorAll('.to-save');
const buttonEdit = document.querySelector('.card__edit-button');
const title = document.querySelector('.card__title');

var today = new Date();
var dd = String(today.getDate()).padStart(1, '0');
var mm = String(today.getMonth() + 1).padStart(1, '0');
var yyyy = today.getFullYear();
let moneyBoxTerm;

console.log(typeof totAmount.value);

date.addEventListener('change', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
    if(moneyBoxTerm<1) {
        alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
    } else {
    if (totAmount.value != '' && firstPayment.value != '' && percent.value != '') {
        let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
        monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
    }
}
});

totAmount.addEventListener('input', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
    if(moneyBoxTerm<1) {
        alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
    } else {
        if (date != null && firstPayment.value != '' && percent.value != '') {
            let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
            monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
        }
    }    
});

firstPayment.addEventListener('input', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
    if(moneyBoxTerm<1) {
        alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
    } else {
        if (date !=null && totAmount.value != '' && percent.value != '') {
            let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
            monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
        }
    }
});

percent.addEventListener('input', () => {
    moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
    if(moneyBoxTerm<1) {
        alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
    } else {
        if (totAmount.value != '' && firstPayment.value != '' && date != null) {
            let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
            monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
        }
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
    const title = newCard.querySelector('.card__title');
    
    
    date.addEventListener('change', () => {
        moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 31).toFixed(2);
        if (isFinite(totAmount.value) && isFinite(firstPayment.value) && isFinite(percent.value)) {
            let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
                monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
        };
    });

    percent.addEventListener('input', () => {
        moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
        if(moneyBoxTerm<1) {
            alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
        } else {
            if (totAmount.value != '' && firstPayment.value != '' && date != null) {
                let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
                monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
            }
        }
    });

    firstPayment.addEventListener('input', () => {
        moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
        if(moneyBoxTerm<1) {
            alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
        } else {
            if (date !=null && totAmount.value != '' && percent.value != '') {
                let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
                monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
            }
        }
    });

    totAmount.addEventListener('input', () => {
        moneyBoxTerm = ((+date.value.split('-')[0] - yyyy) * 12 + +date.value.split('-')[1] - mm + (+date.value.split('-')[2] - dd) / 30).toFixed(2);
        if(moneyBoxTerm<1) {
            alert('Минимальный срок - 1 месяц! Укажите , пожалуйста корректный срок.')
        } else {
            if (date != null && firstPayment.value != '' && percent.value != '') {
                let result = (totAmount.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1) - firstPayment.value * (percent.value * 0.01 / 12) * 1 / (Math.pow((1 + percent.value * 0.01 / 12), moneyBoxTerm) - 1)).toFixed(2);
                monthlyPayment.value = result > 0 ? monthlyPayment.value = result : false;
            }
        }    
    });

    buttonSave.addEventListener('click', () => {
        toSave.forEach((item) => {
            item.classList.add('inaccessible');
        });
        buttonSave.style.display = 'none';
        buttonDelete.style.display = 'none';
        buttonEdit.style.display = 'inline-block';
        title.style.backgroundColor = '#FDFFAB';
    });

    buttonEdit.addEventListener('click', () => {
        toSave.forEach((item) => {
            item.classList.remove('inaccessible');
        });

        buttonSave.style.display = 'inline-block';
        buttonDelete.style.display = 'inline-block';
        buttonEdit.style.display = 'none';
        title.style.backgroundColor = 'white';
    });

    buttonDelete.addEventListener('click', () => {
        if (window.confirm("Вы собираетесь удалить карточку?")) {
            newCard.remove(),
            alert('Карточка удалена.');
        }
    });
});

buttonSave.addEventListener('click', () => {
    toSave.forEach((item) => {
        item.classList.add('inaccessible');
    });
    buttonSave.style.display = 'none';
    buttonDelete.style.display = 'none';
    buttonEdit.style.display = 'inline-block';
    title.style.backgroundColor = '#FDFFAB';
});

buttonEdit.addEventListener('click', () => {
    toSave.forEach((item) => {
        item.classList.remove('inaccessible');
    });

    buttonSave.style.display = 'inline-block';
    buttonDelete.style.display = 'inline-block';
    buttonEdit.style.display = 'none';
    title.style.backgroundColor = 'white';
});

buttonDelete.addEventListener('click', () => {
    if (window.confirm("Вы собираетесь удалить карточку?")) {
        card.remove();
        function myFunction(event) {
            event.preventDefault();
        alert('Карточка удалена.');
      } 
       myFunction();
    }
});