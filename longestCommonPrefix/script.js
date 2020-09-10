
let strs = ["flower", "flow", "dog"]
// let strs = ["aaaa", "aaaarr"]

const longestCommonPrefix = function(strs) {
    let commonPrefix = []
    if (strs.length === 0) {
        return ''
    }
    if (strs.length === 1) {
        return strs.join('')
    }
    let firstSplitWord = strs[0].split('')
            console.log('firstSplitWord is ', firstSplitWord)    
            console.log('firstSplitWord.length is ', firstSplitWord.length)    
        for (let i = 0; i < firstSplitWord.length; i++) {
        let checkArr = strs[i].split('')
                console.log('checkArr is ', checkArr)
        console.log('checkArr[i] is ', checkArr[i])
        if (checkArr[i] === firstSplitWord[i]) {
            commonPrefix.push(firstSplitWord[i])
            console.log('commonPrefix is currently ', commonPrefix)
        }
    }
console.log(commonPrefix.join('')) 
return commonPrefix.join('') 
}

longestCommonPrefix(strs)



// 