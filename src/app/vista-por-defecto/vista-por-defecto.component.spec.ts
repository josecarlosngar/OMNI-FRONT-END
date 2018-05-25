import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPorDefectoComponent } from './vista-por-defecto.component';

describe('VistaPorDefectoComponent', () => {
  let component: VistaPorDefectoComponent;
  let fixture: ComponentFixture<VistaPorDefectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPorDefectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPorDefectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
