
(function () {
   let myLibrary = {
      library: [],
      init: function() {
         this.cacheDom();
         this.bindEvents();
      },
      cacheDom: function() {
         this.addButton = document.getElementById('open-add-div');
         this.addNewDiv = document.getElementById('add-new');
         this.submitBook = document.getElementById('submit-new-book');
         this.bookList = document.getElementById('book-list');
         this.getTitle = document.getElementById('title');
         this.getAuthor = document.getElementById('author');
         this.getPages = document.getElementById('pages');
         this.getReadStatus = document.getElementById('read-status');
      },
      displayAddDiv: function() {
         this.addNewDiv.style.display = 'flex';
      },
      addBook: function() {
         this.addNewDiv.style.display = 'none';
         this.getBookInfo();
      },
      bindEvents: function() {
         this.addButton.addEventListener('click', this.displayAddDiv.bind(this));
         this.submitBook.addEventListener('click', this.addBook.bind(this));
      },
      getBookInfo: function() {
         let book = function(title, author, pages, readStatus) {
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.readStatus = readStatus;
         }
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
         readNode.innerText = `Read status: ${readStatus}`;

         let newBook = new book(title, author, pages, readStatus);
         this.library.push(newBook);

         bookDiv.appendChild(titleNode);
         bookDiv.appendChild(authorNode);
         bookDiv.appendChild(pageNode);
         bookDiv.appendChild(readNode);
      },
   }
   myLibrary.init();
})();



