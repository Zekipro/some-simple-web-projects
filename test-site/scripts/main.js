let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute('src', 'images/firefox2.jpg'); //注意地址里是斜杠不是反斜杠！
    } else {
      myImage.setAttribute('src', 'images/firefox.jpg');
    }
} 

//下为添加个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + '酷毙了!';
}

myButton.onclick = function() {
  setUserName();
}