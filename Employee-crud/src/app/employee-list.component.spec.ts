import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeelistComponent ;
  let fixture: ComponentFixture<EmployeelistComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeelistComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
