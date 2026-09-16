const leftInput = document.getElementById("left");
const operatorInput = document.getElementById("operator");
const rightInput = document.getElementById("right");
const tryMeButton = document.getElementById("try-me");

function isNonNegativeInteger(value) {
    return /^\d+$/.test(value);
}

tryMeButton.addEventListener("click", function () {
    const leftValue = leftInput.value;
    const rightValue = rightInput.value;
    const operator = operatorInput.value;

    if (!isNonNegativeInteger(leftValue) ||
        !isNonNegativeInteger(rightValue)) {
        alert("Error :(");
        return;
    }

    const leftNumber = Number(leftValue);
    const rightNumber = Number(rightValue);

    if ((operator === "/" || operator === "%") && rightNumber === 0) {
        alert("It’s over 9000!");
        return;
    }

    let result;

    if (operator === "+") {
        result = leftNumber + rightNumber;
    } else if (operator === "-") {
        result = leftNumber - rightNumber;
    } else if (operator === "*") {
        result = leftNumber * rightNumber;
    } else if (operator === "/") {
        result = leftNumber / rightNumber;
    } else if (operator === "%") {
        result = leftNumber % rightNumber;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);