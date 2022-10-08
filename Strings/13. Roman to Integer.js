//Problem => https://leetcode.com/problems/roman-to-integer/


/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let sum = 0;
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let i;
    for(i=s.length-1; i>0; i--){
        if(roman[s[i-1]] < roman[s[i]]){
            let total = roman[s[i]] - roman[s[i-1]];
            sum+=total;
            i--;
        }
        else {
            sum += roman[s[i]];
        }
    }
    
    if(i==0){
        sum += roman[s[0]];
    }
    
    return sum;
};