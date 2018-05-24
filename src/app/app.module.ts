import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LevelComponent } from "./components/level/level.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ParcoursComponent } from "./components/parcours/parcours.component";

const Routes: Route[] = [
  { path: "", component: LevelComponent },
  { path: "parcours", component: ParcoursComponent },
  { path: "contact", component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuComponent,
    ContactComponent,
    ParcoursComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(Routes), NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
