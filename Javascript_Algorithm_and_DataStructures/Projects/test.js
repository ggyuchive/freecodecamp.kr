import {palindrome, convertToRoman, rot13, telephoneCheck, checkCashRegister} from './project.js';

console.log(
    palindrome("eye")
);
console.log(
    convertToRoman(36)
);
console.log(
    rot13("SERR PBQR PNZC")
);
console.log(
    telephoneCheck("555-555-5555")
);
console.log(
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);