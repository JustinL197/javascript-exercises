const reverseString = function(word) {
    wordArray = [];
    reverseWord =''
    for (let i = word.length - 1; i >= 0; i--){
        wordArray.push(word[i]);
    }

    for (let i = 0; i < wordArray.length; i++){
        reverseWord += wordArray[i];
    }

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
