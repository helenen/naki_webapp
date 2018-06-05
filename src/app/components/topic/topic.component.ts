import { TopicService } from "./topic.service";
import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"]
})
export class TopicComponent implements OnInit {
  private apiUrl = "http://localhost:8080/lessons";

  constructor(private topicService: TopicService) {}
  ngOnInit() {
    this.topicService.getLessons().subscribe(data => {
      console.log(data);
    });
    this.topicService.getCours().subscribe(data => {
      console.log(data);
    });
    this.topicService.getExercies().subscribe(data => {
      console.log(data);
    });
  }
}
