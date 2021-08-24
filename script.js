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
        if(this.readStatus == true) {
            this.readStatus = false;
        } else {
            this.readStatus = true;
        }
    }
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

    
}


function addBookToLibrary() {

}

//cacheDom();


newBookFormBtn.addEventListener('click', openNewBookForm);

submitBookBtn.addEventListener('click', submitNewBook);
