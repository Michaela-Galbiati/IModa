import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FveraoComponent } from './fverao.component';

describe('FveraoComponent', () => {
  let component: FveraoComponent;
  let fixture: ComponentFixture<FveraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FveraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FveraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
