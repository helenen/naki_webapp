import { LevelPipe } from "./../../pipes/level.pipe";
import { Chapter } from "../../models/chapter";
import { Component, OnInit } from "@angular/core";
import { LessonService } from "./lesson.service";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"]
})
export class LessonComponent implements OnInit {
  chapters;

  constructor(private lessonService: LessonService, private levelPipe: LevelPipe) {}
  ngOnInit() {
    this.lessonService.getchapters().subscribe(chapters => {
      this.chapters = chapters;
    });
  }

}

