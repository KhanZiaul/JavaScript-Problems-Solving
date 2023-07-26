// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?/[]{}|';

    const allCharacters = uppercaseLetters + lowercaseLetters + digits + specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password = password + allCharacters[randomIndex];
    }

    return password;
}

const generatedPassword = generateRandomPassword(20);
console.log(generatedPassword);