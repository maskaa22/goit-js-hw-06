function slugify(title) {
  const titleLowerCase = title.toLowerCase();
  return titleLowerCase.split(' ').join('-');
}

slugify('Arrays for beginners');
slugify('English for developer');
slugify('Ten secrets of JavaScript');
slugify('How to become a JUNIOR developer in TWO WEEKS');

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
