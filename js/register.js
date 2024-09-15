let register = document.getElementById("registerUser")
let form = document.getElementsByClassName('register-form')[0];
console.log(register)
let userList = {}
let users_json = localStorage.getItem('users');
if(users_json != null){
    userList = JSON.parse(users_json);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputs = document.querySelectorAll("input")
    // inputs = inputs.forEach(x=>x.value)
    let [name,email,password,confirmPassword] = inputs;
    name = name.value;
    email = email.value;
    password = password.value;
    confirmPassword = confirmPassword.value;
    // console.log(name)

    if (!name || !email || !password || !confirmPassword) {
        alert("Need to fill every field")
        return
    }
    if(password!==confirmPassword){
        alert("Password not same")
    }
    // let users  = localStorage.getItem("user")
    if(email in userList){
        alert("User already exist")
    }
    let user = {
        name,
        email,
        password
    }
    userList[email] = user;
  

    localStorage.setItem("user",JSON.stringify(userList))
    form.reset();
    window.location.href = "SignIn.html"
})