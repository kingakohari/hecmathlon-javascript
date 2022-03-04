import hECMAthlon from "./main.js"

function init() {
    var maxValueBtn = document.querySelector(".maxValue__btn");
    var greaterThanBtn = document.querySelector(".greaterThan__btn");
    var fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

    var maxValueInput = document.querySelector(".maxValue__input");
    var greaterThanInput = document.querySelector(".greaterThan__input");
    var fizzBuzzInput = document.querySelector(".fizzBuzz__input");

    var maxValueRoot = document.querySelector(".maxValue__container");
    var greaterThanRoot = document.querySelector(".greaterThan__container");
    var fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

    maxValueBtn.addEventListener('click', () => {
        var maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener('click', () => {
        var greaterValues = getOutput(hECMAthlon.getGreaterThan(greaterThanInput.value));
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener('click', () => {
        var result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
        logResult(fizzBuzzRoot, result);
    });
}

function getOutput(output) {
    var returnValue = ["The function starts"];
    for(var i = 0; i < output.length; i++){
        returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue;
}

function logResult(place, values){
    while(place.firstChild) {
        place.firstChild.remove();
    }
    for (var j = 0; j < values.length; j++) {
        place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
}

init();
