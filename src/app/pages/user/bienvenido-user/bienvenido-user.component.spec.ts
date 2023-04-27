import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoUserComponent } from './bienvenido-user.component';

describe('BienvenidoUserComponent', () => {
  let component: BienvenidoUserComponent;
  let fixture: ComponentFixture<BienvenidoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenidoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
