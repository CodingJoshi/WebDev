let arr1=[];
let arr2=new Array();
console.log(arr1,arr2);

let fruits =['Apple', 'Oranges','Plum'];
console.log(fruits[0],fruits.length);
fruits[2]='kiwi';
console.log(fruits);

let MixArray=[
    'Apple',
    {name:'john',rollNo:23},
    true,
    function(){console.log('hello')}
];
console.log(MixArray[1].name,MixArray[2],MixArray[3]());

fruits=['Apple','Pear','Apricot','Plum','Peach'];
fruits.push('kinnow');
fruits.push('banana');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('noseberry');
console.log(fruits);

arr=new Array(3);
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);//undefined
}
for(let item of arr){
    console.log(item);// undefined
}
for(let item in arr){
    console.log(item);
}
/*
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
*/

arr=[1,2,3];
console.log(arr);
console.log(arr=='1,2,3');//true
console.log(String(arr)==='1,2,3');//true
console.log(arr+1);
console.log([]+1,[1]+1,[1,2]+1);

// Tasks
/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll*/

let task1=['Jazz','Blues'];
task1.push('Rock-n-Roll');
task1[(task1.length-1)/2]='Classics';
task1.shift();
task1.unshift('Rap','Reggae');
console.log(task1);


arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();

// task3
function getMaxSubSum(arr){
    let currSum=0;
    let MaxSum=-Infinity;
    for(let i=0;i<arr.length;i++){
        currSum+=arr[i];
        if(currSum<0){
            currSum=0;
        }
        MaxSum=Math.max(currSum,MaxSum);
    }
    return MaxSum;
}

arr = [1, -2, 3, 4, -9, 6];
console.log(getMaxSubSum(arr));
console.log(getMaxSubSum([-1, 2, 3, -9])); //== 5 
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //== 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //== 11
console.log(getMaxSubSum([-2, -1, 1, 2])); //== 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //== 100
console.log(getMaxSubSum([1, 2, 3])); //== 6 (take all)