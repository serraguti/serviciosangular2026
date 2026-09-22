import { Component, ChangeDetectorRef, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple',
  standalone: false,
  styleUrl: './plantilla-funcion-simple.css',
  templateUrl: './plantilla-funcion-simple.html',
})
export class PlantillaFuncionSimple implements OnInit {
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
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantillaFuncion(funcion).then(response => {
      this.plantilla = response;
      this._cdr.detectChanges();
    })
  }
}
