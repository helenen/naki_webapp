import { Pipe, PipeTransform } from "@angular/core";
import { Chapter } from "./chapter";

@Pipe({ name: "levelPipe" })
export class LevelPipe implements PipeTransform {
  transform(items: Chapter[], term: Chapter): Chapter[] {
    if (items.exemple == !null) {
      return items;
    }
  }
}
