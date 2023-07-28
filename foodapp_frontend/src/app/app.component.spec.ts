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
=======
<<<<<<< HEAD
<<<<<<< HEAD
  it(`should have as title 'cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cart');
=======
=======
>>>>>>> e632fe5 (frontebd)
>>>>>>> b981db2 (frontebd)
=======
>>>>>>> 45103b0 (update for)
  it(`should have as title 'foodapp_frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('foodapp_frontend');
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ec75852372be6f1a12583025cd1786856d5ad35b
=======
>>>>>>> e632fe5 (frontebd)
>>>>>>> b981db2 (frontebd)
=======
>>>>>>> 45103b0 (update for)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodapp_frontend app is running!');
=======
<<<<<<< HEAD
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('cart app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodapp_frontend app is running!');
>>>>>>> ec75852372be6f1a12583025cd1786856d5ad35b
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodapp_frontend app is running!');
>>>>>>> e632fe5 (frontebd)
>>>>>>> b981db2 (frontebd)
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodapp_frontend app is running!');
>>>>>>> 45103b0 (update for)
  });
});