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

function addTask(text, addToTop) {
    const task = document.createElement("div");
    task.textContent = text;

    task.addEventListener("click", function () {
        if (confirm("Do you want to remove this task?")) {
            task.remove();
            saveTasks();
        }
    });

    const list = document.getElementById("ft_list");

    if (addToTop) {
        list.prepend(task);
    } else {
        list.appendChild(task);
    }
}

function newTask() {
    const text = prompt("New task:");

    if (text !== null && text.trim() !== "") {
        addTask(text.trim(), true);
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    const items = document.getElementById("ft_list").children;

    for (const item of items) {
        tasks.push(item.textContent);
    }

    setCookie("todo", tasks);
}

window.addEventListener("load", function () {
    const tasks = getCookie("todo");

    for (const task of tasks) {
        addTask(task, false);
    }
});