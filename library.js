
let myLibrary = {

   library: [],

   Book: function(title, author, pages, readStatus) {
      
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.readStatus = readStatus;
      
   },


   init: function() {
      this.cacheDom();
      this.bindEvents();
   },


   cacheDom: function() {
      this.addButton = document.getElementById('open-add-div');
      this.addNewDiv = document.getElementById('add-new');
      this.submitBookBtn = document.getElementById('submit-new-book');
      this.bookList = document.getElementById('book-list');
      this.bookStatusText = document.getElementsByClassName('book-status');
      this.getTitle = document.getElementById('title');
      this.getAuthor = document.getElementById('author');
      this.getPages = document.getElementById('pages');
      this.getReadStatus = document.getElementById('read-status');
      this.toggleReadBtn = document.getElementsByClassName('toggle-read');
      this.removeBookBtn = document.getElementsByClassName('remove-book');
      this.overlay = document.getElementById('overlay');
   },


   bindEvents: function() {
      this.addButton.addEventListener('click', this.displayAddDiv.bind(this));
      this.submitBookBtn.addEventListener('click', this.addBook.bind(this));
      
      // for(let i = 0; i < this.toggleReadBtn.length; i++) {
      //    this.toggleReadBtn[i].addEventListener('click', this.changeReadStatus.bind(this))
      // } //this works, but after bindEvents() is called at the beginning, I'm assuming that's it, so the loop stops
   },


   displayAddDiv: function() {
      this.addNewDiv.style.display = 'flex';
      this.overlay.classList.add('active');
      this.getTitle.value = '';
      this.getAuthor.value = '';
      this.getPages.value = '';
      this.getReadStatus.unchecked;
   },


   addBook: function() {
      this.addNewDiv.style.display = 'none';
      this.overlay.classList.remove('active');
      this.getBookInfo();
   },

   readButton: function(e) {
      if(this.library[e.target.dataset.ID].read == true) { //undefined
         this.library[e.target.dataset.ID].read = false;
         //this.bookStatusText.innerText = 'Test';
         console.log(this.library);
      } else {
        // e.target.getReadStatus = true;
        // this.bookStatusText.innerText = 'Test';
         console.log(this.library);

      //          if (myLibrary[element.target.dataset.ID].read) { //If the book is "read" pressing the button change it to "not read"
      //   myLibrary[element.target.dataset.ID].read = false;
      // } else if (!(myLibrary[element.target.dataset.ID].read)) { //If the book is "not read" pressing the button change it to "read"
      //   myLibrary[element.target.dataset.ID].read = true;
      // };
      }
   },


   getBookInfo: function() {

      let bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      this.bookList.appendChild(bookDiv);

      const title = this.getTitle.value;
      let titleNode = document.createElement('p');
      titleNode.innerText = `Title: ${title}`;

      const author = this.getAuthor.value;
      let authorNode = document.createElement('p');
      authorNode.innerText = `Author: ${author}`;

      const pages = this.getPages.value;
      let pageNode = document.createElement('p');
      pageNode.innerText = `Pages: ${pages}`;

      const readStatus = this.getReadStatus.checked;
      let readNode = document.createElement('p');
      readNode.classList.add('book-status');
      readNode.innerText = `Read status: ${readStatus}`;

      let readBtn = document.createElement('button');
      readBtn.classList.add('toggle-read');
      readBtn.innerText = 'Toggle Read';
      readBtn.addEventListener('click', this.readButton.bind(this));

      let newBook = new this.Book(title, author, pages, readStatus);
      this.library.push(newBook);

      bookDiv.appendChild(titleNode);
      bookDiv.appendChild(authorNode);
      bookDiv.appendChild(pageNode);
      bookDiv.appendChild(readNode);
      bookDiv.appendChild(readBtn);

      console.log(this.library);

   },


   changeReadStatus: function(status) {
      if(status == true) {
         this.book.readStatus = false;
         console.log(this.library);
      } else {
         console.log('true');
      }
   },


   removeBook: function() {
      console.log('remove book test');
   },

}

myLibrary.init();





