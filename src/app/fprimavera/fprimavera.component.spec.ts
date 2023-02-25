import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FprimaveraComponent } from './fprimavera.component';

describe('FprimaveraComponent', () => {
  let component: FprimaveraComponent;
  let fixture: ComponentFixture<FprimaveraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FprimaveraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FprimaveraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
