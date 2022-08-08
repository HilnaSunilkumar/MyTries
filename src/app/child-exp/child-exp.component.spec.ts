import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExpComponent } from './child-exp.component';

describe('ChildExpComponent', () => {
  let component: ChildExpComponent;
  let fixture: ComponentFixture<ChildExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
