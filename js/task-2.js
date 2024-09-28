function makeArray(firstArray, secondArray, maxLength) {
  const arr = firstArray.concat(secondArray);
  if (arr.length >= maxLength) {
    return arr.slice(0, maxLength);
  } else {
    return arr;
  }
}

makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
