<div style="border:2px solid white; padding:15px ; border-radius: 10px ; margin-bottom: 20px" >

># 🌐 HTTP Methods & HTTP Status Codes
>
>
> ## 📢HTTP Methods
>
>- **GET** → Retrieve data from a server (read-only)  
>- **POST** → Send data to the server to create a new resource  
>- **PUT** → Update or replace an existing resource completely  
>- **PATCH** → Update part of an existing resource  
>
>---
>

>## ✅ HTTP Status Codes
>
>### 🟢 Success Codes
>
>- <span style="color:#5cb85c"><b>200 OK</b></span> – Request succeeded  
>- <span style="color:#5cb85c"><b>201 Created</b></span> – Resource created  
>- <span style="color:#5cb85c"><b>204 No Content</b></span> – Success, but no content to return  
>
>---
>
>### 🟡 Redirection Codes
>
>- <span style="color:#f0ad4e"><b>301 Moved Permanently</b></span>  
>- <span style="color:#f0ad4e"><b>302 Found</b></span> – Temporary redirect  
>- <span style="color:#f0ad4e"><b>304 Not Modified</b></span> – Use cached data  
>
>---
>
>### 🟠 Client Error Codes
>
>- <span style="color:#f89406"><b>400 Bad Request</b></span> – Invalid input  
>- <span style="color:#f89406"><b>401 Unauthorized</b></span> – Needs authentication  
>- <span style="color:#f89406"><b>403 Forbidden</b></span> – Access denied  
>- <span style="color:#f89406"><b>404 Not Found</b></span> – Resource doesn't exist  
>- <span style="color:#f89406"><b>405 Method Not Allowed</b></span>  
>
>---
>
>### 🔴 Server Error Codes
>- <span style="color:#d9534f"><b>500 Internal Server Error</b></span>  
>- <span style="color:#d9534f"><b>502 Bad Gateway</b></span>  
>- <span style="color:#d9534f"><b>503 Service Unavailable</b></span>  
>- <span style="color:#d9534f"><b>504 Gateway Timeout</b></span>  
></div>


<div style="border:2px solid white; padding:15px ; border-radius: 10px ; margin-bottom: 20px" >


># 🎉CSS Selectors
>
>
>## 1. **Element Selector**
>
>The **element selector** targets all elements of a given type.
>
> ```css
>p {
>  color: blue;
>}
>```
>## 2. **Class Selector (.)**
>
>The **class selector** targets elements with a specific class.
>
>```css
>.box {
>  border: 1px solid red;
>}
>```
>
>## 3. **ID Selector (#)**
>
>The ID **selector targets** a single element with a specific ID.
>
>```css
>#box {
>  background-color: red;
>  color: green;
>}
>```
>
>## 4. **Universal Selector (*)**
>
>The **universal selector** targets all elements on the page.
>
>```css
>* {
>  margin: 0;
>  padding: 0;
>}
>```
></div>
>

<div style="border:2px solid white; padding:15px ; border-radius: 10px ; margin-bottom: 20px" >

># ⚙️Git Basics
>
>
>## 1. 🎫**git init**
>
>Initializes a new Git repository in the current directory.
>
>```bash
>git init
>```
>
>## 2. ➕**git add**
>
>Stages changes (files) to be committed.
>
>```bash
>git add <filename>
>```
>To add all files at once.
>
>```bash
>git add .
>```
>
>## 3. ✔️**git commit**
>
>Commits the staged changes with a descriptive message.
>
>```bash
>git commit -m "Commit message here"
>```
>
>## 4. 📌**git push**
>
>Pushes local commits to a remote repository.
>
>```bash
>git push origin <branch-name>
>```
>
>## 5. 📍**git pull**
>
>Fetches and integrates changes from a remote repository into your local branch.
>
>```bash
>git pull origin <branch-name>
>```
>
>## 6. 🪞**git clone**
>
>Creates a copy of an existing remote repository on your local machine.
>
>```bash
>git clone <repository-url>
>```
></div>
>
<div style="border:2px solid white; padding:15px ; border-radius: 10px ; margin-bottom: 20px" >

># Callback & Higher-Order Function
>
>## 1. **Callback Function**
>
>A **callback function** is a function that is passed into another function as an argument and is executed after the completion of the other function.
>
>### Example:
>
>```javascript
>// Callback function example
>function greet(name, callback) {
>  console.log("Hello, " + name);
>  callback(); // Calling the callback function
>}
>
>function sayGoodbye() {
>  console.log("Goodbye!");
>}
>
>// Passing `sayGoodbye` as a callback to `greet`
>greet("Alice", sayGoodbye);
>```
>
>## 2. **Higher-Order Functions**
>
>A **higher-order function** is a function that:
>- Takes one or more functions as arguments, or
>- Returns a function as its result.
>
>In other words, a higher-order function operates on functions, either by accepting them as parameters or returning them.
>
>
>
>### Example: 
>
>```javascript
>// Higher-order function
>function map(arr, callback) {
>  let result = [];
>  for (let i = 0; i < arr.length; i++) {
>    result.push(callback(arr[i], i, arr)); // Apply callback to each item
>  }
> return result;
>}
>
>// Callback function
>function square(num) {
>  return num * num;
>}
>
>// Usage of higher-order function
>let numbers = [1, 2, 3, 4];
>let squares = map(numbers, square); // Pass the square function as argument
>console.log(squares); // Output: [1, 4, 9, 16]
>
>```
></div>
>
<div style="border:2px solid white; padding:15px ; border-radius: 10px ; margin-bottom: 20px" >

># Array Methods: `filter`, `map`, `forEach`, `push`, `pop`
>
>
>## 1. **filter()**
>
>The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
>```javascript 
>const ages = [32, 33, 16, 40];
>const result = ages.filter(checkAdult);
>
>function checkAdult(age) {
>  return age >= 18;
>} 
>```
>
>## 2. **map()**
>
>The `map()` method creates a new array populated with the results of calling a provided function on every element in the array.
>```javascript
>const numbers = [65, 44, 12, 4];
>const newArr = numbers.map(myFunction)
>
>function myFunction(num) {
>  return num * 10;
>}
>```
>
>## 3. **forEach()**
>The `forEach()` method executes a provided function once for each array element. It does not return a new array, unlike `map().`
>```javascript 
>const fruits = ["apple", "orange", "cherry"];
>fruits.forEach(myFunction);
>```
>
>## 4. **push()**
>The `push()` method adds one or more elements to the end of an array and returns the new length of the array.
>```javascript
>let fruits = ['apple', 'banana'];
>fruits.push('orange');
>console.log(fruits); 
>```
>
>## 5. **pop()**
>The `pop()` method removes the last element from an array and returns that element.
>
>```javascript 
>let fruits = ['apple', 'banana', 'orange'];
>let lastFruit = fruits.pop();
>console.log(lastFruit); // Output: 'orange'
>console.log(fruits);
>```
></div>