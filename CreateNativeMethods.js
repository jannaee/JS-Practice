// Question: Create “native” methods
// Define a repeatify function on the String object. 
// The function accepts an integer that specifies how many times the string has to be repeated. 
// The function returns the string repeated the number of times specified. 
// For example: console.log('hello'.repeatify(3));
// Should print hellohellohello.
 
String.prototype.repeatify = function(x) {
text = '';
for (let i = 0; i < x; i++){
text += this;
}
return text
}
 
console.log('hello'.repeatify(3));
