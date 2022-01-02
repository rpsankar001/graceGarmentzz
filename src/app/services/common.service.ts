import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  collections: any;
  imageList: any;
  addCollections(collections: any) {
    this.collections = collections;
  }

  getCollections() {
    return this.collections;
  }

  addViewItem(images: any) {
    this.imageList = images;
  }

  getViews() {
    return this.imageList;
  }
}
