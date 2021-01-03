/*
// fucntion declaration
function Greeting(msg){
    console.log(msg);
}
Greeting('Good Morning');

// if function doesn't return anything then it return undefine 

//Function Expresssion
let greet= function(msg){
    console.log(msg);
};

greet('hello');

let greeting =Greeting;
greeting('Hi,');
console.log(greeting);
console.log(greeting('functions'));//first it calls the function and then returned value will be printed

function TakeInput(){
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });

}

*/

// CallBacks => function as an argument
function f1(){
  console.log('this is f1() function')
}

function f2(){
  console.log('this is f2() function')
}

function ask(question,fun1,fun2){
  if(question){
    fun1();
  }
  else fun2();
}

ask('true',f1,f2);

// Arrow Function

let func=function(arg1,arg2){
  return arg1*arg2;
};

let Multiply=(arg1,arg2)=> arg1*arg2;

// in case of single argument 
let square= arg1 => arg1**2;

// in case of multiple line 
let SolveQuadratic= (a,b,c) => {
  console.log(`${a}x^2+${b}x+${c}`);
  let d=(b**2-4*a*c);
  if(d==0){
    x1=x2=-b/(2*a);
    console.log(`solution of above equations are : x1 = ${x1} and x2 = ${x2}`);
    return;
  }
  if(d>0){
    x1=(-b+d**(1/2))/(2*a);
    x2=(-b-d**(1/2))/(2*a);
    console.log(`solution of above equations are : x1 = ${x1} and x2 = ${x2}`);
    return;
  }
  else {
    console.log('imaginary Solutions');
    return;
  }
}