/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// equality and unequality:
var myName = "Ali";
console.log(myName == "Ali"); //true
console.log(myName !== "Ali"); //false
// numerics :
var myNumer = 10;
console.log(myNumer == 10); //true       //equal to 
console.log(myNumer !== 10); //false      //not equal to 
console.log(myNumer > 5); //true       //greater than
console.log(myNumer < 5); //false       //less than
console.log(myNumer <= 5); //false          //greater than  or equal to
console.log(myNumer >= 5); //true        //less than or equal to
//And &  ===or ||(pipe) used:
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
var num3 = 10;
var num5 = 7;
console.log(num3 > 9 || num5 < 7);
