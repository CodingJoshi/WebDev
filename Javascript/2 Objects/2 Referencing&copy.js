let msg='hello';
let pharase=msg;
msg='hello ji namste';
console.log(pharase);

// pharase will not change and it is a copy not a reference 
let user={
    name:"Saurabh Joshi",
    age:21,
};

let person1=user;
console.log(person1);

user.job='Engineer';
console.log(person1);

let a={};
let b={};
console.log(a==b);// false;

// Clonning a object
let clone={};
for(key in user){
    clone[key]=user[key];
}
console.log(clone);
// now clone is copy of user and it is independent


let Name={
    name:"John"
};

let permission1={canView:true};
let permission2={canEdit:true};

// using assign
// clone2={};
// Object.assign(clone2,Name,permission2,permission1)
clone2=Object.assign({},Name,permission1,permission2);
console.log(clone2);


let Person ={
    name:"Saurabh Joshi",
    size:{
        height: 182,
        weight: 50,
    }
};

console.log(Person);
console.log(Person.size);
