// create empty objects 
    // Object constructor syntax
    let user1=new Object();
    // Object Literal syntax 
    let user2={};

// Literal and properties
let user={
    name:'John',
    age:30
};

console.log(user.name);
console.log(user.age);

// add one key and value to object
user.isAdmin=false;
console.log(user);

//delte a property
delete user.age;
console.log(user);

// multiword property

// user.'likes birds'=true;  // Give error
// use square bracket
user['like birds']=true;
console.log(user['like birds']);
delete user['like birds'];

//Property valuel shorthand
function makeUser(name,age){
    return {
        name:name,
        age:age,
        job:'Doctor',
    };
}
// insetead this we can simply do
function makeUser(name,age){
    return{
        name,
        age,
        job: 'engineer',
    };
}

let user3=makeUser('John',30);
console.log(user3);

let obj={
    for: 1,
    let:2,
    return:3,
    const:6,
};
console.log(obj);

console.log("name" in user3);
console.log("profession" in user3);

for(key in user3){
    console.log(key,user3[key]);
}

let codes={
    '91': "india",
    '49': "Germany",
    '41': 'SwitzerLand',
    '1': 'USA',
};

// see the order in which codes are printing
console.log(codes);
for(code in codes){
    console.log(+code,codes[code]);// 1,41,49,91
}

let Newcodes={
    '+91': "india",
    '+49': "Germany",
    '+41': 'SwitzerLand',
    '+1': 'USA',
};

// see the order in which Newcodes are printing
console.log(Newcodes);
for(code in Newcodes){
    console.log(+code,Newcodes[code]);// 1,41,49,91
}

const ConstObj={
    name:"Constant",
};

ConstObj.name="pseudo constant";
console.log(ConstObj.name);
/*
An important side effect of storing objects as references is that an object declared as const can be modified.
It might seem that the line (*) would cause an error, but it does not. The value of user is constant,
it must always reference the same object, but properties of that object are free to change.
In other words, the const user gives an error only if we try to set user=... as a whole.
*/
