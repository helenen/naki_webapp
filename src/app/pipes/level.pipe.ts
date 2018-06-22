import { Pipe, PipeTransform } from "@angular/core";
import { Chapter } from "./chapter";

@Pipe({
  name: "levelPipe",
  pure: false
})
export class LevelPipe implements PipeTransform {
  transform(items: Chapter[]): Chapter[] {
    return items.filter(item => item.exemple);
  }
}
