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

  constructor(
    private exerciseService: ExerciseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.exerciseId = +this.route.snapshot.params.exerciseId;
    this.audio = new Audio();
    this.audio.src = this.audio.play();
  }
}
