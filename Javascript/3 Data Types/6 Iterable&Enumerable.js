let log=console.log;
let names=['Rakesh','Mahesh','Suresh','Madhav'];
names.pro='Saurabh';
Object.defineProperty(names,'pro-max',
                    { value:'Joshi',
                      enumerable:'false'
                    });

let places={
    'towns':['Ambala','Balakot','Pulwama'],
    'states':['Jammu','Kashmir','ladakh'],
};
places.country='India';
Object.defineProperty(places,'knownAs',
                    { value:'Heaven',
                        enumerable:true
                    })
/*
for(let p in names){
    log('p in names',p);
}
log();
for(let p in places){
    log('p in names',p);
}
log();

for(let p of names){
    log('p of names',p);
}
log();

// this will give error as objects are not iterable but emumerable
for(let p of places){
    log('p of names',p);
}
*/

/*
ES6 Iterator and Generator
Array,String,Map,Set,NodeList ==> built in iterators
(Object)=> iterator=> Generator
*/
/*
let cities=['London','Delhi','Mumbai','Kolkata'];
function* genny1(){
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    return 'anything';
}
let iter=genny1();

function* genny(){
    let i=0;

}
iter=genny();
console.log(iter)
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
*/

// custome iterator
let range={
    from: 1,
    to: 5
};

range[Symbol.iterator]=function(){
   return {
        current:this.from,
        last: this.to,
        next(){
            if(this.current<=this.last){
                return {done:false,value:this.current++};
            }else{
                return {done:true};
            }
        }
   }
}
for(p of range){
    console.log(p);
}