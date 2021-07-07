import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  currentBook: Book = new Book(0, '', new Date, '', '');

  constructor(private _activatedRoute: ActivatedRoute, private _bookService:BookService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.currentBook = this._bookService.getBookById(parseInt(params.get("id") || "0")) || new Book(0, '', new Date, '', '');
    });
  }
}
