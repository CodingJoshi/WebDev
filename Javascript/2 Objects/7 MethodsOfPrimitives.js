// https://javascript.info/primitives-methods
// there are 7 primitive types
// String,Number,bigInt, Boolean,Symbol,null and undefined

// primitive as an object
let str="Hello";
console.log(str.toUpperCase())

console.log(typeof 0);
console.log(typeof new Number(0));

let zero=new Number(0);
if(zero){
    console.log('zero is truthy! because it is a object');
}

zero=Number(0);
if(zero){
    console.log('it is not possible');
}else{
    console.log('now zero is falsy');
}

// null and undefined has no methods
// console.log(null.test); // error