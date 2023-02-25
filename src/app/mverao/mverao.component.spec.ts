import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MveraoComponent } from './mverao.component';

describe('MveraoComponent', () => {
  let component: MveraoComponent;
  let fixture: ComponentFixture<MveraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MveraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MveraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
