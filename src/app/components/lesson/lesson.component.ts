import { Lesson } from "./../../models/lesson";
import { Chapter } from "./../../models/chapter";
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


constructor(private lessonService: LessonService, /*private levelPipe: LevelPipe*/) {}
  ngOnInit() {
    this.lessonService.getchapterByLesson(1).subscribe((lesson: Lesson[]) => {
      this.lessons = lesson;
    });
  }
}