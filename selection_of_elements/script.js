'use strict'


var ul = document.querySelector('ul');
var lastClickedLi = null;
ul.onclick = function(event) {
  var target = event.target;

  if (target.tagName != "LI") return;

  if (event.metaKey || event.ctrlKey) {
    toggleSelect(target);
  } else if (event.shiftKey) {
    selectFromLast(target);
  } else {
    selectSingle(target);
  }

  lastClickedLi = target;
}

ul.onmousedown = function() {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function selectFromLast(target) {
  var startElem = lastClickedLi || ul.children[0];

  var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;

  if (isLastClickedBefore) {
    for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
      elem.classList.add('selected');
    }
  } else {
    for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
      elem.classList.add('selected');
    }
  }
  elem.classList.add('selected');
}

function deselectAll() {
  for (var i = 0; i < ul.children.length; i++) {
    ul.children[i].classList.remove('selected');
  }
}

function selectSingle(li) {
  deselectAll();
  li.classList.add('selected');
}