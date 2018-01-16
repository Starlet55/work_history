const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else {
    console.log('error!');
  }
};
const getComputerChoice = () =>{
 randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
                      }
};
const determineWinner = (userChoice, computerChoice) =>{
if (userChoice === computerChoice){
      return 'The game is a tie!';
                      }
 if (userChoice === 'rock'){
      if (computerChoice === 'scissors'){
      return 'User won!';
       }else {
      return "Computer Won!";
                      }
                      };
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer Won!';
    }else {
      return 'User Won!';
    }
  };
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The Computer Won!';
    }else {
      return 'User Won!'
    }
   if (userChoice === 'bomb'){
     return 'User Won!';
   }
  };
                      };
const playGame = () =>{
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice('rock');
  console.log('You threw: ' +userChoice);
  console.log('The computer threw: ' +computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
