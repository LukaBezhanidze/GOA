let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let filteredArr = [];

function filter(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            filteredArr.push(numbers[i]);
        } else {
            numbers.pop();
        }
    }
}

filter(numbers);
console.log(filteredArr);
console.log(numbers);


let jami = 0

function sum(numbers) {
    for (let x = 0; i < numbers.length; x++) {
        jami =+ x
    }
}

sum(numbers);
console.log(jami)



let names = ['gocha', 'tengo', 'luka', 'teimuraztengizmetotxmete', 'sergia vaneli']

let myFriends = []

function realFriends() {
    for (let z = 0; z < numbers.length; z++) {
        if (names[z].length >= 4) {
            myFriends.push(names[z]);
        }
    }
}

realFriends();
console.log(myFriends);