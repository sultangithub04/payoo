// console.log('test')
document.getElementById('button-login').addEventListener('click', function(e){
    e.preventDefault();
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNumber =document.getElementById('pin-number').value;
    console.log(pinNumber, phoneNumber)
    if(phoneNumber==='776699'&& pinNumber==='776699'){
        console.log('your are login')
        window.location.href='./home.html';
    }else{
        alert ('worng phone number')
    }
})