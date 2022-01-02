import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ViewItemComponent implements OnInit {
  images: any;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  prodListingImages: any;
  constructor(private service: CommonService, config: NgbCarouselConfig) {
    // config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.images = this.service.getCollections();
    this.onSlide({ current: 'ngb-slide-0' });
  }

  onSlide(event: any) {
    console.log(event);
    const index = Number(event.current.split('ngb-slide-')[1]);
    this.prodListingImages = Object.assign([], this.images.list[index].images);
  }
  viewImage() {}
}
