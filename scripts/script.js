// global variables
var add = document.getElementById("add");
var input = document.getElementById("userinput");
var list = document.querySelector("#list");
let totalTodos = document.querySelectorAll("li").length;
var error = document.getElementById("error");
let deletebtn = document.querySelector(".del-btn");


// Functions //

// checks how many characters have been entered into the input
function inputLength() {
    return input.value.length;
}

// if the input length is more than zero, a new list item can be added.
function addItemAfterClick() {
    if (inputLength() > 1) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value = "";
        li.className = "list-item"
        var deletebtn = document.createElement("button");
        deletebtn.appendChild(document.createTextNode("Delete"));
        list.appendChild(deletebtn);
        deletebtn.className = "del-btn";
    }
}

// Checks the list item types of the todo list
function checkList() {
    let listItems = document.querySelector("#list").children;
    let listItemLength = document.querySelector("#list").children.length;
    let liElems = [];
    // creates a variable of 'listItem' for each item in the list
    if (listItemLength === 0) {
        return liElems.length;
    } else {
        for (let listItem of listItems) {
            if (listItem.tagName === "LI") {
                liElems.push("listItem");
            }
        }
        return liElems.length;
    }
}

// Removes an item from the list





// Event Listeners

add.addEventListener("click", function() {
let totalTodos = document.querySelector("#list").children.length;
if (checkList() < 5) {
    addItemAfterClick();
} else {
    if (error.children.length === 0) {
        var errorText = document.createElement("p");
        errorText.appendChild(document.createTextNode("You can only have 5 todo items"));
        error.appendChild(errorText);
        error.style.backgroundColor = "red";
    } else {
            console.log("there are too many todos");
        }        
    }
});


// Features to add -
// Must be able to add items to the list - COMPLETE
// Must be able to delete items from the list
// Must be able to change items on the list
// Must be able to delete ALL items from the list