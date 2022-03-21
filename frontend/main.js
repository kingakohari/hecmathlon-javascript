export class HECMAthlon {

    /*  getMaxValue: function (input) {
        const maxValues = input.split(",");
        let maxValue = 0;
        for(let i = 0; i < maxValues.length; i++){
            const tempValue = parseInt(maxValues[i]);
            if (tempValue > maxValue) {
                maxValue = tempValue;
            }
        }
        return [maxValue];
    }, */

    getMaxValue = (input) => input.reduce((acc, value) => {
    
        return acc > value ? acc : value;
        
    });

/*  getGreaterThan: function (input) {
        const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const greaterNums = [];
        for(let j = 0; j < greaterValues.length; j++) {
            if (greaterValues[j] > parseInt(input)) {
                greaterNums.push(greaterValues[j]);
            }
        }
        return greaterNums;
    }, */

    getGreaterThan = (input) => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter( n => n > parseInt(input));
    };


/*  fizzBuzz: function (input) {
        const output = [];
        for (let k = 1; k <= parseInt(input); k++) {
            let value;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            output.push(value);
        }
        return output; */


    fizzBuzz = () => {
        return [...Array(100).keys()].map((_, k) => k + 1)
        .map(k => (k % 3 === 0 && k % 5 === 0)
                  ? "FizzBuzz"
                  : (k % 3 === 0)
                  ? "Fizz"
                  : (k % 5 === 0)
                  ? "Buzz"
                  : k)
        .join("\n")
    }       
}       
      
