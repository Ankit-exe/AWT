let name = "Alice";
console.log(name);

let age = 25;
console.log(age);

let isStudent = true;
console.log(isStudent);

for (let i = 0; i < 5; i++) {
    console.log("number" + i);
}
let num = [2,3,5];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
let i = 0;
while (i < 5) {
    console.log("Number: " + i);
    i++;
}
 function Add(a,b){
    return a+b;
 }
  
 function Sub(a,b){
    return a-b;
 }
 function Div(a,b){
    return a/b;
 }

console.log("Addition:" + Add(10, 5));  
console.log("Subtract:"+ Sub(15,7));  
console.log("Divide:"+ Div(15,3)); 