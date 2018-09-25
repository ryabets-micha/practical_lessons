"use strict";

// let movieList = document.getElementById('movies');

// function addMovieToList(movie) {
//   let img = document.createElement('img');
//   img.src = movie.Poster;
//   movieList.appendChild(img);
// }

// function getData(url) {
//   return new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         let json = JSON.parse(xhr.response);
//         resolve(json.Search);
//       } else {
//         reject(xhr.statusText);
//       }
//     };

//     xhr.onerror = function (error) {
//       reject(error);
//     };

//     xhr.send();
//   });
// }

// let search = 'spider man ';

// getData(`http://www.omdbapi.com/?s=${search}`)
// .then(movies =>
//   movies.forEach(movie =>
//     addMovieToList(movie)))
// .catch(error => console.error(error));


function go(num) {
  return new Promise(function (resolve, reject) {
    var delay = Math.ceil(Math.random() * 3000);
    console.log(num, delay);

    setTimeout(function () {
      return resolve(num);
    }, delay);
  });
}

var p1 = go(1);
var p2 = go(2);
var p3 = go(3);

Promise.all([p1, p2, p3]).then(function (value) {
  return console.log(value);
}).catch(function (error) {
  return console.error(error);
}); //Ждем выполнения всех обещаний

Promise.race([p1, p2, p3]).then(function (value) {
  return console.log(value);
}).catch(function (error) {
  return console.error(error);
}); //Результатом будет первое загрузившоеся обещание