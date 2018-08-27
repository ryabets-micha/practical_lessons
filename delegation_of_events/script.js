'use strict'


let wrapper = document.getElementById('wr');

wrapper.onclick = function(event) {
  let target = event.target;
  let close = document.getElementsByClassName('del');
  let contain = document.getElementsByClassName('cont');

  for (let i = 0; i < close.length; i++) {
    if (target !== close[i]) continue
    else if (target == close[i]) {
      contain[i].remove();
    }
  }
}

let table = document.querySelector('#grid');
let tbody = document.querySelector('tbody');
let thead = document.querySelector('thead');
let lengthTR = tbody.rows.length;


function sort(e) {
  let cellsIndex = e.target.cellIndex;

  if (e.target.className === 'sort') {
    let arr = [].slice.call(tbody.rows);
    arr.sort(compare);
    while (tbody.firstChild) {
          tbody.firstChild.remove();
    }
    for (let i=0; i<arr.length; i++) {
          tbody.appendChild(arr[i]);
    }
  }
  function compare (a,b) {
    if (e.target.dataset.type === "string") {
          return a.cells[cellsIndex].innerHTML > b.cells[cellsIndex].innerHTML;
    }
    if (e.target.dataset.type === "number") {
          return a.cells[cellsIndex].innerHTML - b.cells[cellsIndex].innerHTML;
    }
  }
}

table.addEventListener('click', sort);