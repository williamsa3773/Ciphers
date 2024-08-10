const letters = 'abcdefghijklmnopqrstuvwxyz';

const lowercase = Array.from(letters, (val, index) => ({ key: index, value: val}));
const uppercase = Array.from(letters.toUpperCase(), (val, index) => ({ key: index, value: val}));

function Search(string) {
    for (let i = 0; i < letters.length; i++)
    {
        if(lowercase[i].value === string) {
            return lowercase[i].key;
        } else if(uppercase[i].value === string) {
            return uppercase[i].key;
        }
    }
    return 'isnt a letter';
};

function CheckCase(string) {
    if(string === string.toUpperCase())
        return 1;
    if(string === string.toLowerCase())
        return 0;
};

function Shift(shift, input, casing, direction) //shift index, string to be shifted, upper or lower, left or right
{
    let index = 0;
    switch (direction) {
        //right (encoding)
        case 0:
            //uppercase
            if(casing === 1) {
                index = shift+input;
                if(index > letters.length) {
                    index = index - 26;
                }
                return uppercase[index].value;
            }
            
            //lowercase
            if(casing === 0) {
                index = shift + input;
                if(index > letters.length) {
                    index = index - 26;
                }
                return lowercase[index].value;
            }
        break;
        //left (decoding)
        case 1:
            //uppercase
            if(casing === 1) {
                index = input - shift;
                if(index < 0) {
                    index = 26 + index;
                }
                return uppercase[index].value;
            }
            
            //lowercase
            if(casing === 0) {
                index = input - shift;
                if(index < 0) {
                    index = 26 + index;
                }
                return lowercase[index].value;
            }
        break;
    }
}

function Encode(shift, input) {
    return Shift(shift, Search(input), CheckCase(input), 0);
}

function Decode(shift, input) {
    let newString = ''
    newString = Shift(shift, Search(input), CheckCase(input), 1);
    return newString;
}


let shift, input;
num = 5, string = 'd'
console.log(Encode(num, string) , Decode(num, Encode(num, string))); //expected i
num = 7, string = 'q'
console.log(Encode(num, string) , Decode(num, Encode(num, string))); //expected x
num = 2, string = 'Z'
console.log(Encode(num, string) , Decode(num, Encode(num, string))); //expected B
num = 3, string = 'B'
console.log(Encode(num, string) , Decode(num, Encode(num, string))); //expected E