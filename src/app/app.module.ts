import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LevelComponent } from "./components/level/level.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ContactComponent } from "./components/contact/contact.component";

const appRoutes: Routes = [
  { path: "level", component: LevelComponent },
  { path: "contact", component: ContactComponent }
];
@NgModule({
  declarations: [AppComponent, LevelComponent, MenuComponent, ContactComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
