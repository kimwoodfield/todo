const add = document.getElementById("add");
const userinput = document.querySelector("input");

add.addEventListener("click", addTodo);


// Adds the list item, delete and edit button to the todo list
function addTodo() {
    if (userinput.value.length > 0) {
        addTodoItems();
        clearUserInput();
    } else {
        console.log('Please enter a character.');
    }
}



// Returns the length of the input
function checkInputLength() {
    console.log(userinput.value.length);
}

// Checks the input value
function checkInputValue() {
    console.log(userinput.value);
}


// Clears the input
function clearUserInput() {
    userinput.value = '';
}

// Handles creating a new todo item
function addTodoItems() {
    // List Item
    const newLI = document.createElement("LI");
    const textnode = document.createTextNode(userinput.value);
    newLI.appendChild(textnode);
    document.getElementById("list").appendChild(newLI);

    // Edit Button
    const editButton = document.createElement("button");
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    document.getElementById("list").appendChild(editButton);

    // Delete Button
    const deleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("Delete");
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function(e) {
        newLI.remove();
        editButton.remove();
        deleteButton.remove();
    })
    deleteButton.appendChild(deleteButtonText);
    document.getElementById("list").appendChild(deleteButton);
}