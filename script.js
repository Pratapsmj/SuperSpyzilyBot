let count1 = 0;
let count2 = 0;
let wallet = 100;

function animateValue(id, end) {
  let current = 0;
  let interval = setInterval(() => {
    current += 5;
    document.getElementById(id).innerText = current;
    if (current >= end) clearInterval(interval);
  }, 30);
}

window.onload = function(){
  if(document.getElementById("users")){
    animateValue("users", 2500);
    animateValue("orders", 840);
  }
}

function addMoney(){
  wallet += 10;
  document.getElementById("wallet").innerText = wallet;
  showToast("Money Added Successfully!");
}

function showToast(message){
  let toast = document.createElement("div");
  toast.className="toast";
  toast.innerText=message;
  document.body.appendChild(toast);
  toast.style.display="block";
  setTimeout(()=>{
    toast.remove();
  },3000);
}

function login(){
  window.location.href="dashboard.html";
}

function register(){
  window.location.href="login.html";
}
