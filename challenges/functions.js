// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(param1, param2, cb) {
  return cb(param1, param2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function (num1, num2) {
  return num1 + num2;
}

const multiply = function (num1, num2) {
  return num1 * num2;
}

const greeting = function (firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
//console.log(consume(2, 2, add)); // 4
//console.log(consume(10, 16, multiply)); // 160
//console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

//Explanation: 

//? Similar to HTML and CSS, we can nest functions within a function. Closures represent the pressure between two lego blocks and allow us sticking them together. Closures control what is and isn't in a scope in a particular function, along with which variables are shared between sibling functions in the same containing scope. To protect your code from other codes and not to run the code until we need it. Used for object data privacy, in event handlers and callback functions. Hold on and not run the code until later. You can use it when you need it === closure. Lexical Scope === Where did you come from and how you are going to use it later. It's not magic, the compiler is actually setting up references to the lexical scope and using them later. 

const external = "I'm outside the function";

function myFunction() {
  //console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //console.log(internal);
  };
  nestedFunction();
}
myFunction();
