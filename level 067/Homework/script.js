let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let filteredNumbers = numbers.filter((number) => {
  return number < 10;
})

let numbersagain = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];


let positiveNumbers = numbersagain.filter((number) => {
  return number > 0;
});


let names = ['Alice', 'Bob', 'Charlie', 'David', 'Anzori', 'Eve'];

names.forEach((name) => {
  if (name.length === 3) {
    console.log(`Hello, ${name}!`);
  }
});



numbers.map((number) => {
  if (number % 2 === 0) {
    return True;
    } else { return False;
  }
})


for i (let i = 0; i < numbers.length; i++) {
    console.log(toString(numbers[i])); 
}

















































