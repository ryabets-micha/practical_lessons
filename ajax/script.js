'use strict'


function loadPhones() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'phones.json', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    button.parentNode.removeChild(button);

    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      try {
        var phones = JSON.parse(xhr.responseText);
      } catch (e) {
        console.log("Некорректный ответ " + e.message);
      }
      showPhones(phones);
    }
  }

  xhr.send();

  button.innerHTML = 'Загружаю...';
  button.disabled = true;
}

function showPhones(phones) {
  phones.forEach(function(phone) {
    var li = list.appendChild(document.createElement('li'));
    li.classList.add('lishka');
    li.innerHTML = phone.name;
  });
}