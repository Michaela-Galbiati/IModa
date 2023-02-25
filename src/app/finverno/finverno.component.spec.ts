import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinvernoComponent } from './finverno.component';

describe('FinvernoComponent', () => {
  let component: FinvernoComponent;
  let fixture: ComponentFixture<FinvernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinvernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinvernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
