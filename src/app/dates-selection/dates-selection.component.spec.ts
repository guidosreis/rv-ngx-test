import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesSelectionComponent } from './dates-selection.component';

describe('DatesSelectionComponent', () => {
  let component: DatesSelectionComponent;
  let fixture: ComponentFixture<DatesSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
