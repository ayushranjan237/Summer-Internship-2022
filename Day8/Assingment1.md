## Typescript quiz (Basic Level -1) 
### Theory -
1. What are the basic data types in TypeScript?
 * The basic data types in TypeScript are :-

   + Boolean
   + Number 
   + String 
   + Null	
   + Undefined
   
2. What is Generic data type?
* A generic type is a generic class or interface that is parameterized over types.
Essentially, generic types allow you to write a general, generic class (or method) that works with different types, allowing for code re-use.

3. What is type inferring in TS?
* TypeScript infers types of variables when there is no explicit information available in the form of type annotations. 
Types are inferred by TypeScript compiler when: Variables are initialized. Default values are set for parameters. Function return types are determined.

4. What are the possible ways to define typing for functions.
 * In TypeScript, there are multiple syntaxes for declaring the type of a function:
    + Method signatures.
    + Function type literals.
    + Object type literals with call/construct signatures.
    
5. How to define Generic type for Classes?  
 *  A Generic class simply means that the items or functions in that class can be generalized with the parameter(example T) to specify that we can add any type as a parameter in place of T like Integer, Character, String, Double or any other user-defined type.
 * These classes are known as parameterized classes or parameterized types because they accept one or more parameters.
 
 
### Program -
Define the types in typescript for the given following JavaScript code.
* Todo:
- Define type/interface for a single Todo object.
- Define type for each function.
- Do not use `any` (TS Data Type) type of typescript.
    
 Code(Js):

```js
   var todos = [];
   function add(name, description) {
     return todos.push({ name: name, description: description, done: false });
   }
   function remove(index) {
     return todos.splice(index, 1);
   }
   function list() {
     todos.forEach(function (todo, index) {
       console.log(index + " -" + todo.name);
     });
   }
   function update(index, name, description) {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }
   ```
   Answer :
   
```ts
   class Entry {
     name: string;
     description: string;
     done: boolean;
   }
   var todos: Entry[] = [];
   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }
   function remove(index: number): Entry[] {
     return todos.splice(index, 1);
   }
   function list(): void {
     todos.forEach(function (todo: Entry, index: number) {
       console.log(index + " - " + todo.name);
     });
   }
   function update(index: number, name: string, description: string): Entry {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }
   console.log(add("Go to College", "Do some Assignments"));        // 1
   list();        // 0 - Go to College
```
