function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
console.log(user.ref.name);// what will be the output??

// Solution: 
// at line no 8 when function is called then this will decided
// as there is no object calling the function hence this is globalThis(in node js) so ref is globalThis
// as name of globalThis is undefined so ans is undefined

// console.log(globalThis);
// console.log(user);

console.log(user.ref==globalThis);
// consider this case 
function makeUser() {
    return {
      name: "John",
      ref() {
        console.log(this);
        return this;
      }
    };
  }
  
  let user2 = makeUser();
  
  console.log( user2.ref().name );/// here this will be decided
//   as user is calling the ref() so this is user and his name will be printed 