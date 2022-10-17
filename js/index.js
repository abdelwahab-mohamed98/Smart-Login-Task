var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPass = document.getElementById('signupPass');
var signinEmail = document.getElementById('signinEmail');
var signinPass = document.getElementById('signinPass');
var signBtn = document.getElementById('signBtn');
var usersData = [];

function createUser(){
  var userData = {
    userName : signupName.value,
    userEmail : signupEmail.value,
    userPass : signupPass.value,
  }
  usersData.push(userData);
  localStorage.setItem('users',JSON.stringify(usersData));
  clearForm();
  var signedUpSuccess = document.getElementById('signedUpSuccess');
  signedUpSuccess.innerHTML = 'SignUp Success'
}

if(signBtn.innerHTML == 'SignUp'){ 
  signBtn.addEventListener('click', function(){
    createUser();
  })
  
}
else if (signBtn.innerHTML == 'Login'){
  signBtn.addEventListener('click', function(){
    loginUser();
  })
}

if(localStorage.getItem('users') != null) {
  usersData = JSON.parse(localStorage.getItem('users'));
}

function loginUser() { 
  for(var i=0; i<usersData.length; i++){
    if(signinEmail.value == usersData[i].userEmail && signinPass.value == usersData[i].userPass){
      localStorage.setItem("name", JSON.stringify(usersData[i].userName));
      window.location.href = 'home.html';
    }
    else {
      var signinAlert = document.getElementById('signinAlert');
      signinAlert.innerHTML = 'Enter Valid Data'
    }
  }
}


function clearForm(){
  signupName.value = '';
  signupEmail.value = '';
  signupPass.value = '';
  }
  