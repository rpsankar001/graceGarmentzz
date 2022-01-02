import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../assets/data.json';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: CommonService, private route: Router) {}
  products: any = (data as any).default;
  ngOnInit(): void {}
  getObjName(item: any) {
    return Object.keys(item)[0];
  }
  navigateToCollections(collections: any, name: string) {
    const data = {
      list: collections,
      name: name,
    };
    this.service.addCollections(data);
    this.route.navigateByUrl('list-items');
  }
}
