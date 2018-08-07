import { LevelService } from "./../level/level.service";
import { ThemeService } from "./theme.service";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";
import {Theme} from "../../models/theme";
import { ActivatedRoute } from "@angular/router";
import { LessonService } from "../lesson/lesson.service";


@Component({
  selector: "app-theme",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.css"]
})
export class ThemeComponent implements OnInit {
  themes: Theme[];
  levelId: number;
  lessonId: number;

  constructor(private themeService:ThemeService, private levelService: LevelService,
    private lessonService: LessonService, private route: ActivatedRoute) {

    }
  ngOnInit() {
    this.themeService.getThemes().subscribe((theme: Theme[]) => {
      this.themes = theme;
    });
    this.levelId = +this.route.snapshot.params.id;
    // this.lessonService.lessonId = +this.route.snapshot.params.id;

}

}