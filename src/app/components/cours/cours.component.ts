import { LevelService } from './../level/level.service';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from './cours.service';
import { Component, OnInit } from "@angular/core";
import {Lesson} from "../../models/lesson";


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  chapterByLesson: Lesson;
  levelId: number;

  constructor(private coursService: CoursService, private route: ActivatedRoute, 
    private levelService: LevelService) { }

  
  ngOnInit() {

    this.levelId = +this.route.snapshot.params.id;

    this.route.params
    .map(params => params["id"])
    .subscribe((id) => {
      this.coursService
        .getCoursByLesson(id)
        .subscribe(chapterByLesson => {
        this.chapterByLesson = chapterByLesson;
        console.log(this.chapterByLesson);
      });
  });

}
}