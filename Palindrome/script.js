/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (number) {
    // stringify the input
    const str = JSON.stringify(number)
    //split each element of number up by index so we can compare
    const individualChar = str.split("")
    // Find the middle of the array, this will determine the number of checks we have to do
    let middle = individualChar.length/2
    // Set a marker at the end of the array to tell the loop where to compare at the end of the array
    let iMax = individualChar.length - 1
    // An empty array to hold the results of each check
    let result = []
    // If negative number, always return false
    if (individualChar === "-") {
        return false;
    } else {
        // Loop through the array, "middle" times
        for (let i = 0; i <= middle; i++) {
            // Make a comparison and if they match, push "true" to the result array
            if (individualChar[i] === individualChar[iMax - i]) {
                result.push("true")    
            // Make a comparison and if they don't match, push "false" to the result array
             } else if (individualChar[i] !== individualChar[iMax - i]) {
                result.push("false")   
             } 
        }
        // filter through the result array to look for "false"'s 
        const verdict = result.filter(item => item === "false")
        // If we find there are any false's, verdict is "Not a Palindrome"
        if (verdict[0] === "false") { 
            return false
        // If there are no "false"'s present, we have a Palindrome!
        } else {
            return true
        }
    }
};
// Evoke function to test in console
isPalindrome(12321)

// Submission to LeetCode accepted on August 18, 2020