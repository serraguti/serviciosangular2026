import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas,
    private _cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void{
    this._service.getPersonasPromise().then((response)  => {
      this.personas = response;
      this._cdr.detectChanges();
    })

    //SI DEVOLVEMOS UN OBJETO Observable, NOS SUBSCRIBIMOS
    //A LA PETICION
    // this._service.getPersonas().subscribe((response) => {
    //   console.log("leyendo api personas");
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // })
  }
}
