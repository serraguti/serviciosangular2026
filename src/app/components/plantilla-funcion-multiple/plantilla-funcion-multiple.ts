import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-multiple',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple.css',
  templateUrl: './plantilla-funcion-multiple.html',
})
export class PlantillaFuncionMultiple implements OnInit {
  public funciones!: Array<string>;
  public plantilla: Array<Plantilla>;
  @ViewChild("selectfuncion") selectFuncion!: ElementRef;
  constructor(
    private _service: ServicePlantilla,
    private _cdr: ChangeDetectorRef
  ) {
    this.plantilla = [];
  }
  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
      this._cdr.detectChanges();
    })
  }

  mostrarPlantilla(): void{
    //EL CONTROL SELECT CUANDO ES UN VIEWCHILD, CONTIENE 
    //UNA PROPIEDAD LLAMADA value PARA RECUPERAR UN DATO
    //SI EL CONTROL ES MULTIPLE, DEBEMOS RECORRER SU PROPIEDAD options
    //E IR AVERIGUANDO LOS SELECCIONADOS
    let aux: Array<string> = [];
    for (let option of this.selectFuncion.nativeElement.options){
      if (option.selected == true){
        aux.push(option.value);
      }
    }
    this._service.getPlantillaFunciones(aux).subscribe(response => {
      this.plantilla = response;
      this._cdr.detectChanges();
    })
  }
}