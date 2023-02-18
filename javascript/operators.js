// arithematic operators:
var x = 50;
var y = 60;
x = x + y;
console.log(x);

// postfix operator and prefix operators:
// incremental operator:
let value1 = 20;
console.log(value1);
console.log(value1++);
console.log(value1);
console.log(value1++);
console.log(value1);

let value2 = 30;
console.log(value2);
console.log(++value2);
console.log(value2);
console.log(++value2);
console.log(value2);

// decremental operator:

let value3 = 40;
console.log(value3);
console.log(value3--);
console.log(value3);

let value4= 50;
console.log(value4);
console.log(--value4);
console.log(--value4);

// logical operators:

var x= 40;
var y= 30;

if (x > 35 && y < 35) {    //logical and operator
    console.log("okokokokok");
}
  if (x> 55 || y< 55) {   // logical or operator
    console.log('orrrrr');
  }

//   assignment operators
 var myRank= 2;
 var samRank = '2';

//  equility operator
  if (myRank == samRank) {                 // it checks only values of variables 
    console.log('read noly equal value');
  }
  if (myRank === samRank) {
    console.log('read same data type equal1');      // it checks data types as well values 
  }
  if (myRank !== samRank) {
    console.log('not same value');         // not equal to operator
  }
//   ? ternory operator
//? ternory operator :
//condition-->(true)? true : false;

 var city = 100;
 if (city === 100) {
    console.log( ' i am live in mumbai');
 }else{
    console.log('i am live in pune');
 }
 city === 100 ? console.log('i am in mumbai') : console.log('i am in pune');
