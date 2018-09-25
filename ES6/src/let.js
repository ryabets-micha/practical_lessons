let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.innerText = i;
  button.onclick = (e) => {
    console.log(i);
  }
  
}