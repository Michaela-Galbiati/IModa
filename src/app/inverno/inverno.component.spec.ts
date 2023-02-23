import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvernoComponent } from './inverno.component';

describe('InvernoComponent', () => {
  let component: InvernoComponent;
  let fixture: ComponentFixture<InvernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
