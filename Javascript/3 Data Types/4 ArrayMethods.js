/*
Splice 
arr.splice(start[, deleteCount, elem1, ..., elemN])
It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
*/
arr=['I','go','Home'];
delete arr[1];
console.log(arr.length,arr);

arr=['i','want','to','learn','javascript'];
arr.splice(3,1,'teach');
console.log(arr)

//delete
arr.splice(1,2);
console.log(arr);

//insert
arr.splice(3,0,'and','nodejs');
console.log(arr);

/*
Slice 
The syntax is:
arr.slice([start], [end])
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
*/
arr=['t','e','s','t','s','a','s','d','e','f'];
arr2=arr.slice(1,5);
console.log(arr2,arr);

/*
Concat 
The syntax is:
arr.concat(arg1, arg2...)
It accepts any number of arguments – either arrays or values.
The result is a new array containing items from arr, then arg1, arg2 etc.
If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.
*/
arr=[1,2];
arr2=arr.concat([3,4]);
console.log(arr,arr2);

let arrayLike={
    0:'something',
    length:1
};
arr2=arr.concat(arrayLike);

console.log(arr,arr2);

arr=["Bilbo", "Nazgul", "Gandalf"];
arr.forEach((item,idx,array) => {
    console.log(item,idx,array);
});

arr.forEach(console.log);
/*
Find 
let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });
*/
let result=arr.find((ele,idx,array)=>{
    // if true is returned item is returned and iteration is stopped
    // for falsy scenario returns undefined
});
console.log();
console.log(result);

/*
Filter 
The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:
*/
let results = arr.filter(function(item, index, array) {
  // if return true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
/*
The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:
returns the new value instead of item
*/
result=arr.map((item,idx,array)=>{
   return item.length
});
console.log(result);

arr.sort();
console.log(arr);

arr=[1,2,15];
arr.sort();
console.log(arr)
function compareNumeric(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
arr.sort(compareNumeric);

arr=[1,-2,15,2,0,8];
arr.sort((a,b)=> a-b);
console.log(arr);

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
countries.reverse();

// Split and Join 
// String.split(delim);

let names='bibo, Gandalf, pankaj, hello';
arr=names.split(', ');
arr.forEach(item=>console.log(item));
arr=names.split(', ',2);
arr.forEach(item=>console.log(item));
arr=arr.join(';');
console.log(arr);



