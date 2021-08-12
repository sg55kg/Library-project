let addButton = document.getElementById('open-add-div');
let addNewDiv = document.getElementById('add-new');
let submitBook = document.getElementById('submit-new-book');
let myLibrary = [];

addButton.addEventListener('click', function() {
    addNewDiv.style.display = 'block';
})

submitBook.addEventListener('click', function() {
    addNewDiv.style.display = 'none';
})

function addBook() {
    
}