import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SneakerRoutingModule } from './sneaker-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SneakerRoutingModule
  ]
})
export class SneakerModule { }
