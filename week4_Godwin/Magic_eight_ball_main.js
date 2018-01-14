let userName = 'Starlet55';

userName? console.log('Hello, userName!'): console.log('Hello!');
let userQuestion = 'Will I become a magician?';
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';
switch(randomNumber){
  case 0: eightball= console.log('It is certain');
    break;
  case 1: eightball= console.log('It is decidedly so');
    break;
  case 2: eightball= console.log('Reply hazy try again');
    break;
  case 3: eightball= console.log('Cannot predict now');
    break;
  case 4: eightball= console.log("Don't count on it");
    break;
  case 5: eightball= console.log('My sources say no');
    break;
  case 6: eightball= console.log('Outlook not so good');
    break;
  case 7: eightball= console.log('Signs point to yes');
    break;
                   }
console.log('The user asked: '+ userQuestion); console.log('The eihtball answered: ' + eightball);
