import { HECMAthlon } from "./main.js"

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

    maxValueBtn.addEventListener('click', () => {
        let maxValue = getOutput(hECMAthlonRefactor.getMaxValue(maxValueInput.value));
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener('click', () => {
        let greaterValues = getOutput(hECMAthlonRefactor.getGreaterThan(greaterThanInput.value));
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener('click', () => {
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

function logResult(place, values){
    while(place.firstChild) {
        place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
        place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
}

init();
