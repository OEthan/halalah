let count = 0;
function pressSubscribe() {
  count++;
  if (count == 1){
    alert("Sorry, either your e-mail or password is incorrect. Have you made an account yet?");
  }
  let a = document.getElementById('subscribe');
  a.innerHTML = "Click here to make an account!"
  if (count >= 2){
    let input = document.getElementById("inp").value;
    let response = prompt("Okay, your account has been made. First, is this your email: " + input + "? y or n.");
    if (response == "y"){
      alert("That's great! Now send me a request for the subscription via email at TourismLibya@gmail.com. Response will be within 568 years.");
    } else {
      alert("Hmmm... try clicking again.")
    }
  }
}