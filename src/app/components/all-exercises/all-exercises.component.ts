import { AllExercisesService } from './all-exercises.service';
import { Exercise } from './../../models/exercise';
import { Component, OnInit } from '@angular/core';
import { GenerateURLService } from '../../general_service/generateUrl.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.css']
})
export class AllExercisesComponent implements OnInit {
  exercises: Exercise[];
  coursId: number;
  lessonId: number;
  levelId: number;

  constructor(
    private route: ActivatedRoute,
    private allExercisesService: AllExercisesService
  ) {}

  ngOnInit() {
    this.coursId = +this.route.snapshot.params.coursId;
    this.lessonId = +this.route.snapshot.params.lessonId;
    this.levelId = +this.route.snapshot.params.levelId;

    this.allExercisesService
      .getExercises()
      .subscribe((exercise: Exercise[]) => {
        this.exercises = exercise;
        console.log(this.exercises, 'exo');
      });
  }
}
