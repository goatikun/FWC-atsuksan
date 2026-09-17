$(document).ready(function () {
    $("#try-me").on("click", function () {
        const leftText = $("#left").val();
        const rightText = $("#right").val();
        const operator = $("#operator").val();

        if (!/^\d+$/.test(leftText) || !/^\d+$/.test(rightText)) {
            alert("Error :(");
            return;
        }

        const left = Number(leftText);
        const right = Number(rightText);

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            return;
        }

        let result;

        if (operator === "+") result = left + right;
        if (operator === "-") result = left - right;
        if (operator === "*") result = left * right;
        if (operator === "/") result = left / right;
        if (operator === "%") result = left % right;

        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});