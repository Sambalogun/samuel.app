let balance  = document.getElementById('balance')
let depositInput = document.getElementById('depositInput')
let withdrawInput = document.getElementById('withdrawInput')

let balAmount = 5000000


localStorage.setItem('balAmount', balAmount)

balance.textContent = JSON.parse(localStorage.getItem('balAmount'))



let depositBtn = document.querySelector('.btn1')

depositBtn.addEventListener('click',function(){
    let depositVal = Number(depositInput.value)
    
    balAmount = balAmount+depositVal

    localStorage.setItem('balAmount', balAmount)

    balance.textContent = JSON.parse(localStorage.getItem('balAmount'))
    depositInput.value = ''
    
     
})
let withdrawerBtn = document.querySelector('.btn2')
withdrawerBtn.addEventListener('click',function(){
    
    let withdrawVal = Number(withdrawInput.value)
    
    if (withdrawVal > balAmount){
        alert('overdraft')
        return
    }
    else{
            balAmount =balAmount-withdrawVal
            localStorage.setItem('balAmount',balAmount)
            balance.innerHTML =             JSON.parse(localStorage.getItem('balAmount'))
            withdrawInput.value = ''
    }
    
    
     
})