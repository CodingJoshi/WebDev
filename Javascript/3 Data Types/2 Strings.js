let single='single quotes';
let double="single quotes";
let backticks=`this is backticks ${3+4}`;

let guestList=` Guests
Rakesh
Rohan
Saurabh
Pankaj
`;
console.log(guestList);
console.log('hello\nWorld');
console.log('\u{1F60D}');
console.log('I\'m Saurabh Joshi');
console.log('the backslash is : \\');
let str='asdf';
console.log(str.length);

console.log(str[0],str.charAt(0));                //first char
console.log(str[str.length - 1]);     // last char

console.log(str[100]);// undefined
console.log(str.charAt(100)); //''

// strings are immutable
str[0]='h';
console.log(str);
str='h'+str[1]+str[2]+str[3];
console.log(str);

str='i am a software devloper';
console.log(str.indexOf('am'),str.indexOf('devloper'),str.indexOf('Software'));

str = 'As sly as a fox, as strong as an ox';
let target='as';
console.log(str.lastIndexOf(target));
console.log(`find all occurences of ${target} in ${str}`);
let pos=-1;
while((pos=str.indexOf(target,pos+1))!=-1){
    console.log(pos);
}
console.log(str.includes('fox'),str.startsWith('As'),str.endsWith('ox'));

console.log(`${str.slice()} \n${str.slice(1,10)} \n${str.slice(3)} \n${str.slice(-8,-1)} \n${str.slice(-20,-10)}`);


// TASKS
/*
Uppercase the first character
importance: 5
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";
*/

function ucFirst(str){
    // return str[0].toUpperCase() + str.slice(1); gives error if str is empty
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst('john'));

/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
function checkSpam(str){
    return str.toUpperCase().includes('XXX')|| str.toUpperCase().includes('VIAGRA');
}
console.log(`
${checkSpam('buy ViAgRA now')},
${checkSpam('free xxxxx')},
${checkSpam("innocent rabbit")},
`);
/*
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
*/
function truncate(str,maxLength){
    if(str.length>maxLength){
        return str.slice(0,maxLength-1)+'...';
    }
    else return str;
}
console.log(`
${truncate("What I'd like to tell on this topic is:", 20)},
${truncate("Hi everyone!", 20)}
`)

function extractCurrencyValue(str){
    return +str.slice(1);
}
console.log(extractCurrencyValue('$123')===123);