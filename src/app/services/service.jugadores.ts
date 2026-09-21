import { Injectable } from "@angular/core";
import { Jugador } from "../models/jugador";

@Injectable()
export class ServiceJugadores {
    //CREAMOS UN METODO PARA DEVOLVER LOS JUGADORES
    getJugadores(): Promise<Array<Jugador>> {
        let path: string = "./assets/jugadores2.json";
        return fetch(path).then(res => res.json())
        .then((data: any[]) => {
            let aux: Array<Jugador>;
            aux = data.map(j => new Jugador
                (j.nombre, j.posicion, j.edad, j.imagen))
            console.log("Leyendo datos")
            return aux;
        })
    }

    async getJugadoresAsync(): Promise<Array<Jugador>> {
        let path: string = "./assets/jugadores2.json";
        //ESTA PETICION ES ASINCRONA, UTILIZAMOS await
        const res = await fetch(path);
        //LEEMOS EL CONTENIDO DEL FICHERO DE FORMA ASINCRONA
        const data: any[] = await res.json();

        let aux: Array<Jugador>;
        aux = data.map(j => new Jugador
                (j.nombre, j.posicion, j.edad, j.imagen))
        console.log("Leyendo datos")
        return aux;
    }   
    
    

    getJugadoresFake(): Array<Jugador>{
        let aux: Array<Jugador> = [];
        aux.push(new Jugador("A", "ABBB", 33, "A"));
        aux.push(new Jugador("AB", "ABB", 43, "A"));
        aux.push(new Jugador("ABB", "ABB", 55, "A"));
        return aux;
    }
}