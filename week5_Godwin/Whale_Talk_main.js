let input = "God is good";
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for (let inputVowel = 0; inputVowel < input.length; inputVowel++){
  for(let arrayVowel = 0; arrayVowel<vowels.length; arrayVowel++){
    if(input[inputVowel]===vowels[arrayVowel]){
      resultArray.push(input[inputVowel]);
    }
  }
  if (input[inputVowel]==='e' || input[inputVowel]==='u'){
    resultArray.push(input[inputVowel]);
  }
}
console.log(resultArray.join('').toUpperCase());
