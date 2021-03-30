// Function passed as(into) a parameter and invoked at a later time(also called higher order functions)

function delay(fn){
  console.log('starting Delay');
  // setTimeout will pass fn and run it after 3seconds of recieving it
  setTimeout(fn, 3000);
  // fn(); this is how we would invoke the function is we werent going to set a timeout to delay when the fn runs for this test
  console.log('end Delay');
}
// fn is the placeholder/parameter we are calling
function greet(){
  console.log('hello world');
}
// this is how you create & invoke a method delay() and greet is the argument(in this case a function) we are passing to the paramater
delay(greet);



// NOTE another example of a call back is a filter method

let nums = [1,23,4,5,3,5,3,2,4,2,33,123,43,21];
// this is the same as below in differnt syntax. function lesThan10(num) {
  // return num < 10;
// }
let filtered = nums.filter(num => num < 10);

console.log(filtered)