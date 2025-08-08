const ageOfUser = Number(prompt("Enter your age: "));


if (ageOfUser > 0 && ageOfUser < 13) {
  alert("You are a child.");
}

else if (ageOfUser => 13 && ageOfUser < 18) {
  alert("You are a teenager.");
}

else if (ageOfUser >= 18 && ageOfUser < 60) {
    alert("youre too old");
}