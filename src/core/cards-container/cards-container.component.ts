import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards-container',
  templateUrl: './cards-container.html',
  styleUrls: ['./cards-container.css']
})
export class CardsContainerComponent implements OnInit {
  ngOnInit(){
    console.info('CardsContainerComponent starts');
  }
}
