var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/logo.jpg') {
      myImage.setAttribute ('src','Images/injir.jpg');
    } else {
      myImage.setAttribute ('src','Images/logo.jpg');
    }
}
//knopka
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
