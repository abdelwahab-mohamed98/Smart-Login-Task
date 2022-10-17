var loggedinDone = document.getElementById('loggedinDone');
var usersData = [];

if(localStorage.getItem('users') != null) {
  var greetName = localStorage.getItem("name");
  loggedinDone.innerHTML = `<h1>Welcome ${greetName}</h1>`
}