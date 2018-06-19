import { LevelPipe } from "./../../pipes/level.pipe";
import { Chapter } from "./../../pipes/chapter";
import { Component, OnInit } from "@angular/core";
import { LessonService } from "./lesson.service";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"],
  providers: [ Chapter ]
})
export class LessonComponent implements OnInit {
  chapter: Chapter[];

  constructor(private lessonService: LessonService, private levelPipe: LevelPipe) { 
    this.lessonService.getchapters().subscribe(chapter => {
    console.log(chapter);
  });}

  ngOnInit() {
  }

}
