const name= 'dharmsh'
console.log(name)

const newName = name + "Djaemsj"
console.log(newName)

// console.log(newName)*2

//length function
// console.log(newName.length)
//return legth of string -->14

// //Indexof function
// console.log(newName.indexOf('d'));
// //it will return index of character passed-->0


//replace function
// console.log(newName.replace('d','2'))
//it take 2 parameter one for to search ane 2nd with which searched character replace
//-->dharmshDjaemsj-->2harmshDjaemsj
//-->it is case sensetive


//new way to declare string

const username = new String('dharmesh dadhaniya');
console.log(username)

const a = "h";
const b = "3";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
