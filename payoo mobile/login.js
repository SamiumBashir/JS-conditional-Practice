document.getElementById('login-btn').addEventListener('click', function(){
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;


    const pinInput = document.getElementById('input-pin');
    const pinNumber = pinInput.value;

    numberInput.value = '';
    pinInput.value = '';

    if(contactNumber == '01934164177' && pinNumber == '1123'){
        alert('Welcome to Payoo')
        window.location.assign('/home.html')
    }
    else{
        alert('Check your number or pin')
    }
});