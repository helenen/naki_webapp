import { Lesson } from './../../models/lesson';
import { LevelPipe } from "./../../pipes/level.pipe";
import { Chapter } from "./../../pipes/chapter";
import { Component, OnInit } from "@angular/core";
import { LessonService } from "./lesson.service";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"]
})
export class LessonComponent implements OnInit {
  chapters: Chapter[];
  lessons: Lesson[];

  constructor(private lessonService: LessonService, private levelPipe: LevelPipe) {}
  ngOnInit() {
    this.lessonService.getchapters().subscribe((data: Chapter[]) => {
      this.chapters = data;
    });
    this.lessonService.getchapterByLesson().subscribe((data: Lesson[]) => {
      this.lessons = data;
    });
  }

}
