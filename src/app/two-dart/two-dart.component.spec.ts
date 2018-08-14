import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDArtComponent } from './two-dart.component';

describe('TwoDArtComponent', () => {
  let component: TwoDArtComponent;
  let fixture: ComponentFixture<TwoDArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
