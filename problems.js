//1
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
    let optionsArray = [];

    function innerGenerateParentheses(
        currentString,
        openBrackets,
        closedBrackets,
        maximumPairs
    ) {
        // If the current string is full
        if (currentString.length == maximumPairs * 2) {
            // Add it to the list of possibilities
            optionsArray.push(currentString);
            return;
        }

        // If more brackets can be opened
        if (openBrackets < maximumPairs) {
            // Call the function again, with one additional bracket opened
            innerGenerateParentheses(
                currentString + '(',
                openBrackets + 1,
                closedBrackets,
                maximumPairs
            );
        }

        // If open brackets still need to be closed
        if (closedBrackets < openBrackets) {
            // Call the function again, with one additional bracket closed
            innerGenerateParentheses(
                currentString + ')',
                openBrackets,
                closedBrackets + 1,
                maximumPairs
            );
        }
    }

    // Recursively obtain all possibilties
    innerGenerateParentheses('', 0, 0, n);
    return optionsArray;
}

//2
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    
    const walk = (temp, start) => {
      result.push(temp)
      
      // pick on from the rest, then go on
      for(let i = start; i < nums.length;i++) {
        walk(temp.concat(nums[i]), i + 1)
      }
    }

    walk([], 0)
    return result
};
//3
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(number, reverse){
    reverse = parseFloat(number.toString().split('').reverse().join(''));
    if(number === reverse){
        return true;
    };
    if(number != reverse){
        return false;
    };
};