document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    // const pinNumber= document.getElementById('input-pin-number').value;
    if(isNaN(addMoney)){
        alert('not a number');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        const p =document.createElement('p');
        p.innerText= `Added: ${addMoney} tk. balance: ${newBalance};`
        console.log(p)
        document.getElementById('transaction-container').appendChild(p);


    } else {
        alert('wrong pin number');
    }
});