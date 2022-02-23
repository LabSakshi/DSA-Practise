
// count the number of character in a string


function charCount(str) {
    let map = {}
    for (let char of str) {
        // regex to eleminate spaces
        if (/[a-z0-9]/.test(char)) {
            if (char.toLowerCase() in map) {
                map[char.toLowerCase()]++
            }
            else {
                map[char.toLowerCase()] = 1
            }
        }
    }
    console.log(map)
    return map
}

charCount("My piniiinnnn is 1234")
charCount("Hhello")

//Regex might have performance issues

function charCount2(str) {
    let map = {}
    for (let char of str) {
        if (isAlphaNumeric(char))
        {
            if (char.toLowerCase() in map) {
                map[char.toLowerCase()]++
            }
            else {
                map[char.toLowerCase()] = 1
            }
        }
    }

    console.log(map)
    return map
}

function isAlphaNumeric(char) {
    code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&
        !(code > 67 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    } return true;
}

charCount2("My piniiinnnn is 1234")
charCount2("Hhello")