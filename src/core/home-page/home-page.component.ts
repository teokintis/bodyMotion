import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style,state } from '@angular/animations'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style(
        {transform: 'translateX(-500%)'}
      )),
      state('closed', style(
        {transform: 'translateX(0%)'}
      )),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ],
    ),
    trigger('openButtons', [
      state('open', style(
        {transform: 'translateX(500%)'}
      )),
      state('closed', style(
        {transform: 'translateX(0%)'}
      )),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ],)
  ],
})
export class HomePageComponent implements OnInit {
  visible=false;
  isOpen = true;
  selectedItem=0;
  selectedGalleryItem = 0;
  ngOnInit(){
    console.info('HomePageComponent starts');
    setTimeout(() => {
      this.isOpen=false; 
  }, 1000);
  }

  goToNextItem(){
    this.selectedItem = this.selectedItem<2?this.selectedItem+1:0;
  }

  goToPreviousItem(){
    this.selectedItem = this.selectedItem>0?this.selectedItem-1:2;
  }

  goToPreviousGalleryItem(){
    this.selectedGalleryItem = this.selectedGalleryItem>0?this.selectedGalleryItem-1:2;
  }

  gotoNextGalleryitem(){
    this.selectedGalleryItem = this.selectedGalleryItem<2?this.selectedGalleryItem+1:0;

  }
}
