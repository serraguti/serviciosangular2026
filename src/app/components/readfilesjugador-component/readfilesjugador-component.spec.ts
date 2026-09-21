import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadfilesjugadorComponent } from './readfilesjugador-component';

describe('ReadfilesjugadorComponent', () => {
  let component: ReadfilesjugadorComponent;
  let fixture: ComponentFixture<ReadfilesjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadfilesjugadorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadfilesjugadorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
