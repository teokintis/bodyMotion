import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { CardsContainerComponent } from '../core/cards-container/cards-container.component';
import { HomePageComponent } from '../core/home-page/home-page.component';
import { FooterComponent } from '../core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MainHeaderComponent } from 'src/core/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CardsContainerComponent,
    FooterComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
