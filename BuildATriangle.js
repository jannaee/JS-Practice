// Question: Build A Triangle that creates a line of * for a given length
 
function makeLine(length) {
line= '';
for (let i = 0; i < length; i++){
line += '*';
}
return line + '\n'
}
function buildTriangle(length) {
text= "";
for (let j = 1; j <= length; j++){
text += makeLine(j);
}
console.log(text);
return text
}
buildTriangle(3);
