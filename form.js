const form = document.querySelector('.sign-up')
// const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const pattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e =>{
    e.preventDefault()
 const username = form.username.value

if(pattern.test(username)){
    // feedback dood info
    feedback.textContent = ' the usernam is valid'
} else{
    // feedback help info
    feedback.textContent = 'username is not valid'
}

})

// live feedback
form.username.addEventListener('keyup', e=>{
   if(pattern.test(e.target.value)){
 form.username.setAttribute('class','success')
   }else{
    form.username.setAttribute('class','error')
   }
})