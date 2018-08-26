import { Chapter } from "./../../models/chapter";
import { LessonService } from "./../lesson/lesson.service";
import { LevelService } from "./../level/level.service";
import { ActivatedRoute } from "@angular/router";
import { CoursService } from "./cours.service";
import { Component, OnInit } from "@angular/core";
import { Lesson } from "../../models/lesson";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: "app-cours",
  templateUrl: "./cours.component.html",
  styleUrls: ["./cours.component.css"]
})
export class CoursComponent implements OnInit {
  chaptersByLesson: Lesson[] = [];
  //textsByChapter: Chapter;
  lessonId: number;
  chapterId: number;
  mapChaptersByLesson: number;

  constructor(
    private coursService: CoursService,
    private route: ActivatedRoute,
    private levelService: LevelService,
    private lessonService: LessonService
  ) {}

  ngOnInit() {
    // met lesson.id dans la méthode coursByLesson
    this.route.params
      .map(params => params["lessonId"])
      .mergeMap(id => this.coursService.getCoursByLesson(id))
      .subscribe(chaptersByLesson => {
        this.chaptersByLesson = chaptersByLesson;
        console.log(this.chaptersByLesson, "chapitres par lesson dans cours");
      });

    // this.mapChaptersByLesson = this.chaptersByLesson.filter(chapter => {
    //   return this.chapterId === chapter.id;
    // });

    // this.chaptersByLesson.forEach(chapter => {
    //   this.chapterId = chapter.id;
    // });
  }
}
