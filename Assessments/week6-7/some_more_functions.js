/**
  Its important that you keep practicing creating functions. Here are some more
  that you will need to implement

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

*/

// 1. write a function that takes a string as its first parameter. This function
// counts the number of vowels in the string and returns that number.
// EX1:
  // sample input: "Hello World"
  // sample output: 3

  const numberOfVowels = (vowelString) =>{
    let output = 0;
    const vowels = 'aeiou'
    for (let stringIndex = 0; stringIndex < vowelString.length; stringIndex++){
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
      if(vowelString[stringIndex] === vowels[vowelIndex]){
        output++
      }
    }
    }
    return output;
  }
  console.log(numberOfVowels('starlet'));

// 2. write a function that takes a string as it first parameter. This function
// return a new string with the first 3 letters lower-cased. If the string is less
// than 3 letters long, this function will return the new string with all letters
// upper-cased.
// EX1:
  // sample input: "HELLO"
  // sample output: "helLO"
// EX2:
  // sample input: "he"
  // sample output: "HE"
  const threeLowerCaseLetters = (anyString) =>{
    if(anyString.length >= 3){
      return anyString.slice(0,3).toLowerCase();
    }else if(anyString.length < 3){
      return anyString.toUpperCase();
    }
  }
  console.log(threeLowerCaseLetters('anyString'));

// 3. write a function that takes a string as it first parameter. This function
// returns the first half of the string if the string is even length. Otherwise,
// it will return null;
// EX1:
  // sample input: "HelloWorld"
  // sample output: "Hello"
// EX2:
  // sample input: "Hello World"
  // sample output: null
  const evenString = (theString) =>{
    if(theString.length % 2 === 0){
      return theString.slice(0, theString.length / 2);
    }else {
      return null;
    }
  }
  console.log(evenString('tiana'));

// 4. write a function that takes an array of numbers as its first parameter.
// This function returns the sum of the numbers in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 29
  const arrayNumberSum = (arrayNUm) =>{
    let sum = 0;
    for(let arrayIndex = 0; arrayIndex < arrayNUm.length; arrayIndex++){
      sum += arrayNUm[arrayIndex]
    }
    return sum;
  }
  console.log(arrayNumberSum([4,7,4,5,3]));

// 5. write a function that takes an array of numbers as its first parameter.
// This function returns an the number that is the most frequent in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 1
  let arrayCount = {};
  let itemCompare = 0;
  let mostFrequent;
const mostFrequentArray = (numb) =>{
  for(let i = 0, len = numb.length; i < len; i++){
       let item = numb[i];

       if(arrayCount[item] === undefined){
           arrayCount[item] = 1;
       }else{
           arrayCount[item] = arrayCount[item] + 1;
       }
       if(arrayCount[item] > itemCompare){
             itemCompare = arrayCount[item];
             mostFrequent = numb[i];
       }
    }
  return mostFrequent;
}
console.log(mostFrequentArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
