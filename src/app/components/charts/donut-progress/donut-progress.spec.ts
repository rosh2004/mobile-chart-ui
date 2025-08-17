import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutProgress } from './donut-progress';

describe('DonutProgress', () => {
  let component: DonutProgress;
  let fixture: ComponentFixture<DonutProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
