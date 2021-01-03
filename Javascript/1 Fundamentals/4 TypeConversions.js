/*
Most of the time, operators and functions automatically convert the values given to them to the right type.
For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.
There are also cases when we need to explicitly convert a value to the expected type.
*/
// String Conversion
let x,y,value;

value=123;
console.log(typeof(value));     //number

vaule=String(false);
console.log(value,typeof(value));       // 123 Number

value=String(value);
console.log(value,typeof(value));       // 123 String

x=String(null);                 
console.log(x,typeof(x));               // null String

y=false;
console.log(y,typeof(y))                //false Boolean

y=String(false);
console.log(y,typeof(y));               // false string


//Numeric Conversion
/*
Numeric conversion rules:
Value       ==>	    Becomes…
undefined	        NaN
null	            0
true and false	    1 and 0
string	            Whitespaces from the start and end are removed.
                    If the remaining string is empty, the result is 0. Otherwise, the number is “read”
                    from the string. An error gives NaN.
*/

x='12'/'4';
console.log(x,typeof(x));               // 3 Number

x='  123  ';
console.log(x,typeof x);                // string
x=Number(x);
console.log(x,typeof x);                //123 Number

x='hello';
x=Number(x);
console.log(x,typeof x);                //NaN(not a number)

y=' '                                  // false , null ,'',' ' ==> 0
y=Number(y);
console.log(y,typeof y);                // 0 Number

// you can do the same thing using unary + operator
x='12'/'4';
console.log(x,typeof(x));               // 3 Number

x='  123  ';
console.log(x,typeof x);                // string
x= +x;
console.log(x,typeof x);                //123 Number

x='hello';
x= +x;
console.log(x,typeof x);                //NaN(not a number)

y=' '                                  // false , null ,'',' ' ==> 0
y= +y;
console.log(y,typeof y);

// Boolean Conversion
/*
The conversion rule:
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true
*/