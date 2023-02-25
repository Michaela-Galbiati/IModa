import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MprimaveraComponent } from './mprimavera.component';

describe('MprimaveraComponent', () => {
  let component: MprimaveraComponent;
  let fixture: ComponentFixture<MprimaveraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MprimaveraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MprimaveraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
