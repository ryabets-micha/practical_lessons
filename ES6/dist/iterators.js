'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var xmen = ['Cyclops', 'Wolverine', 'Rogue'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = xmen[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var xman = _step.value;

    console.log(xman);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var iterator = xmen[Symbol.iterator]();

var next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}

var randomGenerator = _defineProperty({
  generate: function generate() {
    return this[Symbol.iterator]();
  }
}, Symbol.iterator, function () {
  var count = 0;

  return {
    next: function next() {
      var value = Math.ceil(Math.random() * 100);
      var done = count > 9;
      count += 1;
      return { value: value, done: done };
    }
  };
});

var random = randomGenerator.generate();
console.log(random.next().value);