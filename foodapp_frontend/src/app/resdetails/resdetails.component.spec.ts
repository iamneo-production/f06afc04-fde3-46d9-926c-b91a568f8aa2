import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdetailsComponent } from './resdetails.component';

describe('ResdetailsComponent', () => {
  let component: ResdetailsComponent;
  let fixture: ComponentFixture<ResdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResdetailsComponent]
    });
    fixture = TestBed.createComponent(ResdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
