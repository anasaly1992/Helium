import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnChanges {
  Portfolio: {}
  @Input() filterBy?: string = 'all';
  visibleImages: any[] = [];

  constructor(private config: ConfigurationService, private galleryService: GalleryService) {
    this.visibleImages = this.galleryService.getImages();
   }

  ngOnInit() {
    this.Portfolio = this.getPortfolio();
  }
  getPortfolio() {
    return this.config.getConfig().Portfolio;
}
ngOnChanges(){
  this.visibleImages = this.galleryService.getImages();
}
}
