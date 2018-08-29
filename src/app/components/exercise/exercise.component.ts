import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { Asset } from '../../models/asset';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  assets: Asset[];
  audio: any;
  exerciseId: number;
  assetsByExercise: Asset[];
  buttonVisible: boolean = false;
  coursId: number;
  lessonId: number;
  levelsId: number;
  levelId: number;
  assetImage: Asset;
  assetTranscription: Asset;
  assetSound: Asset;
  assetImageVisible: boolean = false;

  constructor(
    private exerciseService: ExerciseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.coursId = +this.route.snapshot.params.coursId;
    this.lessonId = +this.route.snapshot.params.lessonId;
    this.levelId = +this.route.snapshot.params.levelId;
    this.exerciseId = +this.route.snapshot.params.exerciseId;

    this.route.params.map(params => params['id']).subscribe(id => {
      this.exerciseService
        .getAssetsByExercise(this.exerciseId)
        .subscribe(assetsByExercise => {
          this.assetsByExercise = assetsByExercise;
          this.assetImage = this.assetsByExercise.find(
            asset => asset.type === 'image'
          );
          this.assetSound = this.assetsByExercise.find(
            asset => asset.type === 'sound'
          );
          this.assetTranscription = this.assetsByExercise.find(
            asset => asset.transcription
          );
        });
    });

    const changeButtonVisible = setTimeout(() => {
      this.buttonVisible = true;
    }, 3000);
  }

  switchImage() {
    this.buttonVisible = false;
    this.assetImageVisible = true;
  }
}
