class Book {
    constructor (
        title = 'Test',
        author = 'Test2',
        pages = '50',
        readStatus = true,

    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    deleteBook() {

    }

    toggleRead(e) {
        console.log("test");
    } //readBtn.addEventListener('click', toggleRead.bind(this)); (maybe insert somewhere in here)
}


const library = [];


//function cacheDom() {
    let bookList = document.getElementById('book-list');
    let newBookFormBtn = document.getElementById('open-add-div');
    let newBookForm = document.getElementById('add-new');
    let submitBookBtn = document.getElementById('submit-new-book');
    let overlay = document.getElementById('overlay');
    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let pagesInput = document.getElementById('pages');
    let getReadStatus = document.getElementById('read-status');
//}


function openNewBookForm() {
    newBookForm.style.display = 'flex';
    overlay.classList.add('active');
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    getReadStatus.unchecked; //change this to a form in html file and then I can just use reset()
}


function submitNewBook() {
    newBookForm.style.display = 'none';
    overlay.classList.remove('active');
    displayNewBook();
    addBookToLibrary();
    
}


function displayNewBook() {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookList.appendChild(bookDiv);

    const title = titleInput.value;
    let titleNode = document.createElement('p');
    titleNode.innerText = `Title: ${title}`;

    const author = authorInput.value;
    let authorNode = document.createElement('p');
    authorNode.innerText = `Author: ${author}`;

    const pages = pagesInput.value;
    let pageNode = document.createElement('p');
    pageNode.innerText = `Pages: ${pages}`;

    const status = getReadStatus.checked;
    let readNode = document.createElement('p');
    readNode.classList.add('book-status');
    readNode.innerText = `Read status: ${status}`;

    let readBtn = document.createElement('button');
    readBtn.classList.add('toggle-read');
    readBtn.innerText = 'Toggle Read';
    readBtn.addEventListener('click', toggleRead.bind(this));

    let newBook = new Book(title, author, pages, status);
    library.push(newBook);

    bookDiv.appendChild(titleNode);
    bookDiv.appendChild(authorNode);
    bookDiv.appendChild(pageNode);
    bookDiv.appendChild(readNode);
    bookDiv.appendChild(readBtn);

}


function addBookToLibrary() {


}


newBookFormBtn.addEventListener('click', openNewBookForm);

submitBookBtn.addEventListener('click', submitNewBook);
