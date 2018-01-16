const getSleepHours = day =>{
  switch (day){
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 5;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 4;
      break;
    case 'Saturday':
      return 6;
      break;
    case 'Sunday':
      return 8;
      break;
             }
}

const getActualSleepHours = () =>
  getSleepHours ('Monday')+
  getSleepHours ('Tuesday')+
  getSleepHours ('Wednesday')+
  getSleepHours ('Thursday')+
  getSleepHours ('Friday')+
  getSleepHours ('Saturday')+
  getSleepHours ('Sunday');

const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours * 7
}
const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours){
  console.log('Got the perfect amount of sleep');
}
if (actualSleepHours < idealSleepHours){
  console.log('Get some rest');
}
if (actualSleepHours > idealSleepHours){
  console.log('Got more sleep than needed');
}
if (actualSleepHours < idealSleepHours){
  console.log ('You got ' +(idealSleepHours - actualSleepHours) + 'hours less sleep than you wanted this week. Get some rest')
}
if (actualSleepHours > idealSleepHours){
  console.log('You got ' +(actualSleepHours - idealSleepHours) + 'hours more than you wanted this week. Get to work!')
}
};
calculateSleepDebt();
