const hECMAthlon = {

    getMaxValue: function (input) {
        var maxValues = input.split(",");
        var maxValue = 0;
        for(var i = 0; i < maxValues.length; i++){
            var tempValue = parseInt(maxValues[i]);
            if (tempValue > maxValue) {
                maxValue = tempValue;
            }
        }
        return [maxValue];
    },

    getGreaterThan: function (input) {
        var greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var greaterNums = [];
        for(var j = 0; j < greaterValues.length; j++) {
            if (greaterValues[j] > parseInt(input)) {
                greaterNums.push(greaterValues[j]);
            }
        }
        return greaterNums;
    },

    fizzBuzz: function (input) {
        var output = [];
        for (var k = 1; k <= parseInt(input); k++) {
            var value;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            output.push(value);
        }
        return output;
    }
}

export default hECMAthlon;