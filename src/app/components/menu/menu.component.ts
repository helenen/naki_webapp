import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from "@angular/material";



@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {}
}
