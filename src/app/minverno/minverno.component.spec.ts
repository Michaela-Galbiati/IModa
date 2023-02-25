import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinvernoComponent } from './minverno.component';

describe('MinvernoComponent', () => {
  let component: MinvernoComponent;
  let fixture: ComponentFixture<MinvernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinvernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinvernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
