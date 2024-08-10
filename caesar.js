const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*() ';
const charMap = new Map();
allChars.split('').forEach((char, index) => charMap.set(char, index));

function Shift(shift, char, direction) {
    const length = allChars.length;
    let index = charMap.get(char);
    
    if(index === undefined) return char;
    if ( direction === 0)
        index = (index + shift) % length;
    else if ( direction == 1)
        index = ( index -shift+ length) % length;

    return allChars[index];
}

function Encode(shift, input) {
    return input.split('').map(char => Shift(shift, char, 0)).join('');
}

function Decode(shift, input) {
    return input.split('').map(char => Shift(shift, char, 1)).join('');
}

// Test cases

let num, string;

num = 3, string = 'hello123!';
console.log("Encoding Message to:", Encode(num, string), '\n', "Decoding Message to:", Decode(num, Encode(num, string)));

num = 6, string = 'oreo is a mom now!';
console.log("Encoding Message to:", Encode(num, string), '\n', "Decoding Message to:", Decode(num, Encode(num, string)));

num = 25, string = 'i want mangoes with chicken nuggets!';
console.log("Encoding Message to:", Encode(num, string), '\n', "Decoding Message to:", Decode(num, Encode(num, string)));

num = Math.floor(Math.random() * allChars.length), string = "HieroNese!7"
console.log("Encoding Message to:", Encode(num, string), '\n', "Decoding Message to:", Decode(num, Encode(num, string)));
