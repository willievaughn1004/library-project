function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${name} by ${author}, ${pages}, ${read}`
    }
}

const boobBook = new Book("Getting Bitches", "Willie Vaughn", 345, "I read it");

console.log(boobBook.info())
