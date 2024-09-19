document.getElementById('btn-out-money').addEventListener('click', function(e){
e.preventDefault();
const cashOut=getInputFieldValueById('input-out-money');

const pinNumber= getInputFieldValueById('input-cashout-pin');
if(isNaN(cashOut)){
    alert('please input valid amount');
    return;
}

if(pinNumber===1234){
const balance= getTextFieldValueById('account-balance');
if(cashOut>balance){
    alert('you donot have cashout money');
    return;
}
console.log(balance)
const newBalance= balance-cashOut;
document.getElementById('account-balance').innerText= newBalance;
const div= document.createElement('div');
div.classList.add('bg-yellow-400');
div.innerHTML=`
<h4 class="font-bold"> Cash out</h4>
<p>${cashOut} withdraw. New Balance ${newBalance}</p>
`
document.getElementById('transaction-container').appendChild(div);

}else{
    alert('no money for you');
}
});