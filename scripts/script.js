// global variables
var add = document.getElementById("add");
var input = document.getElementById("userinput");
var list = document.querySelector("#list");
let totalTodos = document.querySelectorAll("li").length;
var error = document.getElementById("error");
var deletebtn


// functions
// checks how many characters have been entered into the input
function inputLength() {
    return input.value.length;
}

// if the input length is more than zero, a new list item can be added.
function addListAfterClick() {
    if (inputLength() > 1) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value = "";
    }
}


// Handles adding a new list item
add.addEventListener("click", function() {
let totalTodos = document.querySelector("#list").children.length;
if (totalTodos < 5) {
    addListAfterClick();
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



// Handles adding a new list item
// add.addEventListener("click", function() {
//     let totalTodos = document.querySelector("#list").children.length;
//     if (inputLength() > 1) {
//         if (totalTodos < 5) {
//             // create the list item
//             var li = document.createElement("li");
//             li.appendChild(document.createTextNode(input.value));
//             list.appendChild(li);
//             input.value = "";
//             console.log("click is working");
//         } else {
//             if (error.children.length === 0) {
//                 var errorText = document.createElement("p");
//                 errorText.appendChild(document.createTextNode("You can only have 5 todo items"));
//                 error.appendChild(errorText);
//                 error.style.backgroundColor = "red";
//             } else {
//                 console.log("there are too many todos");
//             }        
//         }
//     }
//     });