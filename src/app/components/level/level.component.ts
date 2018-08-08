import { Component, OnInit } from "@angular/core";
import { LevelService } from "./level.service";
import {Level} from "../../models/level";
import { ActivatedRoute } from "@angular/router";
import { LocalStorage } from "ngx-store";


@Component({
  selector: "app-level",
  templateUrl: "./level.component.html",
  styleUrls: ["./level.component.css"]
})
export class LevelComponent implements OnInit {
  @LocalStorage()levels: Level;
  lessonsByLevel: Level;
  
  constructor(private levelService: LevelService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  
    this.route.params
  .map(params => params["id"])
  .subscribe((id) => {
    this.levelService
      .getLevels()
      .subscribe(level => {
        this.levels = level;
      });
    });
  }
    
}
