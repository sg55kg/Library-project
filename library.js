(function () {
   let myLibrary = {

      library: [],

      init: function() {
         this.cacheDom();
         this.bindEvents();
         this.addTestBook();
         console.log(this.library);
      },

      cacheDom: function() {
         this.addButton = document.getElementById('open-add-div');
         this.addNewDiv = document.getElementById('add-new');
         this.submitBook = document.getElementById('submit-new-book');
         this.bookList = document.getElementById('book-list');
         this.testBook = document.getElementById('book');
         this.getTitle = document.getElementById('title');
         this.getAuthor = document.getElementById('author');
         this.getPages = document.getElementById('pages');
         this.getReadStatus = document.getElementById('read-status');
         this.getToggleRead = document.getElementsByClassName('toggle-read');
         this.overlay = document.getElementById('overlay');
      },

      displayAddDiv: function() {
         this.addNewDiv.style.display = 'flex';
         this.overlay.classList.add('active');
         this.getTitle.value = '';
         this.getAuthor.value = '';
         this.getPages.value = '';
         this.getReadStatus.unchecked;
      },

      //might remove this (addTestBook), just wanting to see if it works and if it helps me find a solution for the button
      addTestBook: function() {
         
         let bookDiv = this.testBook;
         bookDiv.classList.add('book');
         this.bookList.appendChild(bookDiv);

         let testTitle = document.getElementById('test-title');
         testTitle.innerText = 'Title: test2';
         let testAuthor = document.getElementById('test-author');
         testAuthor.innerText = 'Author: test';
         let testPages = document.getElementById('test-pages');
         testPages.innerText = 'Pages: 100';
         let testStatus = document.getElementById('test-status');
         testStatus.innerText = `Read Status: ${true}`
         let testBtn = document.getElementById('test-button');
         testBtn.innerText = 'Toggle Read';

         let newBook = new this.Book(testTitle, testAuthor, testPages, testStatus, testBtn);
         this.library.push(newBook);

         bookDiv.appendChild(testTitle);
         bookDiv.appendChild(testAuthor);
         bookDiv.appendChild(testPages);
         bookDiv.appendChild(testStatus);
         bookDiv.appendChild(testBtn);

      },

      addBook: function() {
         this.addNewDiv.style.display = 'none';
         this.overlay.classList.remove('active');
         this.getBookInfo();
      },

      changeReadStatus: function() {
         if(this.readStatus == 'true') {
            console.log('false');
         } else {
            console.log('true');
         }
      },

      bindEvents: function() {
         this.addButton.addEventListener('click', this.displayAddDiv.bind(this));
         this.submitBook.addEventListener('click', this.addBook.bind(this));
         
         for(let i = 0; i < this.getToggleRead.length; i++) {
            this.getToggleRead[i].addEventListener('click', this.changeReadStatus.bind(this))
         } //this works, but after bindEvents() is called at the beginning, I'm assuming that's it, so the loop stops
      },

      Book: function(title, author, pages, readStatus, toggleRead) {
         
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.readStatus = readStatus;
         this.toggleRead = toggleRead;
         
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
         readNode.innerText = `Read status: ${readStatus}`;

         let readBtn = document.createElement('button');
         readBtn.classList.add('toggle-read');
         readBtn.innerText = 'Toggle Read';
         // readBtn.addEventListener('click', () => {
         //    console.log('test');
         // })

         let newBook = new this.Book(title, author, pages, readStatus, readBtn);
         this.library.push(newBook);

         bookDiv.appendChild(titleNode);
         bookDiv.appendChild(authorNode);
         bookDiv.appendChild(pageNode);
         bookDiv.appendChild(readNode);
         bookDiv.appendChild(readBtn);

         console.log(this.library);

      },

   }

   myLibrary.init();

})();



