//Problem => https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    
    let count = 0;
    
    function getPalindrome(left, right){
        while(s[left] && s[right] && s[left] == s[right]){
            left--;
            right++;
            count++;
        }
    }
    
    for(let i=0; i<s.length; i++){
        // odd length check
        getPalindrome(i, i);
        
        // even length check
        if(s[i-1] == s[i]){
            getPalindrome(i-1, i);
        }
    }
    
    return count;
};