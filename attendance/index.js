function login_btn(){
    const email_address=document.querySelector("#form2Example17").value
const pass=document.querySelector("#form2Example27").value
if(email_address=="midhun@gmail.com" && pass=="12345"){
    window.location="/Users/saairam/Desktop/attendance/form.html"
}else{
    alert("Please Enter the Correct Password")
}

}


