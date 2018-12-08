import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
sliders: {};
about: {};
  constructor(private config: ConfigurationService) {}
  ngOnInit() {
    this.sliders = this.getIntro();
    this.about = this.getIntroabout();
  }
  getIntro() {
return this.config.getConfig().sliders;
  }
  getIntroabout() {
    return this.config.getConfig().about;
      }
}
