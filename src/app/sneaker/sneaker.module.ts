import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SneakerRoutingModule } from './sneaker-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { MenuMidComponent } from './components/menu-mid/menu-mid.component';
import { CardVarietyComponent } from './components/card-variety/card-variety.component';
import { CardOurServiceComponent } from './components/card-our-service/card-our-service.component';
import { CardBestSellingComponent } from './components/card-best-selling/card-best-selling.component';
import { PriceShoesComponent } from './components/price-shoes/price-shoes.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CardHomeComponent,
    MenuMidComponent,
    CardVarietyComponent,
    CardOurServiceComponent,
    CardBestSellingComponent,
    PriceShoesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SneakerRoutingModule
  ]
})
export class SneakerModule { }
