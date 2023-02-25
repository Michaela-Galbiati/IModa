import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoutonoComponent } from './moutono.component';

describe('MoutonoComponent', () => {
  let component: MoutonoComponent;
  let fixture: ComponentFixture<MoutonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoutonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoutonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
