class HECMAthlon {

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

    getMaxValue(input) {
        
        input.reduce((acc, value) => {
    
        return acc > value ? acc : value;
        
        });
    }

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

    getGreaterThan(input) {
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


    fizzBuzz() {
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

const hECMAthlonRefactor = new HECMAthlon();

const init = _ => {
    const maxValueBtn = document.querySelector(".maxValue__btn");
    const greaterThanBtn = document.querySelector(".greaterThan__btn");
    const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

    const maxValueInput = document.querySelector(".maxValue__input");
    const greaterThanInput = document.querySelector(".greaterThan__input");
    const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

    const maxValueRoot = document.querySelector(".maxValue__container");
    const greaterThanRoot = document.querySelector(".greaterThan__container");
    const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

    maxValueBtn.addEventListener("click", () => {
        let maxValue = getOutput(hECMAthlonRefactor.getMaxValue(maxValueInput.value));
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener("click", () => {
        let greaterValues = getOutput(hECMAthlonRefactor.getGreaterThan(greaterThanInput.value));
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener("click", () => {
        let result = getOutput(hECMAthlonRefactor.fizzBuzz(fizzBuzzInput.value));
        logResult(fizzBuzzRoot, result);
    });
}


const getOutput = output => ["The function starts", ...output, "The function ends"]

  /* const returnValue = ["The function starts"]; 

    for(let i = 0; i < output.length; i++){

         returnValue.push(output[i]); 
         
   returnValue.push("The function ends");
    return returnValue;
} */

const logResult = (place, values) => {
    while(place.firstChild) {
        place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
        place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
}

init();
