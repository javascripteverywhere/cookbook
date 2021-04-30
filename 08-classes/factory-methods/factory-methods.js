class Book {
  constructor(title, firstName, lastName) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static createSequel(prevBook, title) {
    return new Book(title, prevBook.firstName, prevBook.lastName);
  }
}

// Create a Book with the usual constructor
const book = new Book("Good Design", "Polly", "Morfissim");
console.log('First book:');
console.log(book);

// Create a sequel with a factory method
const sequel = Book.createSequel(book, "Even Gooder Design");
console.log('Sequel:');
console.log(sequel);