// import LinkedList from "./index.js";
const LinkedList = require("./index.js")

let list = new LinkedList();
list.append('Hello1');
list.append('Hello2');
list.append('Hello3');
list.append('Hello4');

console.log(list)
console.log(list.toString())

list.prepend('Hello5');
list.append('Hello6');
list.prepend('Hello7');

console.log(list)
console.log(list.toString())

console.log(list.size())
console.log(list.head())
console.log(list.tail())
console.log(list.at(3))

list.pop();
console.log(list.toString())
console.log(list.size())

list.pop();
list.insertAt('what',0)
console.log(list.toString())
console.log(list.size())

console.log(list.contains('Hello7'))

console.log(list.find('Hello2'))

list.removeAt(2)
console.log(list.toString())