import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import '@angular/common/locales/global/ru';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import {NgxMaskModule} from "ngx-mask";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCountComponent } from './components/product-count/product-count.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductCardComponent,
    ProductCountComponent,
    LeavesComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
