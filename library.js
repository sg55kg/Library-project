(function () {
   let myLibrary = {

      library: [
         // this.addTestBook,
      ],

      init: function() {
         this.cacheDom();
         this.bindEvents();
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
         this.getToggleRead = document.querySelectorAll('toggle-read');
      },

      displayAddDiv: function() {
         this.addNewDiv.style.display = 'flex';
         this.getTitle.value = '';
         this.getAuthor.value = '';
         this.getPages.value = '';
         this.getReadStatus.unchecked;
      },

      // addTestBook: function() {
      //    this.testBook = new Book(title, author, pages, readStatus, readBtn);
      // },

      addBook: function() {
         this.addNewDiv.style.display = 'none';
         this.getBookInfo();
      },

      changeReadStatus: function() {
         if(this.readStatus == 'true') {
            console.log('false');
         }
      },

      bindEvents: function() {
         this.addButton.addEventListener('click', this.displayAddDiv.bind(this));
         this.submitBook.addEventListener('click', this.addBook.bind(this));
         
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



