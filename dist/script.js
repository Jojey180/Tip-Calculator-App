// Inputs
const billAmount = document.querySelector('.bill-amount');
const numberOfPeople = document.querySelector('.people-number');
const tipPerPerson = document.querySelector('.amount-tipped');
const totalPerPerson = document.querySelector('.total-amount');
const tips = document.querySelectorAll('.tip-per');
const tipCustom = document.querySelector('#custom');
const resetButton = document.querySelector('.reset-btn');
const error = document.querySelector('.error');

billAmount.value = '0.0';
numberOfPeople.value = '1';
tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

billAmount.addEventListener('input', () => {
    billValue = parseFloat(billAmount.value)
    calculateTip()
})

numberOfPeople.addEventListener('input', () => {
    peopleValue = parseFloat(numberOfPeople.value)
    calculateTip()

    if (peopleValue < 1) {
        error.style.display = 'flex'
        numberOfPeople.style.border = '3px solid red'
    } else {
        error.style.display = 'none'
        numberOfPeople.style.border = 'none'
    }
})

tipCustom.addEventListener('input', () => {
    tipValue = parseFloat(tipCustom.value / 100);

    tips.forEach ((tip) => {
        tip.classList.remove('active-tip')
    })
    calculateTip()
})

tips.forEach ((tip) => {
    addEventListener('click', (e) => {
        tips.forEach ((tip) => {
            tip.classList.remove('active-tip');
            if (e.target.innerHTML === tip.innerHTML) {
                tip.classList.add('active-tip');
                tipValue = parseFloat(tip.innerHTML) / 100;
            }
        })
        calculateTip()
    })
})

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = '$' + total.toFixed(2);
    }
}

resetButton.addEventListener('click', () => {
    billAmount.value = '0.0';
    billValue = parseFloat(billAmount.value);
    numberOfPeople.value = '1';
    peopleValue = parseFloat(numberOfPeople.value);
    tipCustom.value = '';
})