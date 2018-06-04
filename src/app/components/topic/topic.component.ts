import { TopicService } from './topic.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
private apiUrl = 'http://localhost:8080/lessons';
data: any = {};

  constructor(private topicService: TopicService) {
    this.topicService.getLessons()
      .subscribe(data => {
        console.log(data);
      });
    }
    ngOnInit() {
    }
  }