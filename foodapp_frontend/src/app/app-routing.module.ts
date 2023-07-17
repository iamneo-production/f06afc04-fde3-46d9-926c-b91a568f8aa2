import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'search',component:SearchComponent},
  {path:'home',component:HomeComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
