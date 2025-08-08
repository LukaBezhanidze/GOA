let year = Number(prompt("Enter the year of your birth:"));



if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    alert("You were born in a leap year.");
} else {
    alert("You were not born in a leap year.");
}


if (year <= 0) {
    consple.log("number is negative")
} else if (year > 0) {
    console.log("number is positive");
} else if (year.isInteger === true) { 
    console.log("number is integer");

} else if (year.isInteger === false) {
    console.log("number is not integer");
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let kenti = 0

let luwi = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        luwi ++;
    } else {
        kenti ++;
    }
}


let LoggedIn = True

let message = LoggedIn ? "Welcome back!" : "Please log in.";

console.log(message);

let time = new Date().getHours();


let timeMessage = time < 12 ? "Good morning!" : time < 18 ? "Good afternoon!" : "Good evening!";

console.log(timeMessage);

let day = new Date().getDay();


switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}


let color = prompt("Enter a color (red, green, yellow):").toLowerCase();


switch (color) {
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("slow down");
        break;
    default:
        console.log("Invalid color");
        break;
} 


const users = [
  { name: "Luka", isActive: true },
  { name: "Nino", isActive: false },
  { name: "Ana", isActive: true },
  { name: "Giorgi", isActive: false }
];


let activeUsers = users.filter(user => user.isActive);


const strings = ["apple", "banana fffgafgaaweeerwe", "cherry asdasd", "date asdfasd"];



strings.toLowerCase = strings.map(str => str.toLowerCase());


const users1 = [
  { name: "Luka", age: 25 },
  { name: "Nino", age: 30 },
  { name: "Ana", age: 22 },
  { name: "Giorgi", age: 28 },
  { name: "Mzia", age: 15 }
];


if (users1.some(user => user.age < 18)) {
    console.log("There are users under 18.");
} else {
    console.log("All users are 18 or older.");
}


let user = {
  name: "Luka",
  age: 25
};


user.isActive = true;


user.age = 30;


delete user.name;

console.log(user);


let objects = [
    { name: "Luka", age: 25 },
    { name: "Nini", age: 30 },
]


