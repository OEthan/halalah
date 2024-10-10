let factdisplay = document.getElementById("factdisplay");
let emailslist = [];
let count = 0;
let input = document.getElementById("inp").value;
let password = document.getElementById("pass").value;
let a = document.getElementById('subscribe');
let box = document.getElementById('box');
let otherthing = document.getElementById('otherthing');
let pdiv = document.getElementById('pdiv');
let p = document.getElementById('p');
let state = 0;

function pressSubscribe() {
  if (state == 0){
    input = document.getElementById("inp").value;
    password = document.getElementById("pass").value;
    a = document.getElementById('subscribe');
    box = document.getElementById('box');
    let inputt = document.getElementById("inp").value;
    let passwordd = document.getElementById("pass").value;
    emailslist = [inputt];
    count++;
  }
   displayemails();
  if (state == 1) {
    pdiv.innerHTML = "<input type = 'password' id = 'pass' placeholder = 'password'>";
    box.style.fontSize = "1.7ch";
    inp.style.fontSize = "1.7ch";
    inp.style.borderColor = "black";
    input = "";
    p.innerHTML = "password:";
    a.innerHTML = "Sign in to your subscription of the Libyan tourism magazine!";
    otherthing.innerHTML = " ";
    state = 0;
    count = 0;
  } else if (input == "alalalalala@lal.com" && password == "GoUzbekistan!123" && state == 0){
    box.style.fontSize = "0";
    inp.style.fontSize = "0";
    inp.style.borderColor = "#FFFAF0";
    pdiv.innerHTML = "";
    p.innerHTML = "";
    otherthing.innerHTML = "<h1> Great! You have signed in </h1>"
    a.innerHTML = "Sign Out";
    state = 1;
  } else {
    if (count == 1){
      alert("Sorry, either your e-mail or password is incorrect. Have you made an account yet?");
    }
    a.innerHTML = "Click here to make an account!"
    if (count >= 2){
      let response = prompt("Okay. First, is this your email: " + input + "? y or n.");
      if (response == "y"){
        localStorage.setItem("originalemail", inputt);
        localStorage.setItem("originalpassword", passwordd);
        alert("That's great! Now send us a request for the subscription via email at TourismLibya@gmail.com. Response will be within 568 years.");
      } else {
        //WHY ARE YOU LOOKING HERE??????
        alert("Hmmm... try clicking again.")
      }
    }
  }
}


let c = document.getElementById('can');
c.addEventListener('click', paus);
let ctx = c.getContext('2d');
ctx.fillStyle = '#FA8072';
ctx.strokeStyle = '#FA9E72';
ctx.lineWidth = 5;
ctx.moveTo(0, 0);
ctx.stroke();
ctx.fillRect(0, 50, 300, 50)
ctx.fillRect(125, 0, 50, 300)
let x = 0;
let y = 0;
let z = 100
let z1 = 190
let y1 = 60
let y2 = 120
let z2 = 80;
let z3 = 240
let pa = 0;
function paus() {
  if (pa == 0){
    pa = 1;
  } else {
    pa = 0;
  }
}
function horizontal(){
  if (pa == 0){
    ctx.fillRect(z, 62.5, 25, 25);
    z += 1.5;
    if (z > 300) {
      z = -25;
    }
    ctx.clearRect(z, 62.5, 25, 25); 
  } else {}
}
function horizontal1(){
  if (pa == 0){
    ctx.fillRect(x, 62.5, 25, 25);
    x += .85;
    if (x > 300) {
      x = -25;
    }
    ctx.clearRect(x, 62.5, 25, 25); 
  } else {}
}
function horizontal2(){
  if (pa == 0){
    ctx.fillRect(z1, 62.5, 25, 25);
    z1 += .95;
    if (z1 > 300) {
      z1 = -25;
    }
    ctx.clearRect(z1, 62.5, 25, 25); 
  } else {}
}
function horizontal3(){
  if (pa == 0){
    ctx.fillRect(z2, 62.5, 25, 25);
    z2 += .95;
    if (z2 > 300) {
      z2 = -25;
    }
    ctx.clearRect(z2, 62.5, 25, 25); 
  } else {}
}
function horizontal4(){
  if (pa == 0){
    ctx.fillRect(z3, 62.5, 25, 25);
    z3 += .95;
    if (z3 > 300) {
      z3 = -25;
    }
    ctx.clearRect(z3, 62.5, 25, 25); 
  } else {}
}
function vertical(){
  if (pa == 0){
    ctx.fillRect(137.5, y, 25, 25);
    y += .85
    if (y > 150) {
      y = -25;
    }
    ctx.clearRect(137.5, y, 25, 25);
  } else {}
}
function vertical2() {
  if (pa == 0){
    ctx.fillRect(137.5, y1, 25, 25);
    y1 += 1.3; 
    if (y1 > 150) {
      y1 = -25;
    }
    ctx.clearRect(137.5, y1, 25, 25);
  }
}
function vertical3() {
  if (pa == 0){
    ctx.fillRect(137.5, y2, 25, 25);
    y2 += .65; 
    if (y2 > 150) {
      y2 = -25;
    }
    ctx.clearRect(137.5, y2, 25, 25);
  }
}
setInterval(horizontal, 1);
setInterval(horizontal1, 1);
setInterval(horizontal2, 1);
setInterval(horizontal3, 1);
setInterval(horizontal4, 1);
setInterval(vertical, 1);
setInterval(vertical2, 1);
setInterval(vertical3, 1);

// let c2 = document.getElementById('can2');
// c2.addEventListener('wheel', move);
// c2.addEventListener('wheel', up);
// c2.addEventListener('click', move);
// c2.addEventListener('click', up);
// let ctx2 = c2.getContext('2d');
// ctx2.fillStyle = '#FA8072';
// ctx2.moveTo(0, 150);
// ctx2.stroke();
// ctx2.fillRect(0, 120, 30, 30);
// let pos = 5;
// let height = 120;

function move(){
  pos += 10;
  ctx2.clearRect(0, 0, 300, 150);
  ctx2.fillRect(pos, height, 30, 30);
  if (pos >= 280){
    pos = 0;
  }
}
function up(){
  height -= 4;
  ctx2.clearRect(0, 0, 300, 150);
  ctx2.fillRect(pos, height, 30, 30);
  if (height <= 0){
    height = 120;
  }
}

let body = document.getElementById("body");
function floral() {
  let body = document.getElementById("body");
  let faq = document.getElementById("faq");
  let faq1 = document.getElementById("faq1");
  let faq2 = document.getElementById("faq2");
  let description = document.getElementById("description");
  let ad = document.getElementById("ad");
  body.classList = 'floral';
  faq.classList = 'border3';
  faq1.classList = 'border3';
  faq2.classList = 'border3';
  description.classList = 'border2';
  ad.classList = 'ad';
}
function navajo() {
  let body = document.getElementById("body");
  let faq = document.getElementById("faq");
  let faq1 = document.getElementById("faq1");
  let faq2 = document.getElementById("faq2");
  let description = document.getElementById("description");
  let ad = document.getElementById("ad");
  body.classList = 'navajo';
  faq.classList = 'border3';
  faq1.classList = 'border3';
  faq2.classList = 'border3';
  description.classList = 'border2';
  ad.classList = 'ad';
}
function highcontrast() {
  let body = document.getElementById("body");
  let faq = document.getElementById("faq");
  let faq1 = document.getElementById("faq1");
  let faq2 = document.getElementById("faq2");
  let description = document.getElementById("description");
  let ad = document.getElementById("ad");
  body.classList = 'highcontrast';
  faq.classList = 'highcontrastborder';
  faq1.classList = 'highcontrastborder';
  faq2.classList = 'highcontrastborder';
  description.classList = 'highcontrastborder';
  ad.classList = 'highcontrastad';
}

function monospace() {
  document.getElementById("body").style.fontFamily = "monospace";
  document.getElementById("subscribe").style.fontFamily = "monospace"
  document.getElementById("buttona").style.fontFamily = "monospace"
  document.getElementById("buttonb").style.fontFamily = "monospace"
  document.getElementById("inp").style.fontFamily = "monospace"
  document.getElementById("body").style.fontSize = "2ch";
  document.getElementById("subscribe").style.fontSize = "2ch";
  document.getElementById("buttona").style.fontSize = "2ch";
  document.getElementById("buttonb").style.fontSize = "2ch";
  document.getElementById("buttonc").style.fontFamily = "monospace"
  document.getElementById("buttonc").style.fontSize = "2ch";
}
function serif() {
  document.getElementById("body").style.fontFamily = "Georgia, serif";
  document.getElementById("body").style.fontSize = "12px";
  document.getElementById("subscribe").style.fontSize = "12px";
  document.getElementById("buttona").style.fontSize = "12px";
  document.getElementById("buttonb").style.fontSize = "12px";
  document.getElementById("subscribe").style.fontFamily = "Georgia, serif"
  document.getElementById("buttona").style.fontFamily = "Georgia, serif"
  document.getElementById("buttonb").style.fontFamily = "Georgia, serif"
  document.getElementById("inp").style.fontFamily = "Georgia, serif"
  document.getElementById("buttonc").style.fontFamily = "serif"
  document.getElementById("buttonc").style.fontSize = "12px";
}
function sansserif() {
  let body = document.getElementById("body");
  body.style.fontFamily = 'sans-serif';
  document.getElementById("body").style.fontSize = "12px";
  document.getElementById("subscribe").style.fontSize = "12px";
  document.getElementById("buttona").style.fontSize = "12px";
  document.getElementById("buttonb").style.fontSize = "12px";
  document.getElementById("subscribe").style.fontFamily = "sans-serif"
  document.getElementById("buttona").style.fontFamily = "sans-serif"
  document.getElementById("buttonb").style.fontFamily = "sans-serif"
  document.getElementById("inp").style.fontFamily = "sans-serif"
  document.getElementById("buttonc").style.fontFamily = "sans-serif"
  document.getElementById("buttonc").style.fontSize = "12px";
}

function askemail(){
  emailslist = [(localStorage.getItem("originalemail"))]
  let email = prompt("what is your new email");
  emailslist.push(email);
  displayemails();
}

function displayemails() {
  let list = document.getElementById("li");
  list.innerHTML = "Current Emails:";
  for (let i = 0; i < emailslist.length; i++){
    list.innerHTML += '<p>' + emailslist[i] + ' | Password: ⋅⋅⋅⋅⋅⋅⋅⋅⋅' + '<button onclick = "showpass()" class = "buttonfloral">Show Password</button>' + '  ' + '<button onclick = "delet('+i+')" class = "buttonfloral">Delete</button>' + '<p>';
  }
}

function showpass(){
  prompt('Input master password');
  alert('Sorry, Incorrect');
}

function delet(i) {
  let list = document.getElementById("li");
  if (emailslist.length == 1){
    list.innerHTML = "ljfs";
  }
  emailslist.splice(i, 1);
  displayemails();
}

//factdisplay
async function loadfact(){
  let rsp = await fetch('https://catfact.ninja/fact');
  let js = await rsp.json();
  let fact = await js.fact;
  factdisplay.innerHTML = fact;
}