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
    console.log(myLibrary);
})

function addBook() {
    //this works and gets user input and console logs the library array
    getBookInfo();
}

function Book(title, author, pages, readStatus) {
    
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    
}

const getBookInfo = () => {
    const title = getTitle.value;
    const author = getAuthor.value;
    const pages = getPages.value;
    const readStatus = getReadStatus.checked;

    let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}


console.log(myLibrary);