import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResloginComponent } from './reslogin.component';

describe('ResloginComponent', () => {
  let component: ResloginComponent;
  let fixture: ComponentFixture<ResloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResloginComponent]
    });
    fixture = TestBed.createComponent(ResloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
