//1.Book Class - Represent a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    static displayBooks() {
        const storeBooks = Store.getBooks();

        const books = storeBooks;

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="" class= "btn btn-danger btn-sm delete">Delete</a></td>
        `;

        list.appendChild(row);
    }

    static ClearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.book-form');
        container.insertBefore(div, form);


        //vanish alert in 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    static deleteBook(el) {
        // document.querySelector('#book-list tr').remove(); it is also working

        // Alternate:
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

class Store{
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBooks(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            books.splice(index, 1)
        });

        localStorage.setItem('books', JSON.stringify(books))
    }
}

// 4.event - Display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

  // 5.event - Add book
  document.querySelector('.book-form').addEventListener('submit', (e) => {

    e.preventDefault(); //prevent actual submit. 

    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill in all fields", "danger");
    } else {
        const book = new Book(title, author, isbn);
        // console.log(book);

        //add book to UI 
        UI.addBookToList(book);

        //add to local storage
        Store.addBook(book);

        //show success message
        UI.showAlert("Book added", 'success');

        UI.ClearFields(); //clear all the fiels when submit button is clicked.
    }


})

 // 6.event - Remove book
 document.querySelector('#book-list').addEventListener('click', (e) => {
    e.preventDefault()

    //remove from UI
    UI.deleteBook(e.target);

    //remove book from local storage
    Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);

    //show success message
    UI.showAlert("Deleted Successfully", 'success');
})
