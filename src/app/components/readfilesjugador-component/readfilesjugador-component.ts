import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { ServiceJugadores } from '../../services/service.jugadores';
@Component({
  selector: 'app-readfilesjugador-component',
  standalone: false,
  styleUrl: './readfilesjugador-component.css',
  templateUrl: './readfilesjugador-component.html',
})
export class ReadfilesjugadorComponent implements OnInit {
  public jugadores: Array<Jugador>;

  constructor
  (private _cdr: ChangeDetectorRef,
    private _service: ServiceJugadores
  ){
    this.jugadores = [];
  }

  async ngOnInit(): Promise<void> {
    console.log("Ng Init");
    //LAS PETICIONES SE REALIZAN CON await
    this.jugadores = await this._service.getJugadoresAsync();
    this._cdr.detectChanges();
  }

  onFileSelected(event: any): void {
    const reader = new FileReader();
    reader.onload = ((readerEvent: any) => {
      const contenido = readerEvent.target.result;
      //CONVERTIR A JSON EL FORMATO DEL TEXTO
      const objetoJSON = JSON.parse(contenido);
      let aux: Array<Jugador> = [];
      for (let elem of objetoJSON){
        let player = new Jugador(elem.nombre, elem.posicion,elem.edad
          , elem.imagen);
        aux.push(player);
      }
      this.jugadores = aux;
      console.log(this.jugadores);
      this._cdr.detectChanges();
    })
    reader.readAsText(event.target.files[0]);
  }
}
