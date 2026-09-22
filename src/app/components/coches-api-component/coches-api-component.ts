import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';
@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent  {
  public cochesArray!: Array<Coche>;
  constructor(private _cdr: ChangeDetectorRef,
    private _service: ServiceCoches
  ){
    this.cochesArray = [];
  }

  getCochesPromise(): void{
    this._service.getCochesPromise().then(cars => {
      this.cochesArray = cars;
      this._cdr.detectChanges();
    })
  }

  async getCochesAsync(): Promise<void>{
    this.cochesArray = await this._service.getCochesAsync();
    this._cdr.detectChanges();
  }

  getCochesObservable(): void{
    this._service.getCochesObservable().subscribe((response) => {
      this.cochesArray = response;
      this._cdr.detectChanges();
    })
  }

  limpiarDatos(): void {
    this.cochesArray = [];
    this._cdr.detectChanges();
  }
}
