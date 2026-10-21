import formatCurrency, { add, capitalize, APP_VERSION } from "./utils.js";

console.log("Addition:", add(20, 22));
console.log("Capitalized:", capitalize("javascript"));
console.log("App version:", APP_VERSION);
console.log("Formatted amount:", formatCurrency(45000));
