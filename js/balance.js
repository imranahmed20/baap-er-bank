

document.getElementById('btn-deposit').addEventListener('click', function (){
//    step 2 : get the deposit amount from the deposit input field
//    step 3: for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositValueString = depositField.value;
    const newDepositValue = parseFloat(newDepositValueString)
    depositField.value = '';
    if(isNaN(newDepositValue)){
        alert('Please provide a valid number')
        return;
    }

    
    // step 4: get the current deposit total 
    // for non-input (element other than input , textarea) use innerText to get the balance

    const depositTotalElement  = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    depositTotalElement.innerText = newDepositValue;
     // step 5:add numbers to set the total deposit 
    const currentTotalDeposit = newDepositValue + previousDepositTotal;
    depositTotalElement.innerText = currentTotalDeposit;
    //  step 6 : get  balance current total 
    const previousBalanceElement = document.getElementById('balance-amount');
    const previousBalanceAmountString = previousBalanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    const totalAmount = previousBalanceAmount + newDepositValue;

    previousBalanceElement.innerText = totalAmount; 


})

