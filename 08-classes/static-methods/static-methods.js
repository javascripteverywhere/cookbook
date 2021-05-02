class Book {
  constructor(isbn, title, author, publishedDate) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
  }

  static isEqual(book, otherBook) {
    if (book instanceof Book && otherBook instanceof Book) {
      // Books are deemed equal if their ISBNs match,
      // irrespective of dashes
      return (book.isbn.replaceAll('-','') === otherBook.isbn.replaceAll('-',''));
    }
    return false;
  }
}

const firstPrinting = new Book('978-3-16-148410-0', 'A.I. Is Not a Threat', 'Anne Droid',
 new Date(2010, 2, 2));
const secondPrinting = new Book('9783161484100', 'A.I. Is Not a Threat', 'A. Droid',
 new Date(2011, 2, 10));

console.log('Compare two books:');
console.log(firstPrinting);
console.log(secondPrinting);

// Compare the books with the static method
const sameBook = Book.isEqual(firstPrinting, secondPrinting);
console.log(`The equality test returns ${sameBook}`);


// This won't work, because isEqual isn't available in Book instances
// sameBook = firstPrinting.isEqual(firstPrinting, secondPrinting);
