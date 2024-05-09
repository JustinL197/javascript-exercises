const repeatString = function(string, number) {
    if (number < 0){
        return 'ERROR'
    }else if (number == 0){
        return ''
    }else{
        let word = string;
        for (let i = 0; i < (number - 1); i++){
            word += string;
        }
        return word;
    }
};

// Do not edit below this line
module.exports = repeatString;
