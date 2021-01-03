let arr = ["Ilya", "Kantor"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log(firstName,surname);

[firstName, surname]='Saurabh Joshi'.split(' ');
console.log(firstName,surname);


// second element is not needed
[firstName, , title] = ['Haridas','Gupta','Principles', 'of Electronics'];
console.log(title);
[firstName, , ...title] = ['Haridas','Gupta','Principles', 'of Electronics'];
console.log(title);// now title is an array

// Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:
let [a,b,c]='abcd';
let [one,two,three] = new Set([1,2,3]);
console.log(one,three,b,c);

let user={
    name: "John",
    age: 20,
}
for([key,val] of Object.entries(user)){
    console.log(key," ==> ",val);
}

//Swaping
let guest = "Jane";
let admin = "Pete";

// Swap values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`);
// default Values
[firstName='Guest', surname='Anonymous']=['Hello'];
console.log(firstName,surname);


let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
  let {width: w, height, title:Title} = options;
  
  // width -> w
  // height -> height
  // title -> Title
  
  console.log(Title);  // Menu
  console.log(w);      // 100
  console.log(height);      // 200