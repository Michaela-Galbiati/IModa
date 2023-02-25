import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoutonoComponent } from './foutono.component';

describe('FoutonoComponent', () => {
  let component: FoutonoComponent;
  let fixture: ComponentFixture<FoutonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoutonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoutonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
