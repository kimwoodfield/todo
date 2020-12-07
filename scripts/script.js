const add = document.getElementById("add");
const userinput = document.querySelector("input");

add.addEventListener("click", checkInputLength);


// Returns the length of the input
function checkInputLength(userinput) {
    console.log(userinput.length);
}


// Clears the input
function clearUserInput() {
    userinput.value = '';
}


// Creates a new list item with an edit and delete button attached.
function addListItems() {

    // Handles creating a new list item
    const newLI = document.createElement("LI");
    const textnode = document.createTextNode(userinput.value);
    newLI.appendChild(textnode);
    document.getElementById("list").appendChild(newLI);

    // Handles creating a new edit button for the list item
    const editButton = document.createElement("button");
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    document.getElementById("list").appendChild(editButton);

    // Handles creating a new delete button for the list item
    const deleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);
    document.getElementById("list").appendChild(deleteButton);

}