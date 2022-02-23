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
    let str = ''
    let pair = ''
    let morse = ''
    let result = ''
    for (let i = 0; i < expr.length; i+= 10) {
      str = expr.slice(i, i + 10)
      if (str === "**********") {
        result+= ' '
      }
      for (let j = 0; j < str.length; j+= 2) {
        pair = str.slice(j, j + 2)
        if (pair === '10') {
          morse+= '.'
        }
        else if (pair === '11') {
          morse+= '-'
        }
      }
      for (let key in MORSE_TABLE) {
        if (morse === key) {
             result+= MORSE_TABLE[key]
             morse = ''   
        }
      }
    } return result
}

module.exports = {
    decode
}