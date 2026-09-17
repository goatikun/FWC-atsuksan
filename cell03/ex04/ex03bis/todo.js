function setCookie(name, value) {
    document.cookie =
        `${name}=${encodeURIComponent(JSON.stringify(value))}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === name) {
            return JSON.parse(decodeURIComponent(parts.slice(1).join("=")));
        }
    }

    return [];
}

function saveTasks() {
    const tasks = $("#ft_list").children().map(function () {
        return $(this).text();
    }).get();

    setCookie("todo", tasks);
}

function addTask(text, isNew) {
    const task = $("<div>").text(text);

    task.on("click", function () {
        if (confirm("Remove this task?")) {
            $(this).remove();
            saveTasks();
        }
    });

    if (isNew) {
        $("#ft_list").prepend(task);
    } else {
        $("#ft_list").append(task);
    }
}

function newTask() {
    const text = prompt("New task:");

    if (text !== null && text.trim() !== "") {
        addTask(text.trim(), true);
        saveTasks();
    }
}

$(document).ready(function () {
    $("#new-task").on("click", newTask);

    getCookie("todo").forEach(function (task) {
        addTask(task, false);
    });
});