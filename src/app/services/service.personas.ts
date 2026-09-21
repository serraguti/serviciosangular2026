import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import axios from "axios";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersonas {
    //PARA RECUPERAR LOS DATOS, DEBEMOS UTILIZAR EL OBJETO
    //HttpClient EN LA INYECCION
    constructor(private _http: HttpClient){}
    //SI DEVOLVEMOS LA PETICION, SE UTILIZA UN TIPADO 
    //DE Observable<any>
    getPersonas(): Observable<any>{
        let urlApi = environment.urlApiPersonas;
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

    async getPersonasPromiseAsync(): Promise<Persona[]>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return firstValueFrom(this._http.get<Persona[]>(urlApi));        
    }
    
    getPersonasAxios(): Promise<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        let promise = new Promise(function(resolve){
            axios.get(urlApi).then((response) => {
                resolve(response.data);
            })
        })   
        return promise;  
    }
    
    async getPersonasAxiosAsync(): Promise<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        //CAPTURAR LA RESPUESTA
        const response = await axios.get(urlApi);
        return response.data;
    }
}