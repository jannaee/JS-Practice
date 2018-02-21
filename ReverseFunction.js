// Question: Reverse function
 
function reverseString(reverse) {
    text = '';
    for (let i = (reverse.length-1); i >= 0; i--){
        text += reverse[i];
    }
    return text;
}
console.log(reverseString("Julia"));
console.log(reverseString("cool"));