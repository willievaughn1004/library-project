// Variables

const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const submitButton = document.querySelector("#submit");

// Array of books
const myLibrary = [];

// Constructor function that creates a new book.
function Book(name, author, pages, read, display) {
  this.name = name;
  this.author = author;
  this.pages = `${pages} pages`;
  this.read = read;
  this.displayed = display;
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

  // Creates book and pushes into myLibrary arr
  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked,
    false
  );

  myLibrary.push(book);

  // Updates Displays
  addToDisplay();
}

function addToDisplay() {
  if (myLibrary.length === 0) {
    return;
  }

  for (let i = 0; i <= myLibrary.length; i++) {
    if (myLibrary[i].displayed) {
      myLibrary[i][data - index] = i;
      continue;
    } else {
      myLibrary[i].displayed === true;
    }

    // Creates card div and it's children
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-index", i);

    const bookName = document.createElement("p");
    bookName.textContent = myLibrary[i].name;
    card.append(bookName);

    const authorName = document.createElement("p");
    authorName.textContent = myLibrary[i].author;
    card.append(authorName);

    const pageCount = document.createElement("p");
    pageCount.textContent = myLibrary[i].pages;
    card.append(pageCount);

    const readButton = document.createElement("button");
    readButton.textContent = myLibrary[i].read ? "Read" : "Not read";
    readButton.style.backgroundColor =
      readButton.textContent === "Read" ? "lightblue" : "red";
    card.append(readButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    card.append(removeButton);

    // Adds event listener for card buttons
    readButton.addEventListener("click", function () {
      readButton.textContent =
        readButton.textContent === "Read" ? "Not read" : "Read";
      readButton.style.backgroundColor =
        readButton.textContent === "Read" ? "lightblue" : "red";
    });

    removeButton.addEventListener("click", function (event) {
      main.removeChild(card);
    });

    console.log(myLibrary);
    myLibrary[i].displayed = true;
    main.append(card);

    // Toggles Modal
    popModal();
  }
}

// Toggles the modal on and off
function popModal() {
  modal.classList.toggle("active");
  modalContent.classList.toggle("active");
}

// Event Listeners
addButton.addEventListener("click", popModal);
submitButton.addEventListener("click", addBookToLibrary);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    popModal();
  }
});
