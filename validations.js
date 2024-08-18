const inputCardNumber = document.getElementById('card_number');
const inputCardName = document.getElementById('card_name');
const inputCardExpMonth = document.getElementById('card_exp-month');
const cardExpYear = document.getElementById('card_exp-year');
const inputCardCode = document.getElementById('card_code');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');


const cardNumber = document.querySelector('.card__number span').textContent.split('');
const cardName = document.querySelector('.card__name');
const cardDate = document.querySelector('.card__expiration-date').textContent.split('');
const cardCode = document.querySelector('.card__cod').textContent.split('');

const card = document.querySelector('.card');

const maskNumber = "####-####-####-####";
const maskName = /^[a-zA-Z]| $/;
const maskDate = "##/##";
const maskCVV = "###";
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let current = "";
let cardNumberArr = [];

inputCardNumber.addEventListener("keydown", e=>{
    if(e.key == 'Tab'){
        return;
    }
    e.preventDefault();
    
    handleInput(maskNumber, e.key, cardNumberArr);
    inputCardNumber.value = cardNumberArr.join('');

    if(e.key !== 'Backspace'){
        inputArr = inputCardNumber.value.split('');
        cardNumber[e.target.value.length - 1] = inputArr[inputArr.length-1];
        document.querySelector('.card__number span').textContent = cardNumber.join('');
    }
})


inputCardName.addEventListener("keydown", e=>{
    if(e.key == 'Tab'){
        return;
    }
    if(!maskName.test(e.key) || e.target.value.length == 25) {
        if(e.key === 'Backspace') return;
        e.preventDefault();
    }
})

inputCardName.addEventListener("input", ()=>{
    cardName.textContent = inputCardName.value;
})


inputCardExpMonth.addEventListener("keydown", e=>{
    if(e.key == 'Tab'){
        return;
    }
    if(!numbers.includes(e.key) || e.target.value.length == 2) {
        if(e.key === 'Backspace'){
            if(e.target.value.length == 2){
                cardDate[0] = e.target.value[0];
                cardDate[1] = "X";
            }else if(e.target.value.length == 1){
                cardDate[0] = "X";
                cardDate[1] = "X";
            }
            document.querySelector('.card__expiration-date').textContent = cardDate.join('');
            return;
        }
        e.preventDefault();
        return;
    }
    cardDate[e.target.value.length] = e.key;
    document.querySelector('.card__expiration-date').textContent = cardDate.join('');
})


cardExpYear.addEventListener("keydown", e=>{
    if(e.key == 'Tab'){
        return;
    }
    if(!numbers.includes(e.key) || e.target.value.length == 4) {
        if(e.key === 'Backspace'){
            if(e.target.value.length == 4){
                cardDate[3] = e.target.value[2];
                cardDate[4] = "X";
            }else if(e.target.value.length == 3){
                cardDate[3] = "X";
                cardDate[4] = "X";
            }
            document.querySelector('.card__expiration-date').textContent = cardDate.join('');
            return;
        }
        e.preventDefault();
        return;
    }
    if(e.target.value.length >= 2){
        cardDate[e.target.value.length + 1] = e.key
        document.querySelector('.card__expiration-date').textContent = cardDate.join('');
    }
})



inputCardCode.addEventListener("keydown", e=>{
    if(e.key == 'Tab'){
        return;
    }
    if(!numbers.includes(e.key) || e.target.value.length == 3) {
        if(e.key === 'Backspace'){
            if(e.target.value.length == 3){
                cardCode[0] = e.target.value[0];
                cardCode[1] = e.target.value[1];
                cardCode[2] = "X";
            }else if(e.target.value.length == 2){
                cardCode[0] = e.target.value[0];
                cardCode[1] = "X";
                cardCode[2] = "X";
            }else if(e.target.value.length == 1){
                cardCode[0] = "X";
                cardCode[1] = "X";
                cardCode[2] = "X";
            }
            document.querySelector('.card__cod').textContent = cardCode.join('');
            return;
        }
        e.preventDefault();
        return;
    }
    cardCode[e.target.value.length] = e.key;
    document.querySelector('.card__cod').textContent = cardCode.join('');
})

inputCardCode.addEventListener("focus", ()=>{
    card.classList.toggle("focus");
})
inputCardCode.addEventListener("blur", ()=>{
    card.classList.toggle("focus");
})


function handleInput(mask, key, arr) {
    if (key === "Backspace" && cardNumberArr.length > 0) {
        if(cardNumber[inputCardNumber.value.length - 1] !== " ")  cardNumber[inputCardNumber.value.length - 1] = "X";
        document.querySelector('.card__number span').textContent = cardNumber.join('');
        arr.pop();
        return;
    }
    
    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
        }
    }
}