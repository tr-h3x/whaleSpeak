const input = 'well hello there';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(input[i]);
 for (let j = 2; j < vowels.length - 1; j++) {
   //console.log(vowels[j]);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    } if (input[i] === 'e') {
        resultArray.push(input[i]);
    } if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
  }  
}

console.log(resultArray);