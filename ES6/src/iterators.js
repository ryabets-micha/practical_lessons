let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
  console.log(xman);
}

let iterator = xmen[Symbol.iterator]();

let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}

let randomGenerator = {
  generate() {
    return this[Symbol.iterator]();
  },

  [Symbol.iterator]() {
    let count = 0;

    return {
      next() {
        let value = Math.ceil(Math.random() * 100);
        let done = count > 9;
        count += 1;
        return { value, done };
      }
    };
  }
};

let random = randomGenerator.generate();
console.log(random.next().value);