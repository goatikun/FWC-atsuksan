$(document).ready(function () {
    const balloon = $("#balloon");
    let size = 200;
    let colorIndex = 0;
    const colors = ["red", "green", "blue"];

    function updateBalloon() {
        balloon.css({
            width: size,
            height: size,
            "background-color": colors[colorIndex]
        });
    }

    balloon.on("click", function () {
        size += 10;
        colorIndex = (colorIndex + 1) % 3;

        if (size > 420) {
            size = 200;
        }

        updateBalloon();
    });

    balloon.on("mouseleave", function () {
        size = Math.max(200, size - 5);
        colorIndex = (colorIndex - 1 + 3) % 3;
        updateBalloon();
    });
});