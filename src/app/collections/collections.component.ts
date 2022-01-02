import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  collections: any;
  constructor(private service: CommonService,  private route: Router) {}

  ngOnInit(): void {
    this.collections = this.service.getCollections();
  }
  openMultiImages(imageList: any) {
  
    this.service.addViewItem(imageList);
    this.route.navigateByUrl('view-item');
  }
}
