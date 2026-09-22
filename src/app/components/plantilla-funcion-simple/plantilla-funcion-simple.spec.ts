import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillaFuncionSimple } from './plantilla-funcion-simple';

describe('PlantillaFuncionSimple', () => {
  let component: PlantillaFuncionSimple;
  let fixture: ComponentFixture<PlantillaFuncionSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaFuncionSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
