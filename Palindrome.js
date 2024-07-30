// 2. Check for Palindrome
// Question: Determine if a given string is a palindrome.

function isPalindrome(str){
    let rev = ''
    for (let i = str.length -1 ; i >= 0 ; i--){
         rev =  rev +  str[i]
    }
    if(rev == str){
        return  true
    }else{
        return false
    }
    
}


function isPalindrome(str){
    const rev = str.split("").reverse().join("")
    return str === rev
}



console.log(isPalindrome("racecar"));