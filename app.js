const inputPrice = document.querySelector('.inputPrice');
const btns = document.querySelectorAll('.btns');
const personNumber = document.querySelector('.personNumber');
const amount = document.querySelector('.amount');
const totalAmount = document.querySelector('.total-amount');
const resetBtn = document.querySelector('.reset-btn');
let selectTip;



btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        selectTip = event.target.value;
        console.log(selectTip);
    })
})
personNumber.addEventListener("input", function(event) {
    if (inputPrice.value) {

        let sum = (+inputPrice.value + (inputPrice.value / 100) * selectTip).toFixed(2);
        let amountOne = (sum / personNumber.value).toFixed(2);
        totalAmount.innerHTML = `$${sum}`;
        amount.innerHTML = `$${amountOne}`

    }
})
resetBtn.addEventListener('click', function() {
    totalAmount.textContent = 0;
    amount.textContent = 0;
    inputPrice.value = '';
    personNumber.value = '';
    selectTip = 0;
})