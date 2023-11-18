import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SneakerRoutingModule } from './sneaker-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { MenuMidComponent } from './components/menu-mid/menu-mid.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CardHomeComponent,
    MenuMidComponent
  ],
  imports: [
    CommonModule,
    SneakerRoutingModule
  ]
})
export class SneakerModule { }
