import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsignupComponent } from './adminsignup.component';

describe('AdminsignupComponent', () => {
  let component: AdminsignupComponent;
  let fixture: ComponentFixture<AdminsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsignupComponent]
    });
    fixture = TestBed.createComponent(AdminsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
