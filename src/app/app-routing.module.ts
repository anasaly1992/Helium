import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { FeaturesComponent } from './features/features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: IntroComponent },
  { path: 'OurTeam', component: OurteamComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Pricing', component: PricingTableComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Contact', component: ContactUsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
