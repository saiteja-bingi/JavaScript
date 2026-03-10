let form=document.querySelector("form")
let usernameval=document.querySelector("#username")
let emailval=document.querySelector("#email")

form.addEventListener('submit',(event)=>{
    // to stop page reloading
    event.preventDefault()

    // datat read is always string
    let username=usernameval.value
    let email=emailval.value;
    console.log(username,email);
})

// this is impertaive approach 
// react is declarative