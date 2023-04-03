import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoButtonComponent } from './exo-button.component';

describe('ExoButtonComponent', () => {
  let component: ExoButtonComponent;
  let fixture: ComponentFixture<ExoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
