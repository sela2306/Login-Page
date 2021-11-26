let id = (id) => document.getElementById(id);

let msgClasses = (msgClasses) => document.getElementsByClassName(msgClasses);

let username = id("username"),
 email = id("email"),
 password = id("password"),
 form = id("form");

let errorMsg = msgClasses("error"),
 successIcon = msgClasses("success-icon"),
 failureIcon = msgClasses("failure-icon");

 form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(username.value.trim() === ''){
        errorMsg[0].innerText = "Username cannot be blank";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
    } else {
        errorMsg[0].innerText = "";
        failureIcon[0].style.opacity = "0";
        successIcon[0].style.opacity = "1";
    }
    if(email.value.trim() === ''){
        errorMsg[1].innerText = "Email cannot be blank";
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
    } else {
        errorMsg[1].innerText = "";
        failureIcon[1].style.opacity = "0";
        successIcon[1].style.opacity = "1";
    }
    if(password.value.trim() === ''){
        errorMsg[2].innerText = "Password cannot be blank";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
    } else {
        errorMsg[2].innerText = "";
        failureIcon[2].style.opacity = "0";
        successIcon[2].style.opacity = "1";
    }
 })
