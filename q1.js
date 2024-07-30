// Question: Write a function to reverse a string.

function reverse(str) {
  return  str.split('').reverse().join('')
}


// Time Complexity: O(n)

const str = "Try programiz.pro";
let rev = "";

for (let i = str.length - 1; i > 0; i--) {
    rev = rev + str[i];
}

// console.log(rev); // Output: "orp.zimagorp yrT"


// console.log(reverse("hello"))