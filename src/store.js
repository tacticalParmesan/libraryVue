import { reactive } from "vue";

export class Book {
  constructor(title, author, year, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

export const Library = reactive({
  books: [
    new Book("Dune", "Frank Herbert", 1979, 876, false),
    new Book("1984", "George Orwell", 1948, 287, true),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281, false),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180, false),
    new Book("Pride and Prejudice", "Jane Austen", 1813, 238, false),
    new Book("Jane Eyre", "Charlotte Bronte", 1847, 382, false),
    new Book("Wuthering Heights", "Emily Bronte", 1847, 342, false),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951, 277, false),
    new Book("The Hobbit", "J.R.R. Tolkien", 1937, 310, false),
    new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954, 1178, false),
    new Book(
      "One Hundred Years of Solitude",
      "Gabriel Garcia Marquez",
      1967,
      417,
      false
    ),
    new Book("Beloved", "Toni Morrison", 1987, 321, false),
    new Book("The Picture of Dorian Gray", "Oscar Wilde", 1890, 245, false),
    new Book("Moby Dick", "Herman Melville", 1851, 656, false),
    new Book("War and Peace", "Leo Tolstoy", 1869, 1392, false),
    new Book("Anna Karenina", "Leo Tolstoy", 1877, 864, false),
    new Book("David Copperfield", "Charles Dickens", 1850, 655, false),
    new Book("Great Expectations", "Charles Dickens", 1861, 384, false),
    new Book("The Trial", "Franz Kafka", 1925, 252, true),
    new Book("The Metamorphosis", "Franz Kafka", 1915, 62, true),
    new Book("Ulysses", "James Joyce", 1922, 730, true),
  ],

  add(book) {
    this.books.push(book);
  },

  remove(book) {
    this.books.splice(
      this.books.findIndex((b) => b === book),
      1
    );
  },
});
