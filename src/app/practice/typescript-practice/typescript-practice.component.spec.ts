import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptPracticeComponent } from './typescript-practice.component';

describe('TypescriptPracticeComponent', () => {
  let component: TypescriptPracticeComponent;
  let fixture: ComponentFixture<TypescriptPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
