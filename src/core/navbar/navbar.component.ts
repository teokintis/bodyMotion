import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style,state } from '@angular/animations'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  showCollapsedMenu = false;
  ngOnInit(){
    console.info('navbar starts');
  }

  alertMessage(){
    this.showCollapsedMenu=true;
  }

  closeNav(){
    this.showCollapsedMenu=false;
  }

  navigateToElement(element:string) {
    document.getElementById(element).scrollIntoView();
  }
}
