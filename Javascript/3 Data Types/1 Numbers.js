/*
0x -> hexa decimal number
0b -> binary number 
0o-> octal numbers 
*/
let a=255;
let b= 0b11111111;
let c=0xff;
let d= 0o377;
console.log(a,b,c,d);

// toString(base);
let num=255;
a=num.toString(10);
b=num.toString(2);
c=num.toString(16);
d=num.toString(8);
console.log(a,b,c,d);
// 1234.toString(10);//eror
(1234).toString(10);
// or we can write like
1234..toString(10);

console.log(9999999999999999);

// Rounding
let x= Math.floor(3.1)
let y= Math.floor(3.8)
let w= Math.floor(-3.1)
let z= Math.floor(-3.8)
console.log(x,y,w,z);

x= Math.ceil(3.1)
y= Math.ceil(3.8)
w= Math.ceil(-3.1)
z= Math.ceil(-3.8)
console.log(x,y,w,z);

x= Math.round(3.1)
y= Math.round(3.8)
w= Math.round(-3.1)
z= Math.round(-3.8)
console.log(x,y,w,z);

x= Math.trunc(3.1)
y= Math.trunc(3.8)
w= Math.trunc(-3.1)
z= Math.trunc(-3.8)
console.log(x,y,w,z);

// Imprecise Calculation
console.log(1e5);
console.log(1e500);
console.log(0.1+0.2==0.4);
console.log(0.1+0.2);
console.log(9999999999999999);

console.log(isNaN(NaN));
console.log(isNaN("str"));

console.log(NaN==NaN);

console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) ); // false, because a special value: Infinity

let A=parseInt('100px');//100
let B=parseInt('+100px');//100
let C=parseInt('a100px');//NaN

console.log(A,B,C);



// Other Math function
let rand=Math.random().toFixed(3);
let max=Math.max(4,2,8.88,8.77,);
let min=Math.min(4,2,8.88,8.77,);
let pow=Math.pow(2,10);

console.log(rand,max,min,pow);