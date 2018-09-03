import { AllLessonservice } from './all-lessons.service';
import { Component, OnInit } from '@angular/core';
import { Lesson } from './../../models/lesson';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-lessons',
  templateUrl: './all-lessons.component.html',
  styleUrls: ['./all-lessons.component.css']
})
export class AllLessonsComponent implements OnInit {
  lessons: Lesson[];
  levelId: number;
  coursId: number;
  constructor(
    private allLessonservice: AllLessonservice,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.levelId = +this.route.snapshot.params.levelId;
    this.coursId = +this.route.snapshot.params.coursId;

    this.allLessonservice.getLessons().subscribe((lessons: Lesson[]) => {
      this.lessons = lessons;
      console.log(this.lessons, 'exo');
    });
  }
}
