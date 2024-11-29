const form = document.querySelector(".form")
const form_control = document.querySelector(".form-control")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")



//show password




form.addEventListener("submit", (event) => {

    event.preventDefault()




    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let icon = document.querySelector(".icon")

   
    
    


    const sendData = (count,sRate,usernameVal) =>{
           if(sRate === count){
            alert("registration successfull !")
            swal("Good job!", "You clicked the button!", "success")
           setTimeout(() => {
             location.href = `demo.html?username*${usernameVal}`
           }, 3000);
           }
    }


const setSuccess = () =>{
    let FormCon = document.getElementsByClassName("form-control")
    let count = FormCon.length -1;
    for(let i = 0;i<FormCon.length;i++){
        if(FormCon[i].className === "form-control success"){
            let sRate = 0 + i;
            console.log(sRate)
            sendData(count,sRate,usernameVal)
        }else{
            return false
        }
    }
}




    const setErrorMsg = (input, errormsg) => {


        const formControl = input.parentElement;
        const small = formControl.querySelector("small")
        formControl.className = "form-control error"
        small.innerText = errormsg
    }




    const setSuccessMsg = (input) => {


        let formControl = input.parentElement;
        formControl.className = "form-control success"
    }
    //username validation


    if (usernameVal === "") {
        setErrorMsg(username, "username must be required")
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, "username min 5 char")
    } else {
        setSuccessMsg(username)
    }

    //email validation


    const isEmail = (emailVal) => {
        let atsymbol = email.indexOf("@")
        if (atsymbol < 1) return false;
        let dot = email.lastIdexOf(".")
        if (dot <= atsymbol + 2) return false;
        if (dot === emailVal.length - 1) return false
    }

    if (emailVal === "") {
        setErrorMsg(email, "email must be required!")
    } else {
        setSuccessMsg(email)
    }


    //passowrd validation

    if (passwordVal === "") {
        setErrorMsg(password, "password must be required!")
    } else if (passwordVal.length < 5) {
        setErrorMsg(password, "password mini 15char")
    } else {
        setSuccessMsg(password)
    }


    //confirm password

    if (cpasswordVal === "") {
        setErrorMsg(cpassword, "confirm password must be required!")
    } else if (cpasswordVal != passwordVal) {
        setErrorMsg(cpassword, "password does not match!")
    } else {
        setSuccessMsg(cpassword)
    }


setSuccess()


})

