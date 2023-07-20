// Variables

const main = document.querySelector('#main');
const addButton = document.querySelector('.add-book')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector(".modal-content")

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = `${pages} pages`;
    this.read = read;
}

function makeBook(name, author, pages, read) {
    const book = new Book(name, author, pages, read);

    const card = document.createElement('div');
    card.setAttribute("class", "card");

    const bookName = document.createElement('p');
    bookName.textContent = book.name;
    card.append(bookName);

    const authorName = document.createElement('p');
    authorName.textContent = book.author;
    card.append(authorName);

    const pageCount = document.createElement('p');
    pageCount.textContent = book.pages;
    card.append(pageCount);

    const readButton = document.createElement('button')
    readButton.textContent = "Read";
    card.append(readButton);

    const removeButton = document.createElement('button')
    removeButton.textContent = "Remove";
    card.append(removeButton);

    main.append(card)

    return;
}

function addBookToLibrary(num) {
    for (let i = 0; i < num; i++) {
        makeBook("Willie", "Vaughn", 100, "Yes");   
    }
}

function addBookToLibr() {
    modal.classList.toggle("active");
    modalContent.classList.toggle("active")
}

addBookToLibrary(10);

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.toggle("active")
        modalContent.classList.toggle("active")
    }
})

addButton.addEventListener("click", addBookToLibr)