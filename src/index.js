const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    const groups = [];
    while (arr.length > 0) {
        groups.push(arr.splice(0, 10));
    }
    let newGroups = groups.map(i => i.join('')).map(i => i.replace(/^0+/, ""))

    const regex1 = /10/ig, regex2 = /11/ig

    let str = newGroups.map(i => i.replace(regex1, '.'))
        .map(a => a.replace(regex2, '-'))

    return str.map(i => MORSE_TABLE[i] ? MORSE_TABLE[i] : ' ').join('')


}

module.exports = {
    decode
}
