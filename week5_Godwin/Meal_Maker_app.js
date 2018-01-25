const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

     get appetizers(){},
  get mains(){},
  get desserts(){},

    set appetizers(appetizerIn){

    },
    set mains(mainsIn){

    },
    set desserts(dessertsIn){

    },
  },
  get courses(){
  return {
  appetizers: this._courses._appetizers,
  mains: this._courses._mains,
  desserts: this._courses._desserts,
}
},
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: courseName,
      price: dishPrice,
    };

    this.courses[courseName].push(dish);
  },
 getRandomDishFromCourse(courseName){
   const dishes = this._courses[`_${courseName}`];
   const randomIndex = Math.floor(Math.random()*dishes.length);
   return dishes[randomIndex];
 },
generateRandomMeal(){
  const appetizers = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
  return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. Here is the total price $${totalPrice}. `;
},
};
menu.addDishToCourse('appetizers', 'egg sauce', 100);
  menu.addDishToCourse('appetizers', 'fruit juice', 200);
  menu.addDishToCourse('appetizers', 'fruit salad', 200);

  menu.addDishToCourse('mains', 'Yam pottage', 300);
  menu.addDishToCourse('mains', 'Fufu and egusi soup', 350);
  menu.addDishToCourse('mains', 'Fried rice', 250);

  menu.addDishToCourse('desserts', 'cherrie', 100);
  menu.addDishToCourse('desserts', 'Sugar Cane', 50);
  menu.addDishToCourse('desserts', 'Watermelon', 300);

    let meal = menu.generateRandomMeal();
console.log(meal);
