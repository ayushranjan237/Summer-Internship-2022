## Express Quiz 
### Theory -
1. What is NodeJS?
 * Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine
  and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
  
2. What is V8 Engine?
  * V8 is a free and open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers. 
    The project’s creator is Lars Bak. The first version of the V8 engine was released at the same time as the first version of Chrome: 2 September 2008.  
    
3. What is Event Loop in NodeJS.
 * Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
 * The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
 * The event loop allows us to use callbacks and promises.
 * The event loop executes the tasks starting from the oldest first.

4. What is the use of tsconfig.json file?
 * The tsconfig. json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig.
   json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.
   
5. What are the methods provided by `fs` module to manipulate files?
 * fs.access(): check if the file exists and Node.js can access it with its permissions fs.appendFile(): append data to a file. If the file does not exist, it's created fs.chmod(): change 
 the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod() fs.chown(): change the owner and group of a file specified by the filename passed. Related: fs.fchown(),
 fs.lchown() fs.close(): close a file descriptor fs.copyFile(): copies a file fs.createReadStream(): create a readable file stream fs.createWriteStream(): create a writable file stream fs.link():
 create a new hard link to a file fs.mkdir(): create a new folder fs.mkdtemp(): create a temporary directory

6. What is API?
* API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app 
like Facebook, send an instant message, or check the weather on your phone, you're using an API.

7. What is JSON format?
* It is a text-based way of representing JavaScript object literals, arrays, and scalar data. JSON is relatively easy to read and write, while also easy for software to parse and generate. 
It is often used for serializing structured data and exchanging it over a network, typically between a server and web applications.

8. Why we use JSON format for API?
* It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs. Instead, JSON allowed APIs to represent structured 
data in a way that simply was a better fit for the conceptual universe that most developers live in.

9. What is a Framework?
* The definition of framework is a support structure or system that holds parts together, has something stretched over it or acts as the main structure. An example of a framework is four posts 
supporting a deck cover. An example of a framework is an outline created before writing an essay.

10. How an HTTP Communication works.
* Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. Client devices send requests to servers for the resources needed to load a web page;
the servers send responses back to the client to fulfill the requests.

11. What is Middleware in ExpressJS.
 * Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
 These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
