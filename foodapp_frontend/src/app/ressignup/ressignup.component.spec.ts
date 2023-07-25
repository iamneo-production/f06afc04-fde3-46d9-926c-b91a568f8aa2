import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessignupComponent } from './ressignup.component';

describe('RessignupComponent', () => {
  let component: RessignupComponent;
  let fixture: ComponentFixture<RessignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RessignupComponent]
    });
    fixture = TestBed.createComponent(RessignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
