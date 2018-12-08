import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {
  pricing: {};
  constructor( private config: ConfigurationService) { }

  ngOnInit() {
    this.pricing = this.getPricing();
  }
getPricing(){
  return this.config.getConfig().pricing;
}
}
