import { Exercise } from "./../../models/exercise";
import { Component, OnInit } from "@angular/core";
import { ExerciseService } from "./exercise.service";
import { Asset } from "../../models/asset";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-exercise",
  templateUrl: "./exercise.component.html",
  styleUrls: ["./exercise.component.css"]
})
export class ExerciseComponent implements OnInit {
  assets: Asset;
  audio: any;
  exerciseId: number;
  assetsByExercise: Exercise;

  constructor(
    private exerciseService: ExerciseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.params.exerciseId;

    this.route.params.map(params => params["id"]).subscribe(id => {
      this.exerciseService
        .getAssetsByExercise(this.exerciseId)
        .subscribe(assetsByExercise => {
          this.assetsByExercise = assetsByExercise;
          console.log(this.assetsByExercise, "po");
        });
    });
    this.audio = new Audio();
    this.audio.src = this.audio.play();
  }
}
