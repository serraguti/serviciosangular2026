export class Persona {
    //PARA HACER UN BINDING AUTOMATICO, EL NOMBRE DE 
    //LAS PROPIEDADES DEL JSON Y LA CLASE 
    //DEBEN SER IGUALES
    constructor(
        public IdPersona: number,
        public Nombre: string, 
        public Email: string, 
        public Edad: number
    ){}
}