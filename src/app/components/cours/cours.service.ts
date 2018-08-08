import { Chapter } from "./../../models/chapter";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";

import {GenerateURLService} from "../../general_service/generateUrl.service";

import { Observable } from "rxjs";


@Injectable()
export class CoursService {
 chapter: Chapter;


  constructor(private generateURLService: GenerateURLService) {}

  getchapters(): Observable<Chapter> {
    return this.generateURLService
      .get("/chapters")
      .map((res: Response) => res.json());
  }


}