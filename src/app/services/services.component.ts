import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: {};
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.services = this.getServices();
  }
getServices() {
    return this.config.getConfig().services;
}
}