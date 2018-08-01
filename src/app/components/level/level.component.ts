import { Component, OnInit } from "@angular/core";
import { LevelService } from "./level.service";
import {Level} from "../../models/level";

@Component({
  selector: "app-level",
  templateUrl: "./level.component.html",
  styleUrls: ["./level.component.css"]
})
export class LevelComponent implements OnInit {
  levels: Level[];
  constructor(private levelService: LevelService) {
  }

  ngOnInit() {
    this.levelService.getLevels().subscribe((level: Level[]) => {
      this.levels = level;
    });
  }
}
