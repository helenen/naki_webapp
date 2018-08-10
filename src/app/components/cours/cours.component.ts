import { LessonService } from './../lesson/lesson.service';
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
  chaptersByLesson: Lesson;
  lessonId: number;

  constructor(private coursService: CoursService, private route: ActivatedRoute, 
    private levelService: LevelService, private lessonService: LessonService ) { }

  
  ngOnInit() {

    // activatedRoutes ;  route récupéré dans le app.module donc il faut précisé lessonId à la place de id
    this.lessonId = +this.route.snapshot.params.lessonId;

    // met lesson.id dans la méthode coursByLesson
      this.route.params
      .map(params => params["id"])
      .subscribe((id) => {
        this.coursService
          .getCoursByLesson(this.lessonId)
          .subscribe(chaptersByLesson => {
          this.chaptersByLesson = chaptersByLesson;
            console.log(this.chaptersByLesson, "chapitres");
          });
      });
  }
}