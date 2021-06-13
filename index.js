function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();

}


document.getElementById("digits-container").addEventListener('click', function (e) {
    const digit = e.target.innerText;
    if (isNaN(digit)) {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = '';
    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
});


function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        document.getElementById('correct').style.display = 'block';
        document.getElementById('incorrect').style.display = 'none';

    }
    else {
        document.getElementById('incorrect').style.display = 'block';
        document.getElementById('correct').style.display = 'none';
    }
}