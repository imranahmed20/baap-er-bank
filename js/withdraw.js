document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawValueString = withdrawField.value;
    const newWithdrawValue = parseFloat(newWithdrawValueString)
    withdrawField.value = '';

    if(isNaN(newWithdrawValue)){
        alert('Please provide a valid number')
        return;
    }


    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = withdrawAmountElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)
    withdrawAmountElement.innerText = previousWithdrawAmount;


    const previousBalanceElement = document.getElementById('balance-amount');
    const previousBalanceAmountString = previousBalanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    if (newWithdrawValue > previousBalanceAmount) {
        alert('Baap er bank e ato taka nai')
        return;

    }
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawValue;
    withdrawAmountElement.innerText = currentWithdrawTotal;


    const restBalance = previousBalanceAmount - newWithdrawValue;
    previousBalanceElement.innerText = restBalance;
})

