import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../book.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateBookComponent} from "../create-book/create-book.component";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {DeleteBookComponent} from "../delete-book/delete-book.component";
import {DetailBookComponent} from "../detail-book/detail-book.component";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListBook();
  }
  getListBook(){
    this.bookService.getAllBook().subscribe(bookList =>{
      this.books = bookList;
    })
  }

  openDialogDetail(id: number) {
    const dialogRef = this.dialog.open(DetailBookComponent, {
      data: {
        id: id
      },
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteBookComponent, {
      data : {
        id: id
      },
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getListBook();
    });
  }
}
