import {Component, Inject, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {BookService} from "../../book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../book";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
// @ts-ignore
  book: Book = {}
  id: number=0;
  // sub: Subscription;
  constructor(private bookService: BookService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef: MatDialogRef<DetailBookComponent>) {
    this.bookService.findBookByID(data.id).subscribe(data =>{
      this.book.id = data.id;
      this.book.author = data.author;
      this.book.description = data.description;
      this.book.title = data.title;
    })
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate([''])
  }
}
