function lowerCaseWords(mixedArray){

    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)){
            reject("Please enter in an array input")
        }else{
            const filteredWords = mixedArray.filter(item => typeof item == 'string').map(word => word.toLowerCase())
            resolve(filteredWords)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
console.log(lowerCaseWords(mixedArray))


