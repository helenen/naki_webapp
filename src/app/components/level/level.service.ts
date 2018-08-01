import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";
import {GenerateURLService} from "../../general_service/generateUrl.service";



@Injectable()
export class LevelService {
  constructor( private generateURLService: GenerateURLService) {}

  getLevels() {
    return this.generateURLService
      .get( "/levels")
      .map((res: Response) => res.json());
    }
  }

  
  // getExercises() {
  //   return this.http
  //     .get(this.apiUrl + "/exercises")
  //     .map((res: Response) => res.json());
  // }
  // getchapters() {
  //   return this.http
  //     .get(this.apiUrl + "/chapters")
  //     .map((res: Response) => res.json());
  // }

