import { LevelService } from "./../level/level.service";
import { GenerateURLService } from "./../../general_service/generateUrl.service";
import { Lesson } from "./../../models/lesson";
import { Chapter } from "./../../models/chapter";
import { Component, OnInit } from "@angular/core";
import { LessonService } from "./lesson.service";
import { ActivatedRoute } from "@angular/router";
import { LocalStorage } from "ngx-store";


@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"]
})
export class LessonComponent implements OnInit {
  chapters: Chapter[];
  @LocalStorage()lessons: Lesson;

constructor(private lessonService: LessonService,  private route: ActivatedRoute, 
  private generateURLService: GenerateURLService, private levelService: LevelService) {}
  ngOnInit() {
      this.route.params
    .map(params => params["id"])
    .subscribe((id) => {
      this.lessonService
        .getLessons()
        .subscribe(lesson => {
          this.lessons = lesson;
        this.lessonService.lessonId = lesson.id;
      });
    });
  }
}