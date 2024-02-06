// 3-1 flattening
export function flattening(list) {
  return list.reduce((flattenedArray, currentArray) => {
    return flattenedArray.concat(currentArray);
  }, []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
let result = flattening(arrays);

console.log(result);

// 3-2 loop
export function loop(value, test, update, body) {
  for (let current = value; test(current); current = update(current)) {
    body(current);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// 3-3 everyLoop
export function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

console.log(everyLoop([1, 3, 5], (n) => n < 10)); // true
console.log(everyLoop([2, 4, 16], (n) => n < 10)); // false
console.log(everyLoop([], (n) => n < 10)); // true

// 3-4 everySome
export function everySome(array, test) {
  return array.every(test);
}
console.log(everySome([1, 3, 5], (n) => n < 10)); // true
console.log(everySome([2, 4, 16], (n) => n < 10)); // false
console.log(everySome([], (n) => n < 10)); // true
