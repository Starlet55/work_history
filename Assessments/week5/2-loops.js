/**
  In this assessment, you will use your knowledge of javascript loops
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

// 1. write a function that takes an array as its first parameter and console logs
// every item in the array
let churches = ['Catholic', 'Winners', 'Mfm'];

const religion = (churches) => {
  for (let churchIndex = 0; churchIndex < churches.length; churchIndex++){
    console.log(churches[churchIndex]);
  }
}
religion(churches);


// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index
let foods = ['rice','fufu','beans','tea'];

const edibles = (foods) =>{
  for (let foodIndex = 0; foodIndex < foods.length; foodIndex++){
    if(foodIndex% 2 === 1){
      console.log(foods[foodIndex]);
    }
  }
}
edibles(foods);

// 3. write a function that takes an array as its first parameter and console logs
// every item with an even index
let clothes = ['agbada','senator','native','isi agu'];

const wears = (clothes) =>{
  for (let clothIndex = 0; clothIndex < clothes.length; clothIndex++){
    if(clothIndex% 2 === 0){
      console.log(clothes[clothIndex]);
    }
  }
}
wears(clothes);

// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not
let books = ['textbook','notebook','novel','newspaper'];

let stationeries = (books, calculator) =>{
  if (books.includes(calculator)){
    return true;
  }else {
    return false;
  }
}
books(['textbook','notebook','novel','newspaper'], calculator);
// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.

// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.
