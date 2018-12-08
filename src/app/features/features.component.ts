import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: {}
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.features = this.getFeatures();
  }
  getFeatures() {
    return this.config.getConfig().features;
}
}
