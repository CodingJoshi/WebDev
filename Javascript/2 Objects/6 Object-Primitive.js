let obj={};
let bool=Boolean(obj);
console.log(bool);// true
// object to string
obj={
    name:'saurabh',
    course:'BTech',
};
console.log(obj);

// alert(obj); // [object][object]; this is string converseion of object 
let anotherobj={};
anotherobj[obj]=123;// object--> string
console.log(anotherobj);

// Number converstion
console.log(+obj);//NaN
let num =Number(obj);
console.log(num);

let now =new Date();
console.log(now);
console.log(+now);// object-->number
console.log(Number(now));// object--> number
let today=new Date('2020-12-23');
let yesterday=new Date('2020-12-22');
console.log(yesterday);
console.log(+yesterday);// object-->number

let delta=today-yesterday;
noOfDays=delta/(24*60*60*1000);
console.log(delta);
console.log(noOfDays,'days');
console.log(60*60*24*1000,'millisec in a Day');

