import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer: {};
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
    this.footer = this.getFooter();
  }
  getFooter() {
    return this.config.getConfig().footer;
}
}
