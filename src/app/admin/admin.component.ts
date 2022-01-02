import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userName: any = '';
  password: any = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.userName === 'admin' && this.password === 'test123') {
    }
    this.router.navigate(['/uploadFiles'])
  }
}
