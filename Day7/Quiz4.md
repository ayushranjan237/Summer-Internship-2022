## Javascript quiz  (Basic Level 4)
#### Theory -
1. What are anonymous functions in JavaScript?
 * Anonymous Function is a function that does not have any name associated with it. 
 * Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
 
2. Explain strict comparison and Abstract comparison in javascript?
 * Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal.
 * The Abstract Equality Comparison Operator, a.k.a. == in JavaScript is the so-called type-coercing equality check. It coerces types if necessary and can lead to some pretty weird results. But we can make sense of all this, and you'll see that you can follow along.

3. Difference b/w arrow functions and regular functions?<br>
 JavaScript's arrow functions might seem the same as regular functions on the surface, but they have some very important differences:

* Syntactical differences
* this value (execution context)
* Usage as methods
* Usage as constructors
* arguments binding

4.  What is Hoisting in JavaScript?
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

5. JavaScript is a garbage collected programming language, explain how?
 * The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
 
6. Explain Shallow copy vs Deep copy in Javascript?
 * A shallow copy means that certain (sub-)values are still connected to the original variable.
 * A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.

7. What is Object.freeze?
 * A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
 
8. Write a function that generates a random number between two ranges, -100 to 0 and800 - 900.


```js
function getRandomNumberBetween(min1,max1,min2,max2){
    var v1=Math.floor(Math.random()*(max1-min1+1)+ min1);
    var v2=Math.floor(Math.random()*(max2-min2+1)+min2);
    
    console.log( Math.random() < 0.5 ? v1 : v2 );
}
getRandomNumberBetween(800,900,-100,0);
```
