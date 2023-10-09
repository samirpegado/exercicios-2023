import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar-mobile',
  templateUrl: './topbar-mobile.component.html',
 
})
export class TopbarMobileComponent implements OnInit {

  isOpen: boolean = false;

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
