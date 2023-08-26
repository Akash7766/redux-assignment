export const bookData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationDate: "1960-07-11",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    publicationDate: "1949-06-08",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationDate: "1813-01-28",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publicationDate: "1925-04-10",
  },
  // Add more books here
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publicationDate: "1997-06-26",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "1937-09-21",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
    publicationDate: "1932-02-17",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    genre: "Gothic",
    publicationDate: "1847-10-16",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-Age",
    publicationDate: "1951-07-16",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    genre: "Adventure",
    publicationDate: "1954-09-17",
  },
];

export interface IBooks {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
