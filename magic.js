function getPass() {
  const chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()+=-_{}?:><`~'[]";

  let passwordLength = 12;
  let password = ' ' ;

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring (randomNumber, randomNumber + 1)

  }
  document.getElementById('passwordA').value = password;

  const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()+=-_{}?:><`~'[]";

  let passwordEl = 14;
  let passwordTwo = ' ' ;

  for (let i = 0; i < passwordEl; i++) {
    let randomNumberTwo = Math.floor(Math.random() * chars.length);

    passwordTwo += char.substring (randomNumberTwo, randomNumberTwo + 1)

  }
  document.getElementById('passwordB').value = passwordTwo;
}