import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CakesComponent } from './components/catalogue/cakes/cakes.component';
import { DrinksComponent } from './components/catalogue/drinks/drinks.component';
import { SpecialtiesComponent } from './components/catalogue/specialties/specialties.component';
import { ProductsComponent } from './components/catalogue/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/catalogue/product-list/product-list.component';
import { TwinkieComponent } from './components/catalogue/specialties/twinkie/twinkie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    CatalogueComponent,
    ContactUsComponent,
    LocationsComponent,
    CakesComponent,
    DrinksComponent,
    SpecialtiesComponent,
    ProductsComponent,
    ProductListComponent,
    TwinkieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
