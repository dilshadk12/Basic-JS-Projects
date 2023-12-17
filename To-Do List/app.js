const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {

    if (inputBox.value === '') {    // if input box is empty then
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  // it will add the li under the html ul
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // code for x
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();  //  save function will be executed on every data added
}



// check uncheck and delete by x
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");   // add the checked classname if not there if there then will remove it
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();    // parent will be li
        saveData();  // also when the task is unchecked/deleted
    }
}, false);


// store the task in browser so it does not disappear after refresh

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// display the data when we open the window freshly

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();