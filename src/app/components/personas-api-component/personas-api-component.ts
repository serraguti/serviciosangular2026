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

  async ngOnInit(): Promise<void>{
    this._service.getPersonasAxios()
    .then(persons => {
      this.personas = persons;
    })
    //this.personas = await this._service.getPersonasAxiosAsync();
    this._cdr.detectChanges();
    // try{
    //   this.personas = await this._service.getPersonasPromiseAsync();
    // }catch (error){
    //   console.log("Error " + error)
    // }
    
    // this._service.getPersonasPromise().then((response)  => {
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // }).catch((error: any) => {
    //   console.log("Error gordo")
    // })

    //SI DEVOLVEMOS UN OBJETO Observable, NOS SUBSCRIBIMOS
    //A LA PETICION
    // this._service.getPersonas().subscribe({
    //   next: (response) => {
    //     console.log("leyendo api personas");
    //     this.personas = response;
    //     this._cdr.detectChanges();
    //   }, error: (error) => {
    //     console.log("Error gordo");
    //   }
    // })
  }
}
