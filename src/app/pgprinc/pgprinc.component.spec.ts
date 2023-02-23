import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgprincComponent } from './pgprinc.component';

describe('PgprincComponent', () => {
  let component: PgprincComponent;
  let fixture: ComponentFixture<PgprincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgprincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgprincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
