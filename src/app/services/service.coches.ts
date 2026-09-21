import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Coche } from "../models/coche";

@Injectable()
export class ServiceCoches{
    constructor(private _http: HttpClient){}

    getCochesObservable(): Observable<any> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        return this._http.get(url + request);
    }

    async getCochesAsync(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}