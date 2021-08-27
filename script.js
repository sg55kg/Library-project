class Book {
    constructor (title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}


const library = JSON.parse(localStorage.getItem("library")) || [];


//Cache DOM elements
    let bookList = document.getElementById('book-list');
    let newUserMessage = document.getElementById('new-user-message');
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
    newUserMessage.style.display = 'none';
    bookList.style.display = 'grid';
    overlay.classList.remove('active');
    addNewBook(); 
}


function addNewBook() {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookList.appendChild(bookDiv);

    const title = titleInput.value;
    let titleNode = document.createElement('p');
    titleNode.classList.add('title');
    titleNode.innerText = `Title: ${title}`;
    bookDiv.appendChild(titleNode);

    const author = authorInput.value;
    let authorNode = document.createElement('p');
    authorNode.classList.add('author');
    authorNode.innerText = `Author: ${author}`;
    bookDiv.appendChild(authorNode);

    const pages = pagesInput.value;
    let pageNode = document.createElement('p');
    pageNode.classList.add('page');
    pageNode.innerText = `Pages: ${pages}`;
    bookDiv.appendChild(pageNode);

    let status = getReadStatus.checked;
    let readNode = document.createElement('p');
    readNode.classList.add('read-text');
    readNode.classList.add('book-status');
    readNode.innerText = `${status == true ? 'Complete' : 'Unread'}`;
    bookDiv.appendChild(readNode);

    let readBtn = document.createElement('button');
    if(status == true) {
        readBtn.innerText = 'Mark unfinished';
        readBtn.classList.add('mark-unfinished');
    } else {
        readBtn.innerText = 'Mark finished';
        readBtn.classList.add('mark-finished');
    }
    bookDiv.appendChild(readBtn);

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerText = 'X';
    bookDiv.appendChild(removeBtn);


    let newBook = new Book(title, author, pages, status);
    library.push(newBook);
    localStorage.setItem("library", JSON.stringify(library));
    console.log(localStorage);


    readBtn.addEventListener('click', () => {
        if(newBook.readStatus == true) {
            readNode.innerText = `Unread`;
            readBtn.innerText = 'Mark finished';
            readBtn.classList.add('mark-finished');
            readBtn.classList.remove('mark-unfinished');
            newBook.readStatus = false;
            localStorage.setItem("library", JSON.stringify(library));

        } else {
            readNode.innerText = `Complete`;
            readBtn.innerText = 'Mark unfinished';
            readBtn.classList.add('mark-unfinished');
            readBtn.classList.remove('mark-finished');
            newBook.readStatus = true;
            localStorage.setItem("library", JSON.stringify(library));
        }
    });

    removeBtn.addEventListener('click', () => {
        library.splice(library.indexOf(newBook),1);
        bookList.removeChild(bookDiv);
        localStorage.setItem("library", JSON.stringify(library));
    })
}


function render() {
  JSON.parse(localStorage.getItem("library"));
  library.forEach((Book) => {
    bookList.style.display = 'grid';

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookList.appendChild(bookDiv);

    // const titles = JSON.parse(localStorage.getItem("title"));
    let titleNode = document.createElement('p');
    titleNode.innerText = `Title: ${Book.title}`;
    bookDiv.appendChild(titleNode);

    
    let authorNode = document.createElement('p');
    authorNode.innerText = `Author: ${Book.author}`;
    bookDiv.appendChild(authorNode);

    const pages = document.querySelector(".page");
    let pageNode = document.createElement('p');
    pageNode.innerText = `Pages: ${Book.pages}`;
    bookDiv.appendChild(pageNode);

    let status = document.querySelector(".book-status")
    let readNode = document.createElement('p');
    readNode.classList.add('read-text');
    readNode.innerText = `${status == true ? 'Complete' : 'Unread'}`;
    bookDiv.appendChild(readNode);

    let readBtn = document.createElement('button');
    if(status == true) {
        readBtn.innerText = 'Mark unfinished';
        readBtn.classList.add('mark-unfinished');
    } else {
        readBtn.innerText = 'Mark finished';
        readBtn.classList.add('mark-finished');
    }
    bookDiv.appendChild(readBtn);

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerText = 'X';
    bookDiv.appendChild(removeBtn);

    readBtn.addEventListener('click', () => {
        if(Book.readStatus == true) {
            readNode.innerText = `Unread`;
            readBtn.innerText = 'Mark finished';
            readBtn.classList.add('mark-finished');
            readBtn.classList.remove('mark-unfinished');
            Book.readStatus = false;
            localStorage.setItem("library", JSON.stringify(library));

        } else {
            readNode.innerText = `Complete`;
            readBtn.innerText = 'Mark unfinished';
            readBtn.classList.add('mark-unfinished');
            readBtn.classList.remove('mark-finished');
            Book.readStatus = true;
            localStorage.setItem("library", JSON.stringify(library));
        }
    });

    removeBtn.addEventListener('click', () => {
        library.splice(library.indexOf(Book),1);
        bookList.removeChild(bookDiv);
        localStorage.setItem("library", JSON.stringify(library));
    });
    
  });
}


newBookFormBtn.addEventListener('click', openNewBookForm);

submitBookBtn.addEventListener('click', submitNewBook);

render();



