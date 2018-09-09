import { ThemeService } from './../theme/theme.service';
import { LevelService } from './../level/level.service';
import { GenerateURLService } from './../../general_service/generateUrl.service';
import { Lesson } from './../../models/lesson';
import { Chapter } from './../../models/chapter';
import { Component, OnInit } from '@angular/core';
import { LessonService } from './lesson.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from 'ngx-store';
import { Theme } from '../../models/theme';
import { Level } from '../../models/level';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  levelId: number;
  lessonsByLevel: Level;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.levelId = +this.route.snapshot.params.id;

    this.route.params.map(params => params['id']).subscribe(id => {
      this.lessonService
        .getLessonsByLevel(this.levelId)
        .subscribe(lessonsBylevel => {
          this.lessonsByLevel = lessonsBylevel;
        });
    });
  }
}
