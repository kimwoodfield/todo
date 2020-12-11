const add = document.getElementById("add");
const userinput = document.querySelector(".userinput");
let count = 0;

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


// Checks how many todo list items are already in the list (currently only allow 5)
function checkTodoQty() {
    const todoQty = document.querySelectorAll("li").length;
    if (todoQty < 5) {
        return true;
    } else {
        console.log('You have too many todo list items');
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

    const container = document.createElement("div");
    document.getElementById("list").appendChild(container);

    count += 1;

    // Handles adding a new list item
    const newLI = document.createElement("LI");
    const textnode = document.createTextNode(userinput.value);
    newLI.appendChild(textnode);
    container.appendChild(newLI);
    newLI.setAttribute("id", "li-" + count);
    

    // Adds a new checkbox input to tick off a todo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function(e) {
        if (checkbox.checked) {
            newLI.classList = "complete"
        } else {
            newLI.classList = "";
        }
    });
    newLI.appendChild(checkbox);
    container.appendChild(checkbox);
    checkbox.setAttribute("id", count);

    // Handles editing a new list item
    const editButton = document.createElement("button");
    const editButtonIcon = document.createElement("icon");
    editButtonIcon.innerHTML = `<i class="fas fa-edit"></i>`;
    editButton.className = "edit";
    editButton.setAttribute("id", count);
    editButton.appendChild(editButtonIcon);
    container.appendChild(editButton); //check here
    editButton.onclick = function () {
        const p = prompt("Edit your todo");
        const newLI = document.getElementById("li-" + this.id);
        console.log(newLI);
        newLI.innerText = p;
      };

    // Handles deleting a new list item, edit and delete button
    const deleteButton = document.createElement("button");
    const deleteButtonIcon = document.createElement("icon");
    deleteButtonIcon.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function(e) {
        container.remove();
        checkbox.remove();
        newLI.remove();
        editButton.remove();
        deleteButton.remove();
    });
    deleteButton.appendChild(deleteButtonIcon);
    container.appendChild(deleteButton);
    deleteButton.setAttribute("id", count);
}