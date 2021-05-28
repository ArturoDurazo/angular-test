import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component'
import { AboutUsComponent } from './components/about-us/about-us.component'
import { CatalogueComponent } from './components/catalogue/catalogue.component'
import { CakesComponent } from './components/catalogue/cakes/cakes.component'
import { DrinksComponent } from './components/catalogue/drinks/drinks.component'
import { SpecialtiesComponent } from './components/catalogue/specialties/specialties.component'
import { TwinkieComponent } from './components/catalogue/specialties/twinkie/twinkie.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component'
import { LocationsComponent } from './components/locations/locations.component'

const routes: Routes = [
  //path is from where you wanna reach such component
  //reach from root cuz its homepage
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'catalogue/cakes', component: CakesComponent},
  {path: 'catalogue/drinks', component: DrinksComponent},
  {path: 'catalogue/specialties', component: SpecialtiesComponent},
  {path: 'catalogue/specialties/twinkie', component: TwinkieComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'locations', component: LocationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
