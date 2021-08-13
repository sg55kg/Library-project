let addButton = document.getElementById('open-add-div');
let addNewDiv = document.getElementById('add-new');
let submitBook = document.getElementById('submit-new-book');
let myLibrary = [];

addButton.addEventListener('click', function() {
    addNewDiv.style.display = 'flex';
})

submitBook.addEventListener('click', function() {
    addNewDiv.style.display = 'none';
    addBook();
})

let book;

function addBook() {
    myLibrary.push(book);
}