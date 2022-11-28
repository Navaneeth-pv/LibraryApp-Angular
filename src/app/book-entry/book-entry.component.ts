import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  image=""
  author=""
  price=""
  releasedYear=""
  distributer=""
  language=""




  readValues=()=>
  {
    let data:any={
      "title":this.title,
      "image":this.image,
      "author":this.author,
      "price":this.price,
      "releasedYear":this.releasedYear,
      "distributer":this.distributer,
      "language":this.language
  
      

    }
    console.log(data)
  }






}
