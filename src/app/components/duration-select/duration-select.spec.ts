import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationSelect } from './duration-select';

describe('DurationSelect', () => {
  let component: DurationSelect;
  let fixture: ComponentFixture<DurationSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DurationSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
