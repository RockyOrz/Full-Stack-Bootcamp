import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList = [
    new Book(1, 'The Runner', new Date(1997), '', ''),
    new Book(2, 'The Cooker', new Date(1996), '', ''),
    new Book(3, 'The Singer', new Date(2012), '', '')
  ];

  constructor() { }

  getBooks():Array<Book> {
    return this.bookList;
  }

  getBookById(id: number): Book | undefined {
    return this.bookList.find((book) => {
      return book.id == id;
    });
  }
}
