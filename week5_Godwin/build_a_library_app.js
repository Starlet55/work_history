class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }

  toggleCheckOutStatus(){
    this._false = this._true;
  }

  getAverageRating(){
    let ratingSum = this.ratings.reduce((currentSum, rating)=> currentSum + rating, 0);

    let lengthOfArray = this._ratings.length;
    return ratingSum/this._ratings.length;
  }

  addRating(currentSum){
    this._ratings.push(currentSum);
  }
}

class Book extends Media{
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._title = title;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
 }

 const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', '544');

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

const speed = new Movie('Jan de Bont', 'speed', '116');

historyOfEverything.getAverageRating();

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
