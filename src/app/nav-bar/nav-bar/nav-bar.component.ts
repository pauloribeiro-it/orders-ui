import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navLinks: any[];
  items: MenuItem[];

  constructor() {
    this.items = [
      {label: 'Ordens', url: 'ordens'},
      {label: 'Ativos', url: 'ativos'},
    ];
    this.navLinks = [
      {
        label: 'Ordens',
        link: '/ordens'
      },{
        label: 'Ativos',
        link: '/ativos'
      }
    ];
   }

  ngOnInit(): void {
  }

}
