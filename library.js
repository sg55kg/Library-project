let addButton = document.getElementById('open-add-div');
let addNewDiv = document.getElementById('add-new');
let submitBook = document.getElementById('submit-new-book');
let getTitle = document.getElementById('title');
let getAuthor = document.getElementById('author');
let getPages = document.getElementById('pages');
let getReadStatus = document.getElementById('read-status');

let myLibrary = [];

addButton.addEventListener('click', function() {
    addNewDiv.style.display = 'flex';
})

submitBook.addEventListener('click', function() {
    addNewDiv.style.display = 'none';
    addBook();
    console.log(Book);
})

function addBook() {
    //need to add a newBook method that will add a new item to the array
    //myLibrary.push(newBook);
}

class Book {
    constructor (
        title = 'Test',
        author = 'Test',
        pages = '27',
        readStatus = true
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

const getBookInfo = () => {
    const title = getTitle.value;
    const author = getAuthor.value;
    const pages = getPages.value;
    const readStatus = getReadStatus.checked;
}

console.log(myLibrary);