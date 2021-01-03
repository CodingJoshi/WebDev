function User(name){
    this.name=name;
    this.isAdmin=false;
}

let user=new User('saurabh');

console.log(user.name);
console.log(user.isAdmin);
/*

When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.
In other words, new User(...) does something like:
*/
function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }
  
// Constructor mode test: new.target
function Target(){
    if(new.target){
        console.log('function is called with new');
    }else{
        console.log('function called without new');
    }
}
let x=new Target();
let y= Target();
  
/*
Usually, constructors do not have a return statement.
Their task is to write all necessary stuff into this, and it automatically becomes the result.
But if there is a return statement, then the rule is simple:
If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.*/

function BigUser(){
    this.name="John";
    // return { name: "Godzilla"};
    return 4;
}

x=new BigUser;
console.log(x);


// Methods in Constructor
function Users(name){
    this.name=name;
    this.sayHi=function(){
        console.log(`My name is ${this.name}`);
    };
}
let John=new Users('John');
John.sayHi();

///Tasks
obj = {
    name:"tak1",
    type:'goodone',
};
function A(){
    return Obj;
}
function A(){
    return Obj;
}

let a=new A;  //if there is no parameter you can skip the braces
let b=new B;
console.log(a==b);

