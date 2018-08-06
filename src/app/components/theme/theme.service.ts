import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {GenerateURLService} from "../../general_service/generateUrl.service";

@Injectable()
export class ThemeService {
  constructor(private http: Http, private generateURLService: GenerateURLService) {}
  getThemes() {
    return this.generateURLService
       .get("/themes")
       .map((res: Response) => res.json());
    }
    // getThemesById(id: number) {
    //   return this.generateURLService
    //      .get("/themes", id)
    //      .map((res: Response) => res.json());
    //   }
}
