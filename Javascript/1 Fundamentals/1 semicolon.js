/*
Semicolons
A semicolon may be omitted in most cases when a line break exists.

This would also work:
*/
console.log('Hello')
console.log('World')

/*
Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.
In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!
There are cases when a newline does not mean a semicolon. For example:
*/

console.log(3 +
1
+ 2);

/*
The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, so the semicolon is not required. And in this case that works as intended.
But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.
Errors which occur in such cases are quite hard to find and fix.
An example of an error
If you’re curious to see a concrete example of such an error, check this code out:
*/
[1, 2].forEach(console.log)
/*NOTE
[1,2,3,4,5].forEach(console.log);
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
This is because the callback to forEach is a three-parameter function taking the value,
the index, and the array itself. The function console.log sees those three parameters
and dutifully logs them
*/
/*
No need to think about the meaning of the brackets [] and forEach yet. We’ll study them later. For now, just remember the result of the code: it shows 1 then 2.
Now, let’s add an log before the code and not finish it with a semicolon:
*/

console.log("There will be an error")
// [1, 2].forEach(console.log)

/*
Now if we run the code, only the first log is shown and then we have an error!
But everything is fine again if we add a semicolon after log:
*/
console.log("All fine now");
[1, 2].forEach(console.log)
/*
Now we have the “All fine now” message followed by 1 and 2.
The error in the no-semicolon variant occurs because JavaScript does not assume a semicolon before square brackets [...].
So, because the semicolon is not auto-inserted, the code in the first example is treated as a single statement. Here’s how the engine sees it:
log("There will be an error")[1, 2].forEach(log)
But it should be two separate statements, not one. Such a merging in this case is just wrong, hence the error. This can happen in other situations.
We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them.
*/