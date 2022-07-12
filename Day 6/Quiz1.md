## Javascript quiz  (Basic Level - 1) -
### Theory :- 
Q1.   What is JavaScript? <br>
Ans.  JavaScript is a high level, interpreted, dynamically typed programming language that isused to add interactivity and dynamic behavior in static websites. <br></br>
Q2.   What is the difference between b/w let and var?  <br>
Ans.  <ul>
  <li>let is block-scoped & var is function scoped.</li>
  <li> let does not allow to redeclare variables & var allows to redeclare variables.</li>
  <li> Hoisting does not occur in let & Hoisting occurs in var. </li><br></br>
</ul>
Q3. Why do we prefer const over var?<br>
Ans. It makes code easier to read. If it's a const declaration we know that the value is not changed. 
We don't have to read the code to check whether the value is changed. <br></br>

Q4. What is the use of javascript in web browsers?<br>
Ans. JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. 
Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.<br></br>

Q5. What are Objects? <br>
Ans. An object stores its state in fields (variables in some programming languages) and exposes its behavior through methods (functions in some programming languages). <br></br>

Q6. What is an array and how is it different from an Object in Javascript? <br>
Ans. JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.<br>
Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value).
Arrays are a special type of variable that is also mutable and can also be used to store a list of values. <br></br>

Q7. What is a function?<br>
Ans. A function is a resuable block of code that can be called n number of times.<br></br>

Q8. How can we implement call by value and call by reference in Javascript?<br></br>
Ans. Implementing call by value :- <br>
<ul>
  <li> Function arguments are always passed by value. </li>
  <li> It copies the value of a variable passed in a function to a local variable. </li>
<li> Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one. </li>
  <br>
Implementing call by reference :- <br>
<ul>
  <li>In JavaScript, all objects interact by reference. </li>
<li> If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory. </li>
  <li> Changes in one object variable affect the other object variable. </li>
  </ul><br></br>
 
Q9. What are the primitive data types in Javascript?<br>
Ans.  The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.<br>
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null. <br></br>

Q10. What is DOM?<br>
Ans. DOM stands for Document Object Model. In the world of web, all HTML webpages are referred to as documents. 
The Document Object Model represents each of these web pages in a tree-like structure to make it easier to access and manage the elements.<br></br>

Q11. Why do we need DOM?<br>
Ans. When a web page gets made, it's essential that it follows a certain set of format and syntax. 
If the web page is made in the form of the tree where there is a root node and all the elements of a web page like &lt;body&gt; or &lt;div&gt; are made to be the nodes of that tree,
  building / accessing and traversing the webpage would be really easy. Hence, a DOM is required.
<br></br>

### Programs :- 
  
Q1.Average of array nums in Javascript?<br>
``` JavaScript
const average_of_array = (arr) => {
	let sum = arr.reduce((result, item) => result+item, 0)

	return (sum / arr.length)
}

console.log(average_of_array([1, 2, 3, 4, 5]))
```

Q2.Swap two numbers by reference?<br>
``` JavaScript
const swap_nums = (num1, num2) => {
	let temp = num1
	num1 = num2
	num2 = temp

	return { num1, num2 }
}

console.log(swap_nums(2, 3)) // Output - { num1: 3, num2: 2 }
```
Q3. Print the fibonacci sequence.<br>
``` JavaScript
const printFibonacci = (nterm) => {
   const number = nterm
   let n1 = 0, n2 = 1, nextTerm
   
   console.log('Fibonacci Series:')
   
   for (let i = 1; i <= number; i++) {
       console.log(n1)
       nextTerm = n1 + n2
       n1 = n2
       n2 = nextTerm
   }
}

printFibonacci(50)
```
Q4. Sort an array by both ascending and descending order? <br>
``` JavaScript
const sortArray = (arr) => {
	let ascending = new Int32Array(arr).sort()
	let descending = new Int32Array(arr).sort().reverse()
	return {
		"ascending": Array.from(ascending),
		"descending": Array.from(descending)
	}
}

console.log(sortArray([3, 5, 29, 4, 10])) // Output - { ascending: [ 3, 4, 5, 10, 29 ], descending: [ 29, 10, 5, 4, 3 ] }
```
Q5. Show a variable value in an HTML webpage using DOM?<br>
``` JavaScript
let a = 10
document.write(a)
```



  
  
