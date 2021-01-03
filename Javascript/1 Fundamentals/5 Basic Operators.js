/*

Topics to be covered 
1) + => addition,string Concatination,Numeric conversion
2) ** exponentiation
3) shorthand
4) Comparision
5) equality 
6) Logical Operator
*/



// + => addition,string Concatination,Numeric conversion
// Addition 
let x=2,y=3;
console.log(x+y);

// Numeric Conversion
x='123';
x = +x;
console.log(x,typeof(x));   // 123 Number

x='1',y='2'
console.log(x+y);   //12

console.log(+x + +y); //3 Numeric conversion has been done

// Exponention (**)

console.log(2**3); 
// squareRoot
console.log(256**(1/2));


// Chaining assignments
a=b=c=4**5;
console.log(a,b,c)

// ShortHand Notation 
a+=b;   //a=a+b
console.log(a);

a*=b;   //a=a*b
console.log(a);

a/=b;   //a=a/b
console.log(a);

a-=b;   //a=a-b
console.log(a);

//Increament / Decreament
a=5;
console.log(a++); //prints 5 after that a becomes 6
console.log(++a); // increase a and then a becomes 7

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
// For example:
a=(1+2,3+4);
console.log(a); //7

//Comparators
// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

// String comparison
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
// capital letter "A" is not equal to the lowercase "a". 
// Which one is greater? The lowercase "a". Why?
// Because the lowercase character has a greater index in the internal encoding table


// == => converts both side to integer 
// === => strict equality

console.log("true==1",true==1);   //true
console.log("false==0",false==0);  //true
console.log("false=='' ",false=='')  //true
console.log("0=='0'",0=='0');    //true
console.log("null==undefined",null == undefined) //true
console.log("null==0",null==0);       //false

// Strict equality
console.log("0 === false",0 === false);
console.log("null === undefined",null === undefined);

console.log('\nAssingment\n');
console.log("5 > 4",5 > 4);
console.log(" 'apple' > 'pineapple' ","apple" > "pineapple");
console.log("'2 > '12'","2" > "12");
console.log("undefined == null",undefined == null);
console.log("undefined === null",undefined === null);
console.log("null == '\n0\n'",null == "\n0\n");
console.log("null === +'\n0\n'",null === +"\n0\n");

// Assingment Solutions
console.log('Assingment analysis');
console.log('Obviously, true.');
console.log('Dictionary comparison, hence false. "a" is smaller than "p".');
console.log('Again, dictionary comparison, first char "2" is greater than the first char "1".');
console.log('Values null and undefined equal each other only.');
console.log('Strict equality is strict. Different types from both sides lead to false.');
console.log('Similar to (4), null only equals undefined.');
console.log('Strict equality of different types');

//Logical Operator

/*
There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
result = value1 || value2 || value3;
The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
*/

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");

// If all variables were falsy, "Anonymous" would show up.

// Nullish Coalescing

/*
nullish coalescing operator is written as two question marks ??.

The result of a ?? b is:
if a is defined, then a,
if a isn’t defined, then b.

In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

We can rewrite result = a ?? b using the operators that we already know, like this:
result = (a !== null && a !== undefined) ? a : b;
*/
aadasd