import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import {GenerateURLService} from "../../general_service/generateUrl.service";
import { Observable } from "rxjs";
import { Asset } from "./../../models/asset";

@Injectable()
export class ExerciseService {
    private apiUrl = environment.api_Url;
    asset = Asset;

    constructor(private http: Http, private generateURLService: GenerateURLService) {}

    getAssets(): Observable<Asset> {

        return this.http
          .get(this.apiUrl + "/assets")
          .map((res: Response) => res.json());
      }
}