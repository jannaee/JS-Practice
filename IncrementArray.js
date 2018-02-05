// Question: increment last array element

var sampleArray = [0,0,7];

incrementLastArrayElement =(sampleArray)=> {
    sampleArray[2] += 1;
    return sampleArray
}

console.log(incrementLastArrayElement(sampleArray));
//OR

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array;
    newArray.push(newArray.pop()+1);
    return newArray;
};
console.log(incrementLastArrayElement(sampleArray));
