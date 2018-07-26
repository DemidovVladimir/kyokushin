import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { GridOverviewComponent } from './grid-overview.component';

describe('GridOverviewComponent', () => {
  let component: GridOverviewComponent;
  let fixture: ComponentFixture<GridOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOverviewComponent ],
      imports: [MatCardModule, RouterTestingModule.withRoutes([])],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
