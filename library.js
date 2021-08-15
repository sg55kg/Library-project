let addButton = document.getElementById('open-add-div');
let addNewDiv = document.getElementById('add-new');
let submitBook = document.getElementById('submit-new-book');
let bookList = document.getElementById('book-list');
//let inputField = document.getElementsByClassName('.input');
let getTitle = document.getElementById('title');
let getAuthor = document.getElementById('author');
let getPages = document.getElementById('pages');
let getReadStatus = document.getElementById('read-status');

let myLibrary = [];

addButton.addEventListener('click', function() {
    addNewDiv.style.display = 'flex';
    //inputField.reset();
    // need to clear the input fields when this loads

})

submitBook.addEventListener('click', function() {
    addNewDiv.style.display = 'none';
    getBookInfo();
    console.log(myLibrary);
})


function book(title, author, pages, readStatus) {
    
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    
}

const getBookInfo = () => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookList.appendChild(bookDiv);

    const title = getTitle.value;
    let titleNode = document.createElement('p');
    titleNode.innerText = `Title: ${title}`;

    const author = getAuthor.value;
    let authorNode = document.createElement('p');
    authorNode.innerText = `Author: ${author}`;

    const pages = getPages.value;
    let pageNode = document.createElement('p');
    pageNode.innerText = `Pages: ${pages}`;

    const readStatus = getReadStatus.checked;
    let readNode = document.createElement('p');
    readNode.innerText = `Complete? ${readStatus}`;

    let newBook = new book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    bookDiv.appendChild(titleNode);
    bookDiv.appendChild(authorNode);
    bookDiv.appendChild(pageNode);
    bookDiv.appendChild(readNode);

}

