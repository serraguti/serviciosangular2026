import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Plantilla } from "../models/plantilla";

@Injectable()
export class ServicePlantilla{
    constructor(private _http: HttpClient){}

    getFunciones(): Observable<Array<string>>{
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/funciones";
        return this._http.get<Array<string>>(url + request);
    }

    //METODO CON PROMESA MEDIANTE FETCH
    getPlantillaFuncion(funcion: string): Promise<Array<Plantilla>>{
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafuncion/" + funcion;
        const plantilla = fetch(url + request).then(response => response.json());
        return plantilla;
    }

    getPlantillaFunciones(funciones: Array<string>): Observable<Array<Plantilla>>{
        //?funcion=Enfermera&funcion=Enfermero
        let datos = "";
        for (var f of funciones){
            datos += "funcion=" + f + "&";
        }
        //ELIMINAMOS EL ULTIMO CARACTER &
        datos = datos.substring(0, datos.length -1);
        let request = "api/plantilla/plantillafunciones?" + datos;
        let url = environment.urlApiPlantilla + request;
        return this._http.get<Array<Plantilla>>(url);
    }
}