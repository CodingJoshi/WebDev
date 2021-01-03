/*
Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

let map=new Map();
map.set('1','str1');
map.set(1,'One');
map.set(true,'booleanTrue');

console.log(map);
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);


let Saurabh={
    name:'Saurabh Joshi',
    age:20,
    clg:'NSUT'
};
let Pankaj={
    name:'Pankaj Joshi',
    age:18,
    clg:'DTU'
};
let obj={};
obj[Saurabh]='123';
obj[Pankaj]='345';
// it will overwrite saurabh
console.log(obj);
console.log(obj['[object Object]']);


map.set(Saurabh,'123');// map[Saurabh]='123';
map.set(Pankaj,'345');// map[Pankaj]='456';
console.log(map);


// Iteration Over Map 
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
for(veg of recipeMap.keys() ) console.log(veg);
for(price of recipeMap.values() ) console.log(price);
for(item of recipeMap.entries() ) console.log(item);



let mapFromObj= new Map(Object.entries(Saurabh));
// let mapFromObj= new Map(Object.entries(Pankaj));
console.log(mapFromObj);

// vice Versa is also correct
let prices =Object.fromEntries([
    ['banana',1],
    ['oranges',2],
    ['Apricot',4]
]);

console.log(prices);


// SumTheProperties
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
let SumOfSalary=Object.values(salaries).reduce((acc,curr)=> acc+curr);
console.log(SumOfSalary);

//NoOfProperties  in object
let NoOfProperties=Object.keys(salaries).length;
console.log(NoOfProperties);