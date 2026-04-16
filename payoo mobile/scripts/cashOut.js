document.getElementById('withdraw-btn').addEventListener('click', function(){

    //find agent number
    
    const numberOfAgent = document.getElementById('agent-number');
    const agentNumber = numberOfAgent.value;
    
    //find amount

    const numberOfAmount = document.getElementById('withdraw-amount');
    const amountWithdaw = numberOfAmount.value;

    // balance check

    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    

    //find the pin 

    const withdrawalPin = document.getElementById('withdraw-pin')
    const pinOfwithdraw = withdrawalPin.value;

    //current balance

    if(pinOfwithdraw === '1123'){
        if(parseFloat(amountWithdaw) > 0 && parseFloat(amountWithdaw) <= parseFloat(balance)){
            const newBalance = parseFloat(balance) - parseFloat(amountWithdaw);
            balanceElement.innerText = newBalance;
            alert('Cashout Successful!')
        }
        else{
            alert('Invalid Amount');
            return;
        }
    }
    else{
        alert('Invalid PIN');
        return;
    }
    numberOfAgent.value = '';
    numberOfAmount.value = '';
    withdrawalPin.value = '';
})