import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturesComponent } from './features/features.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ImageFilterPipe} from './filter.pipe';
import 'rxjs/add/observable/of';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ServicesComponent,
    PortfolioComponent,
    FeaturesComponent,
    OurteamComponent,
    PricingTableComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ng bootstrap
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
