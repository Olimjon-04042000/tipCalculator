const inputPrice = document.querySelector('.inputPrice');
const btns = document.querySelectorAll('.btns');
const personNumber = document.querySelector('.personNumber');
let selectTip;



btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        selectTip = event.target.value;
        console.log(selectTip);
    })
})
personNumber.addEventListener("input", function(event) {
    // console.log(event.target.value);
    if (inputPrice.value) {
        console.log(inputPrice.value);

        let sum = inputPrice.value + (inputPrice.value / 100) * selectTip;
        console.log(sum);


    }
})