import { Component, OnInit } from "@angular/core";
import { Chapter } from "./../../models/chapter";
import { LessonService } from "./lesson.service";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"]
})
export class LessonComponent implements OnInit {
  chapters: Chapter[];

  constructor(private lessonService: LessonService) {
    this.lessonService.getchapters().subscribe((data: Chapter[]) => {
      this.chapters = data;
    });


  ngOnInit() {
  }

}
