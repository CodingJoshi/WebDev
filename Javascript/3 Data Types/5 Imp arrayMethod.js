/*
1) Array.from(iterableobject,mapfun,thisargu);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
2) arr.reduce((accumulator,currentValue,idx,array),initialValue)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


let x=Array.from({length:10},(_,i)=>{
    console.log(i);
    return i;
})
console.log(x);

[0,1,2,3,4].reduce((acc,curr,idx,arr)=>{
    console.log(acc,curr,idx,arr);
    return curr*2+acc;
},100);

//without Initial Value
[0,1,2,3,4].reduce((acc,curr,idx,arr)=>{
    console.log(acc,curr,idx,arr);
    return curr*2+acc;
});
*/


/*
// QUESTIONS
// Question 1 
// Make a range function 
console.log('\nRange method implimentation');
const range=(start,end,step=1)=>{
    return Array.from({length:(end-start)/step+1},(_,i)=>{
        return start+i*step;
    })
}
arr=range(0,100,5);
arr=range('A'.charCodeAt(0),'Z'.charCodeAt(0),1);
console.log(arr);
arr=arr.map(i=> String.fromCharCode(i));
console.log(arr);

//  Question 2
// a) Flatten an array of arrays
// b) Sum of values in an object array
// c) Counting instances of values in an object
// d) Grouping objects by a property
// e) Bonding arrays contained in an array of objects using the spread operator and initialValue
// f) 

// 2.a)
let flattened =[[0,1],[2,3],[4,5]];
arr=flattened.reduce((acc,curr)=>acc.concat(curr),[]);
console.log(flattened,arr);



// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 20
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  },{
    name: 'Janna',
    books: ['nible', 'Harry chotter'],
    age: 21
  }]

//2.b) 
let sumOfAge=friends.reduce((acc,cur)=>acc+cur.age,0);
console.log(sumOfAge);

// 2.c)
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let ans=names.reduce((acc,cur)=>{
    if(cur in acc){
        acc[cur]++;
    }
    else acc[cur]=1;
    return acc;
} ,{});
console.log(ans);

  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc,cur)=>{
        let key=cur[property];
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(cur);
        return acc;
    },{})
  }

let friendsByAge=groupBy(friends,'age');
console.log(friendsByAge);


// Question 3
a) filtering out all small values
b) find all prime numbers in an array 
c) filtering invalid entries from JSON
d) Searching in an array 

*/

// 3.a) 
arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let filtered=arr.filter((cur)=>cur>4);
console.log(filtered);

// 3.b) 
let primes=arr.filter((cur)=>{
    //check current value is prime or not
    for(let i=2;cur>i;i++){
        if(cur%i==0){
            return false;
        }
    }
    return cur>1;
})
console.log(primes);

// 3.c)
arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

let invalidEntries=0;
function filterById(item){
    if(Number.isFinite(item.id) && item.id!=0){
        return true;
    }
    invalidEntries++;
    return false;
}
ans=arr.filter(filterById);
console.log(ans,invalidEntries);

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
