import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDModelsComponent } from './three-dmodels.component';

describe('ThreeDModelsComponent', () => {
  let component: ThreeDModelsComponent;
  let fixture: ComponentFixture<ThreeDModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
