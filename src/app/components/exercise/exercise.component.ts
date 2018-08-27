import { Component, OnInit } from "@angular/core";
import { ExerciseService } from "./exercise.service";
import { Asset } from "../../models/asset";

@Component({
  selector: "app-exercise",
  templateUrl: "./exercise.component.html",
  styleUrls: ["./exercise.component.css"]
})
export class ExerciseComponent implements OnInit {
  assets: Asset;
  audio: any;
  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getAssets().subscribe((asset: Asset) => {
      this.assets = asset;
    });
    this.audio = new Audio();
    this.audio.src =
      "/Users/heleneniassy/Documents/helene/cours/titre pro/naki/naki_webapp/src/assets/lion.mp3";

    this.audio.play();
  }
}
