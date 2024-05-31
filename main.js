const hamburger = document.querySelector('.bars');
const menu = document.querySelector('#nav');
const ul = document.querySelector('#ul');
const a = document.querySelector('h3');
const closeMenu = document.querySelector('.close');
const form = document.querySelector('.form');
const signIn = document.querySelector('.signIn');
const closeForm = document.querySelector('.close_form');
const containerBox = document.querySelectorAll('.box')
const nxtBtn = document.querySelector('#nxtBtn')
// console.log(containerBox)
const preBtn = document.querySelector('#preBtn')
const hide = document.getElementById('hide');
const show = document.getElementById('show');
const input = document.getElementById('input');
const submitForm = document.getElementById("submit")
const formMgs = document.getElementById("form_msg")
const output1 = document.querySelector("#output")
const inputNames = document.getElementById('names');
const forgotPass = document.getElementById("forgot_password")
const acct = document.getElementById("acct")
console.log(submitForm)
const para = document.getElementById("para")



// this is for the hamburger menu bar function

hamburger.addEventListener('click', function(open){
 
    menu.classList.add('on');
   
    const color = document.createAttribute('class')
    color.value= 'mofin'
    a.setAttributeNode(color)
    hamburger.style.display = 'none'
    


    closeMenu.addEventListener('click', function(close){
    
        menu.classList.remove('on');
        ul.removeChild(list)
        // a.removeAttributeNode(color)
        hamburger.style.display = 'block'
        a.style.color = 'white'
        // alert('hello')
       
    })
})
// 


//  this function is for form validation 

signIn.addEventListener('click', function(sign){
    form.classList.add('close');  
    menu.classList.remove('on');

    closeForm.addEventListener('click', function(closed){
        form.classList.remove('close');
        menu.classList.remove('on');
        hamburger.style.display = 'block'
          
    })
})



show.addEventListener('click', function(did){
    // alert('hello world')
    input.setAttribute('type', 'text')
    hide.style.display ='block'
    show.style.display ='none'
})

hide.addEventListener('click', function(hid){
    input.setAttribute('type', 'password')
    show.style.display ='block'
    hide.style.display ='none'
})



submitForm.addEventListener('click', function(move){
    // e.preventDefault()
    // alert("hi")
    inputNames.innerHTML = "where are going going " +  acct.value  ;
    inputNames.value = ''
})

submitForm.addEventListener('click', () =>{
     
    if(submitForm.innerHTML == "submit"){
        forgotPass.style.display = 'none'
        acct.textContent ="log in."
        para.style.color = 'white'
        submitForm.innerHTML = "log"
    } 

})

forgotPass.addEventListener('click', () => {
     
    if (submitForm.innerHTML === "log in") {


    forgotPass.style.display = 'block'
    acct.textContent ="sign in."
    submitForm.innerHTML = "submit"
    input.setAttribute('placeHolder', 'retype_password')
    para.style.color = 'red'
    inputNames.setAttribute('placeHolder', 'Enter new password')
    }
   
})
// 

// this is for slide event in the fifth slide section of the css ;

containerBox.forEach( function(items){
    let containerDemision = items.getBoundingClientRect();
    let containerWidth = containerDemision.width;


    nxtBtn.addEventListener('click', () =>{
        items.scrollLeft += containerWidth
        // alert('hi')
    })
    preBtn.addEventListener('click', () =>{
        items.scrollLeft -= containerWidth
        // alert('ho')
    })
})

// 

     

        
  










