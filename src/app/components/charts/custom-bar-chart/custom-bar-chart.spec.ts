import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBarChart } from './custom-bar-chart';

describe('CustomBarChart', () => {
  let component: CustomBarChart;
  let fixture: ComponentFixture<CustomBarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomBarChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBarChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
