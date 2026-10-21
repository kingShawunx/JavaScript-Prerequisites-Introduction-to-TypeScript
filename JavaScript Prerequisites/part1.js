// 1. Arrow functions
const square = (n) => n * n;
const greet = (name) => `Hello, ${name}!`;
const multiply = (a, b) => a * b;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log("Arrow functions:", square(4), greet("Amaka"), multiply(3, 5), getFullName("Amaka", "Okafor"));

// 2. Destructuring
const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" };
const { name, course, age: studentAge } = student;
const scores = [88, 72, 95, 60, 45];
const [firstScore, secondScore] = scores;
console.log("Destructuring:", { name, course, studentAge, firstScore, secondScore });

// 3. Spread operator
const frontend = ["HTML", "CSS", "JavaScript", "React"];
const backend = ["Node.js", "Express", "PostgreSQL"];
const fullStack = [...frontend, ...backend];
const userProfile = { name: "Amaka", email: "amaka@example.com", city: "Abuja" };
const updatedUserProfile = { ...userProfile, email: "newemail@example.com" };
console.log("Spread:", { frontend, backend, fullStack });
console.log("Original profile:", userProfile);
console.log("Updated copy:", updatedUserProfile);

// 4. Template literals
const introduction = `Hi, my name is Fatima. I am learning JavaScript.`;
const width = 8;
const height = 5;
console.log(introduction);
console.log(`The area of the rectangle is ${width * height}`);

// 5. Array methods (no explicit loops)
const products = [
  { name: "Laptop", inStock: true },
  { name: "Headphones", inStock: false },
  { name: "Keyboard", inStock: true },
];
const productNames = products.map((product) => product.name);
const inStockProducts = products.filter((product) => product.inStock);
const inStockProductNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name.toUpperCase());
console.log("Array methods:", { productNames, inStockProducts, inStockProductNames });

// 6. Ternary and logical AND
const getAccess = (role) =>
  role === "admin" ? "Full Access" : role === "editor" ? "Edit Access" : role === "viewer" ? "Read Only" : "No Access";
console.log("Access:", getAccess("admin"), getAccess("editor"), getAccess("viewer"), getAccess("guest"));

const cartItems = 0;
// With 0 items, JavaScript's && operator returns the first falsy value (0).
console.log("Logical AND result:", cartItems && "View Cart");
console.log("Fixed cart message:", cartItems > 0 ? "View Cart" : "");

