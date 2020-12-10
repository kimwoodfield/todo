const add = document.getElementById("add");
const userinput = document.querySelector("input");

add.addEventListener("click", addTodo);


// Adds the list item, delete and edit button to the todo list
function addTodo() {
    if (checkInputLength() === true) {
        addTodoItems();
        clearUserInput();
    } else {
        console.log('Please enter a character.');
    }
}

// Returns true or false depending if the value input is greater than zero
function checkInputLength() {
    if (userinput.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

// Checks the value of the input
function checkInputValue() {
    console.log(userinput.value);
}

// Clears the input
function clearUserInput() {
    userinput.value = '';
}

// Handles creating a new todo item
function addTodoItems() {
    // Handles adding a new list item
    const newLI = document.createElement("LI");
    const textnode = document.createTextNode(userinput.value);
    newLI.appendChild(textnode);
    document.getElementById("list").appendChild(newLI);

    // Handles editing a new list item 
    const editButton = document.createElement("button");
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    document.getElementById("list").appendChild(editButton);

    // Handles deleting a new list item, edit and delete button
    const deleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("Delete");
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function(e) {
        newLI.remove();
        editButton.remove();
        deleteButton.remove();
    });
    deleteButton.appendChild(deleteButtonText);
    document.getElementById("list").appendChild(deleteButton);
}