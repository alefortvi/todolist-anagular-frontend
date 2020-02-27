import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobDialogComponent } from './add-job-dialog.component';

describe('AddJobDialogComponentComponent', () => {
  let component: AddJobDialogComponent;
  let fixture: ComponentFixture<AddJobDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
