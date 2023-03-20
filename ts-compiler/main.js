const book = new Object();

Object.defineProperty(book, "title", {
  value: "The title",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(book, "author", {
  value: "The author",
  writable: false,
  enumerable: true,
  configurable: true,
});

book.author = "Mark";

console.log(book);
