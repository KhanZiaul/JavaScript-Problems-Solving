// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateARandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?/[]{}|';

    const allCharactersTogether = uppercaseLetters + lowercaseLetters + digits + specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndexNumber = Math.floor(Math.random() * allCharactersTogether .length);
        password = password + allCharactersTogether[randomIndexNumber];
    }

    return password;
}

const result = generateARandomPassword(20);
console.log(result);