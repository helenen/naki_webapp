import { Component, OnInit } from "@angular/core";
import { LevelService } from "./level.service";

@Component({
  selector: "app-level",
  templateUrl: "./level.component.html",
  styleUrls: ["./level.component.css"]
})
export class LevelComponent implements OnInit {
  constructor(private levelService: LevelService) {
    this.levelService.getCours().subscribe(data => {
      console.log(data);
    });
    this.levelService.getExercises().subscribe(data => {
      console.log(data);
    });
    this.levelService.getSubThemes().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
