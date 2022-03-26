/*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
 */

export function romanToInteger(str) {
    let result = 0;
    let dif = 0;
    let currentNumb = 0;
    let nextNumb = 0;

    if (!checkValidRoman(str)) {
        console.log('Число неверно записано');
        return result;
    }

    for (let i = 0; i <= str.length - 1; i++) {
        currentNumb = romanMean(str.charAt(i));
        nextNumb = romanMean(str.charAt(i + 1));

        if (
            i === str.length - 1 &&
            currentNumb <= romanMean(str.charAt(i - 1))
        ) {
            result += currentNumb;
            return result;
        }

        if (currentNumb >= nextNumb) {
            result += currentNumb;
        }

        if (currentNumb < nextNumb) {
            dif = nextNumb - currentNumb;
            result += dif;
            i++;
        }
    }

    return result;
}

function romanMean(roman) {
    let res = 0;
    switch (roman) {
        case 'I':
            res = 1;
            return res;
            break;
        case 'V':
            res = 5;
            return res;
            break;
        case 'X':
            res = 10;
            return res;
            break;
        case 'L':
            res = 50;
            return res;
            break;
        case 'C':
            res = 100;
            return res;
            break;
        case 'D':
            res = 500;
            return res;
            break;
        case 'M':
            res = 1000;
            return res;
            break;
    }
}

function checkValidRoman(roman) {
    let counterI = 0;
    let counterV = 0;
    let counterX = 0;
    let counterL = 0;
    let counterC = 0;
    let counterD = 0;
    let counterM = 0;
    for (let i = 0; i < roman.length; i++) {
        switch (roman.charAt(i)) {
            case 'I':
                counterI++;
                if (counterI > 3) return null;
                break;
            case 'V':
                counterV++;
                if (counterV > 1) return null;
                break;
            case 'X':
                counterX++;
                if (counterX > 3) return null;
                break;
            case 'L':
                counterL++;
                if (counterL > 1) return null;
                break;
            case 'C':
                counterC++;
                if (counterC > 3) return null;
                break;
            case 'D':
                counterD++;
                if (counterD > 1) return null;
                break;
            case 'M':
                counterM++;
                if (counterM > 3) return null;
                break;
            default:
                return null;
        }
    }
    return true;
}
