/*
A value in JavaScript is always of a certain type. For example, a string or a number.
There are eight basic data types in JavaScript
We can put any type in a variable. For example, a variable can at one moment be a string
and then store a number:
*/

// no error
let message = "hello";
message = 123456;

let x;
console.log(typeof x);          //undefined
x=null;
console.log(typeof x);          // Object
x=0;
console.log(typeof x);          //number
x=true;
console.log(typeof x);          //boolean
x='foo';
console.log(typeof x);          //string
x=Symbol('id');
console.log(typeof x);          //symbol
console.log(typeof Math);       //Object
console.log(typeof null);       //Object
console.log(typeof alert);      //function/undefined in nodejs
console.log(typeof String);     //function  
console.log(typeof Number);     //function
console.log(typeof Boolean);    //function


// Programming languages that allow such things,such as JavaScript, are called “dynamically typed”,
// meaning that there exist data types, but variables are not bound to any of them.
/*
There are 8 basic data types in JavaScript.

Number:=>   for numbers of any kind: integer or floating-point, integers are limited by ±(253-1). 
            Besides regular numbers, there are so-called “special numeric values”
            which also belong to this data type: Infinity, -Infinity and NaN.

bigint:=>   is for integer numbers of arbitrary length. 
             BigInt value is created by appending n to the end of an integer:
            // the "n" at the end means it's a BigInt
            const bigInt = 1234567890123456789012345678901234567890n;

string:=>   for strings. A string may have zero or more characters, there’s no separate single-character type.
            In JavaScript, there are 3 types of quotes.

            Double quotes: "Hello".
            Single quotes: 'Hello'.
            Backticks: `Hello`.
            Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
            Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string
            by wrapping them in ${…}, for example:

boolean:=>  for true/false.

null:=>     for unknown values – a standalone type that has a single value null.

undefined:  for unassigned values – a standalone type that has a single value undefined.

object:=> for more complex data structures.

symbol:=> for unique identifiers.

The typeof operator allows us to see which type is stored in a variable.
Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/

/*
3 browser-specific functions to interact with visitors:

alert
shows a message.
prompt
shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
confirm
shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

The exact location of the modal window is determined by the browser. Usually, it’s in the center.
The exact look of the window also depends on the browser. We can’t modify it.
*/