// Palindrome Checker
function palindrome(str) {
    str = str.toLowerCase();
    let ret = "";
    for (let i = 0; i < str.length; i++) {
        if ((str[i]>='a' && str[i]<='z') || (str[i]>='0' && str[i] <= '9')) {
            ret = ret+str[i];
        }
    }
    for (let i = 0; i < ret.length; i++) {
        if (ret[i] != ret[ret.length-i-1]) return false;
    }
    return true;
}

// Roman Numeral Converter
const Roman_Num = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];
function convertToRoman(num) {
    let ret = "";
    while (num>0) {
        for (let i = 0; i < Roman_Num.length; i++) {
            if (Roman_Num[i][1] <= num) {
                num-=Roman_Num[i][1];
                ret = ret + Roman_Num[i][0];
                break;
            }
        }
    }
    return ret;
}

// Caesars Cipher
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rot13(str) {
    let ret = "";
    for (let i = 0; i < str.length; i++) {
        let ind = 0;
        for (let j = 0; j < 26; j++) {
            if (alphabet[j] == str[i]) ind=j;
        }
        if (str[i]>='A' && str[i]<='M') {
            ret = ret + alphabet[ind+13];
        }
        else if (str[i]>'M' && str[i]<='Z') {
            ret = ret + alphabet[ind-13];
        }
        else ret = ret + str[i];
    }
    return ret;
}

// Telephone Number Validator
const correctNumber = ["555-555-5555","(555)555-5555","(555) 555-5555","555 555 5555","5555555555"];
function judge(str1, str2, ind) {
    if (str1.length != str2.length) return false;
    for (let i = 0; i < ind; i++) {
        if (str1[i] != str2[i]) return false;
    }
    for (let i = ind; i < str1.length; i++) {
        if (str1[i] == str2[i]) continue;
        if (str1[i]>='0' && str1[i]<='9' && str2[i]>='0' && str2[i]<='9') continue;
        return false;
    }
    return true;
}
function telephoneCheck(str) {
    let tag=0;
    for (let i = 0; i < correctNumber.length; i++) {
        let str1 = correctNumber[i];
        let str2 = "1" + correctNumber[i];
        let str3 = "1 " + correctNumber[i];
        if (judge(str,str1,0) || judge(str,str2,1) || judge(str,str3,2)) tag=1;
    }
    if (tag==0) return false;
    else return true;
}


// Cash Register
const unit = [["PENNY", 0.01],["NICKEL", 0.05],["DIME", 0.1],["QUARTER", 0.25],["ONE", 1],["FIVE", 5],["TEN", 10],["TWENTY", 20],["ONE HUNDRED", 100]];
function checkCashRegister(price, cash, cid) {
    let money = cash-price;
    let ret = {
        status: "OPEN",
        change: []
    };
    let original_cid = [];
    for (let i = 0; i < cid.length; i++) original_cid.push([cid[i][0],cid[i][1]]);

    for (let i = unit.length-1; i >= 0; i--) {
        let cnt = 0;
        while (true) {
            if (money >= unit[i][1] && cid[i][1] >= unit[i][1]) {
                money = Math.round((money-unit[i][1])*1000)/1000;
                cid[i][1] = Math.round((cid[i][1]-unit[i][1])*1000)/1000;
                cnt++;
            }
            else break;
        }
        if (cnt > 0) ret.change.push([unit[i][0],cnt*unit[i][1]]);
    }
    if (money > 0) {
        return {
            status: "INSUFFICIENT_FUNDS", 
            change: []
        }
    }
    let tag=1;
    for (let i = 0; i < cid.length; i++) {
        if (cid[i][1]!=0) tag=0;
    }
    if (tag) {
        return {
            status: "CLOSED",
            change: original_cid
        }
    }
    return ret;
}

export {palindrome, convertToRoman, rot13, telephoneCheck, checkCashRegister};