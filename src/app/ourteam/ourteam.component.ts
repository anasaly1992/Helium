import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {
team: {};
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
this.team = this.getTeam();
  }
getTeam() {
    return this.config.getConfig().team;
}
}
