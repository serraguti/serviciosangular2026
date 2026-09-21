import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    //PARA RECUPERAR LOS DATOS, DEBEMOS UTILIZAR EL OBJETO
    //HttpClient EN LA INYECCION
    constructor(private _http: HttpClient){}
    //SI DEVOLVEMOS LA PETICION, SE UTILIZA UN TIPADO 
    //DE Observable<any>
    getPersonas(): Observable<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        //DEVOLVEMOS LA PETICION DIRECTAMENTE PARA QUE LA TRATE EL COMPONENT
        return this._http.get(urlApi);
    }

    getPersonasPromise(): Promise<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        let promise = new Promise((resolve) => {
            //AQUI DEBEMOS EXTRAER LOS DATOS DE LA PETICION GET DEL API
            this._http.get(urlApi).subscribe(response => {
                console.log("Aqui tenemos las personas");
                console.log(response);
                resolve(response);
            })
        })
        return promise;
    }
    
}