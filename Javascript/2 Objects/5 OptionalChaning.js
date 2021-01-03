let user={};

user.address;// undefiend
user.address.street;//error

let html=document.querySelector('.element').innerHTML;
// gives error if document.querySelector('.elment')is null


/// handle the error

// Method-1 using ? : (ternary operator)
console.log( user.address ? user.address.street: undefined);

console.log(user.address? user.address.street ? user.address.street.name : null :null);


//Method-2 using && operator
console.log(user.address&& user.address.street&&user.address.street.name);

//Method -3 Optional Chaining
console.log(user?.address?.street);

// Short Circuiting
user=null;
let x=0;
user?.sayHi(x++);
console.log(x);
