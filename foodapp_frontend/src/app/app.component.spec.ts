import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
<<<<<<< HEAD
  it(`should have as title 'cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cart');
=======
=======
>>>>>>> 099de46 (updated the home and search components for home screen)
  it(`should have as title 'foodapp_frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('foodapp_frontend');
<<<<<<< HEAD
>>>>>>> ec75852372be6f1a12583025cd1786856d5ad35b
=======
>>>>>>> 099de46 (updated the home and search components for home screen)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('cart app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodapp_frontend app is running!');
>>>>>>> ec75852372be6f1a12583025cd1786856d5ad35b
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodapp_frontend app is running!');
>>>>>>> 099de46 (updated the home and search components for home screen)
  });
});
