let form = document.getElementsByClassName('loginForm')[0];
// let inputs = document.querySelectorAll("input")
let email1 = document.getElementById('email');
let password1 =document.getElementById('pass');

// console.log(password)
let userList = {};
let loginList = {};
form.addEventListener("submit",(e)=>{
    let user_json = localStorage.getItem("users")
   let email = email1.value;
   let password = password1.value;
    if(!user_json){
        user_json = JSON.parse(user_json)
    }
    
    console.log(email,password,user_json,userList)
    if(!email || !password){
        alert('All fields are required');
        return;
    }
    if(email in userList == false){
        alert('User does not exist');
        return;
   }

   if(userList[email].password != password){
       alert('Password is incorrect');
       return;
   }

   let token = generateToken();

   localStorage.setItem('token', token);

   userList[email].token = token;
   localStorage.setItem('users', JSON.stringify(userList));

   userList[token] = email;

   localStorage.setItem('login', JSON.stringify(userList));

   alert('Login successful');
   form.reset();
   window.location.href = 'jira.html';
})

function generateToken(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(<>?){}[]";

    let str = ""
    for(let i = 1; i<=10; i++){
       let index = parseInt(Math.random() * chars.length);
    str = str + collection[index]
    }

    return str;
}