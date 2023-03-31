function getPass(passwordLength = 12) {
  const chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()+=-_{}?:><`~'[]";
  let password = '';
  let passwordTwo = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    const randomNumberTwo = Math.floor(Math.random() * chars.length);

    password += chars[randomNumber];
    passwordTwo += chars[randomNumberTwo];
  }

  document.getElementById('passwordA').value = password;
  document.getElementById('passwordB').value = passwordTwo;
}
