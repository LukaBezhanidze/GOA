function sigma(n, n1, n2) {
    sum = n+n1+n2;
    
    let sashualo = sum % 3;

    cosnole.log(sashualo)
}



function checkPassword(password) {
  if (
    password.length >= 8 &&
    password.length <= 20 &&
    /[a-zA-Z]/.test(password) &&
    /\d/.test(password) &&
    password[0] === password[0].toUpperCase()
  ) {
    return "Valid password";
  } else {
    return "Invalid password";
  }
}
