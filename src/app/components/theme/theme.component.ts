import { ThemeService } from "./theme.service";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";
import {Theme} from "../../models/theme";

@Component({
  selector: "app-theme",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.css"]
})
export class ThemeComponent implements OnInit {
  themes: Theme[];

  constructor(private themeService:ThemeService) {}
  ngOnInit() {
    this.themeService.getThemes().subscribe((theme: Theme[]) => {
      this.themes = theme;
    });
  }
}
