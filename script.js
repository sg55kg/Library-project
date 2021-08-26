class Book {
    constructor (title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}


const library = [];


//Cache DOM elements
    let bookList = document.getElementById('book-list');
    let newBookFormBtn = document.getElementById('open-add-div');
    let newBookForm = document.getElementById('add-new');
    let submitBookBtn = document.getElementById('submit-new-book');
    let overlay = document.getElementById('overlay');
    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let pagesInput = document.getElementById('pages');
    let getReadStatus = document.getElementById('read-status');



function openNewBookForm() {
    newBookForm.style.display = 'flex';
    overlay.classList.add('active');
    newBookForm.reset();
}


function submitNewBook() {
    event.preventDefault();
    newBookForm.style.display = 'none';
    overlay.classList.remove('active');
    addNewBook(); 
}


function addNewBook() {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookList.appendChild(bookDiv);

    const title = titleInput.value;
    let titleNode = document.createElement('p');
    titleNode.innerText = `Title: ${title}`;
    bookDiv.appendChild(titleNode);

    const author = authorInput.value;
    let authorNode = document.createElement('p');
    authorNode.innerText = `Author: ${author}`;
    bookDiv.appendChild(authorNode);

    const pages = pagesInput.value;
    let pageNode = document.createElement('p');
    pageNode.innerText = `Pages: ${pages}`;
    bookDiv.appendChild(pageNode);

    let status = getReadStatus.checked;
    let readNode = document.createElement('p');
    readNode.classList.add('book-status');
    readNode.innerText = `Read status: ${status == true ? 'finished' : 'unfinished'}`;
    bookDiv.appendChild(readNode);

    let readBtn = document.createElement('button');
    readBtn.classList.add('toggle-read');
    if(status == true) {
        readBtn.innerText = 'Mark unfinished';
        readBtn.style.backgroundColor = 'green';
    } else {
        readBtn.innerText = 'Mark finished';
        readBtn.style.backgroundColor = 'red';
    }
    bookDiv.appendChild(readBtn);

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerText = 'X';
    bookDiv.appendChild(removeBtn);


    let newBook = new Book(title, author, pages, status);
    library.push(newBook);


    readBtn.addEventListener('click', () => {
        if(newBook.readStatus == true) {
            readNode.innerText = `Read status: unfinished`;
            readBtn.innerText = 'Mark finished'
            readBtn.style.backgroundColor = 'red';
            newBook.readStatus = false;

        } else {
            readNode.innerText = `Read status: finished`;
            readBtn.innerText = 'Mark unfinished';
            readBtn.style.backgroundColor = 'green';
            newBook.readStatus = true;

        }
    });

    removeBtn.addEventListener('click', () => {
        library.splice(library.indexOf(newBook),1);
        bookList.removeChild(bookDiv);
        console.log(library);
    })
}


newBookFormBtn.addEventListener('click', openNewBookForm);

submitBookBtn.addEventListener('click', submitNewBook);



