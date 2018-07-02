import { Pipe, PipeTransform } from "@angular/core";
import { Chapter } from "../models/chapter";

@Pipe({
  name: "levelPipe",
  pure: false
})
export class LevelPipe implements PipeTransform {
  transform(items: Chapter[]): Chapter[] {
    if (!items) {
      return items;
    } else {
      return items.filter(item => item.exemple);
    }
  }
}
