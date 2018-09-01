import { Chapter } from './../../models/chapter';
import { CoursDetailsService } from './cours-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../models/lesson';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {
  coursId: number;
  textByChapter: Chapter;
  exerciseByChapter: Chapter;
  lessonId: number;
  levelId: number;

  constructor(
    private route: ActivatedRoute,
    private coursDetailsService: CoursDetailsService
  ) {}
  ngOnInit() {
    this.coursId = +this.route.snapshot.params.coursId;
    this.lessonId = +this.route.snapshot.params.lessonId;
    this.levelId = +this.route.snapshot.params.levelId;

    this.route.params
      .map(params => params['id'])
      .mergeMap(id => this.coursDetailsService.getTextsByChapter(this.coursId))
      .subscribe(textByChapter => {
        this.textByChapter = textByChapter;
        console.log(this.textByChapter, 'texts par cours');
      });

    this.route.params
      .map(params => params['id'])
      .mergeMap(id =>
        this.coursDetailsService.getExercisesByChapter(this.coursId)
      )
      .subscribe(exerciseByChapter => {
        this.exerciseByChapter = exerciseByChapter;
        console.log(this.exerciseByChapter, 'exercise par cours');
      });
  }
}
