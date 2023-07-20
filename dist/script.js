// Variables

const main = document.querySelector('#main');
const addButton = document.querySelector('.add-book')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector(".modal-content")

const submitButton = document.querySelector("#submit");


// Array of books
let myLibrary = [];

// Constructor function that creates a new book.
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = `${pages} pages`;
    this.read = read;
}

// Loops through library and displays the books within.
function addBookToLibrary() {

    // Prevents submit from reloading page
    event.preventDefault();

    // Collects form data
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const pagesInput = document.querySelector("#pages");
    const readInput = document.querySelector("#read");

    // Creates book
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);

    // Creates card div
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
    readButton.textContent = (book.read) ? "Read" : "Not read";
    readButton.style.backgroundColor = (readButton.textContent === "Read") ? 'lightblue' : 'lightred';
    card.append(readButton);

    const removeButton = document.createElement('button')
    removeButton.textContent = "Remove";
    card.append(removeButton);

    // Adds card to main container
    main.append(card)

    // Turns off modal
    popModal();

    // Adds event listener for card buttons
    readButton.addEventListener('click', function() {
        readButton.textContent = (readButton.textContent === "Read") ? "Not read" : "Read";
        readButton.style.backgroundColor = (readButton.textContent === "Read") ? 'lightblue' : 'red';
    })

    removeButton.addEventListener('click', function() {
        main.removeChild(card);
    })
}

function popModal() {
    modal.classList.toggle("active");
    modalContent.classList.toggle("active")
}

addButton.addEventListener("click", popModal);
submitButton.addEventListener("click", addBookToLibrary)

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        popModal()
    }
});