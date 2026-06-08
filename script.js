/* Exercise 1 */
function changeText() {

    document.getElementById("para1").textContent =
        "Paragraph text changed!";
}

/* Exercise 5 */
function changeColor() {

    let colors = [
        "lightblue",
        "lightgreen",
        "lightyellow",
        "pink",
        "lavender"
    ];

    let randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor =
        randomColor;
}

/* Exercise 6 */
function showText() {

    let text =
        document.getElementById("userInput").value;

    document.getElementById("output").textContent =
        text;
}

/* Exercise 10 */
function showDate() {

    document.getElementById("date").textContent =
        new Date();
}

/* Exercise 13 */
function toggleParagraph() {

    let para =
        document.getElementById("togglePara");

    if (para.style.display === "none") {

        para.style.display = "block";

    } else {

        para.style.display = "none";
    }
}

/* Exercise 11 */

let fruits =
["Apple", "Banana", "Mango", "Orange"];

let list =
document.getElementById("fruitList");

fruits.forEach(function (fruit) {

    let li =
        document.createElement("li");

    li.textContent = fruit;

    list.appendChild(li);
});

/* Exercise 2 */

let students =
["Rahul", "Aman", "Priya", "Neha", "Karan"];

console.log("Student Names:");

students.forEach(function(student) {

    console.log(student);
});

/* Exercise 3 */

let longNames =
students.filter(name => name.length > 4);

console.log("Names longer than 4 characters:");

console.log(longNames);

/* Exercise 4 */

let numbers =
[1, 2, 3, 4, 5];

let doubled =
numbers.map(num => num * 2);

console.log("Doubled Numbers:");

console.log(doubled);

/* Exercise 7 */

function largerNumber(a, b) {

    return a > b ? a : b;
}

console.log(
    "Larger Number:",
    largerNumber(20, 45)
);

/* Exercise 8 */

let nums =
[10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < nums.length; i++) {

    sum += nums[i];
}

console.log("Sum:", sum);

/* Exercise 9 */

let student = {

    name: "Rahul",
    age: 20,
    course: "BCA"
};

console.log("Student Object:");

console.log(student.name);
console.log(student.age);
console.log(student.course);

/* Exercise 12 */

function checkEvenOdd(num) {

    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

/* Exercise 14 */

let userName = "John";

let message =
`Hello, ${userName}! Welcome to JavaScript.`;

console.log(message);

/* Exercise 15 */

const square = num => num * num;

console.log(
    "Square:",
    square(6)
);