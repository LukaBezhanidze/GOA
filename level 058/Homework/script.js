let score = 100; 

if (score < 0 || score > 100) {
    console.log("invalid score");

} else if (score == 100) {
    console.log("a+ score");

} else if (score >= 90 && score < 100) {
    console.log("a score");

} else if (score >= 80 && score < 90) {
    console.log("b score");

} else if (score >= 70 && score < 80) {
    console.log("c score");

} else if (score >= 60 && score < 70) {
    console.log("e score");

} else if (score >= 0 && score < 60) {
    console.log("f score");
}






let movies = ["Inception", "Interstellar", "Matrix", "Shutter Island", "Fight Club"];


let YourFilm = prompt("Enter your favorite movie from the list: ")


let message = movies.includes(favoriteMovie)
  ? "The Film That You Chose Is In The List"
  : "The Film That You Chose Is Not In The List";






let role = prompt("Enter your role (admin, editor, viewer):").toLowerCase();









switch (role) {
    case 'admin':
        console,log("You have full access to the system.");
        break;
    case 'editor':
        console.log("accses denied");
        break;
    case 'viewer':
        console.log("You can view the content.");
        break;
}


function calculateSum(a, b, c) {

    let sum = 0

    if (typeof a === Number && typeof b === Number && typeof c === Number && a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
        sum = a + b + c;
    }

    if (sum > 15) {
        console.log("The sum is greater than 15");

    } else if (sum < 15) {
        console.log("The sum is less than 15");

    }


}

function funqcionadze(num) {
    if (num % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }

}