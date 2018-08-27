'use strict'


contents.onclick = function(evt) {
  var target = evt.target;

  function handleLink(href) {
    var isLeaving = confirm('Уйти на ' + href + '?');
    if (!isLeaving) return false;
  }

  while (target != this) {
    if (target.nodeName == 'A') {
      return handleLink(target.getAttribute('href')); // (*)
    }
    target = target.parentNode;
  }
};