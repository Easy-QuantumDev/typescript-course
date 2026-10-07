"use strict";
/////////////////////////Document
Object.defineProperty(exports, "__esModule", { value: true });
function Calculate(a, b, operation) {
    return operation(a, b);
}
let add = (a, b) => a + b;
let multiple = (a, b) => a * b;
let minus = (a, b) => a - b;
let other = (a, b) => a / b;
console.log(Calculate(10, 10, add));
console.log(Calculate(10, 10, multiple));
console.log(Calculate(10, 10, minus));
console.log(Calculate(10, 10, other));
//# sourceMappingURL=main.js.map