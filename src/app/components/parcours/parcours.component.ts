import { Component, OnInit } from '@angular/core';
import {ParcoursService} from './parcours.service';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/cours';

  constructor(private parcourservice: ParcoursService) {
    this.parcourservice.getCours()
      .subscribe(data => {
        console.log(data);
      });
    }

  ngOnInit() {
  }

}
