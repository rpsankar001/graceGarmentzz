import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class ViewItemComponent implements OnInit {
  images: any;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  constructor(private service: CommonService, config: NgbCarouselConfig) {
    // config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.images = this.service.getCollections();
    console.log(this.images)
  }
}
