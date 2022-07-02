function randomCode() {
    let rand =  Math.random();
    return (Math.floor((rand * 999999) + 100000)) ;
}
const code = randomCode();

function sendEmail() {
    let email = document.getElementById('email').value;
    Email.send({
      Host: "smtp.gmail.com",
      Username: "tourtubeinc@gmail.com",
      Password: "62d6886a-4195-4a55-b53f-9d5250588abd",
      To: email,
      From: "tourtubeinc@gmail.com",
      Subject: "This is your 6 digit code for password reset",
      Body: code,
    })
      .then(function () {
        alert("mail sent successfully");
      });
}
function fpwProtocol(){
    let email = document.getElementById('email').value;
    let emailExist = checkForEmail(email);
    if (emailExist){
        sendEmail();
        localStorage.setItem('fpw-email', email);
        document.getElementById('msg1').innerHTML = "A 6 Digit code is sent to your registered Email.";
        document.getElementById('code').disabled = false;
    }
    else {
        document.getElementById('msg1').innerText = 'Please enter an email which is registered with your account!';
    }
}
function checkForEmail(emailInput) {
    let getFromLs = JSON.parse(localStorage.getItem('usersname'));
    let emailExist = false;
    let i; 
    for (i = 0; i < getFromLs.length; i++){
        const user = getFromLs[i];
        const emailFromLs = user.email;
        if(emailInput == emailFromLs){
            emailExist = true;
            break;
        }
    }
    return emailExist;
}
function mainFunc() {
    let codeFromUser = document.getElementById('code').value;
    if (codeFromUser == code){
        document.getElementById('enter-pass').disabled = false;
        document.getElementById('confirm-pass').disabled = false;
        document.getElementById('success').innerText = "success";
    }
    else {
        document.getElementById('msg2').innerText = 'The code you entered is incorrect :(';
  
    }
}
function updatePass() {
    let email = document.getElementById('email').value;
    let getFromLs = JSON.parse(localStorage.getItem('usersname'));
    const newPass = document.getElementById('enter-pass').value;
    const confirmPass = document.getElementById('confirm-pass').value;
    if(newPass == confirmPass){
        let i;
        for (i = 0; i < getFromLs.length; i++){
            const user = getFromLs[i];
            const emailFromLs = user.email;
            if(email == emailFromLs){
                getFromLs[i].password = confirmPass;
                getFromLs = JSON.stringify(getFromLs);
                localStorage.setItem('usersname', getFromLs);
                document.getElementById('form').innerText = "Your Password changed successfuly";
                break;
            }
        }
    } 
    else{
        document.getElementById('msg3').innerText = 'Passwords do not Match :(' ;
    }
}
function show_pass() {
    let checkBox = document.getElementById('show-pass');
  
    if (checkBox.checked) {
      document.getElementById('enter-pass').type = "text";
      document.getElementById('confirm-pass').type = "text";
    }
    else {
        document.getElementById('enter-pass').type = "password";
        document.getElementById('confirm-pass').type = "password";
    }
  }
