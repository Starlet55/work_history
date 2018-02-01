/**
  In this assessment, you will be creating new Javascript functions.
  Make sure to read the directions to build the functions carefully.
  You should use the below patterns to write your functions:
  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

  ```
*/

// 1. write a function that takes a number as a parameter and returns it as a
// string
const numberToString = (number) =>{
  return 'number';
}

// 2. write a function that takes a number as a parameter and returns that
// number subtracted by 1
const numberMinusOne = (number) =>{
  return number -=1
}

// 3. write a function that takes a number as a parameter and returns that
// number added by 1
const addnumberPlusOne = (number) =>{
  return number +=1
}

// 4. write a function that takes two number as its parameters and returns then
// addition of those two numbers
const addTwoNumbers = (num1,num2) =>{
  return num1 + num2;
}

// 5. write a function that takes two number as its parameters and returns then
// squared of those two numbers
const squareOfTwoNumbers = (num1, num2) =>{
  return (num1 * num1), (num2 * num2);
}

// 6. write a function that takes a number and returns true if the number is odd
// and false if it is not
const oddOrNot = (number) =>{
  if(number% 2 !== 0){
    return true;
  }else{
    return false;
  }
}

// 7. write a function that takes two strings as its parameters and returns the
// combination of those two strings
const combineStrings = ("string1", "string2") =>{
  return 
}

// 8. write a function that takes the radius of a circle a parameter and returns
// the Area of the circle.
const areaOfACircle = (radius) =>{
  return 3.14*(radius*radius);
}
// For this exercise π (pie) can equal `3.14`
