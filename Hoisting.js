// Question: Hoisting
// What’s the result of executing this code and why.
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}
test();
// Answer
// The var a and function will be hoisted up; however the value of a will stay at the bottom. Therefore it will console undefined and 0.
// the code above is equivalent to the following:
function test() {
   var a;
   function foo() {
      return 2;
   }
console.log(a);
   console.log(foo());   
   a = 1;
}
test();
