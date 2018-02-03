/**
  In this assessment, you will use your knowledge of javascript arrays
  to complete the functions below.

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

// 1. write a function that takes an array as its first parameter and returns
// the first item in the array
let ourNames = ['Uche', 'Obi'];

function names(ourNames){
  return ourNames.slice(0, 1);
}
names(['Uche', 'Obi']);

// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
let myFavoriteFruits = ['Apple','Mango','Orange'];

function fruits(myFavoriteFruits){
  return myFavoriteFruits.slice(-1);
}
fruits(['Apple','Mango','Orange']);

// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
let books =  ['textbook','notebook','novel','newspaper'];

function stationeries (numbers, Pencil ){
  return books.unshift(Pencil);
}
books(stationeries);

// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.

let books =  ['textbook','notebook','novel','newspaper'];

function stationeries (numbers, Pencil ){
  return books.push(Pencil);
}
books(stationeries);

// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
