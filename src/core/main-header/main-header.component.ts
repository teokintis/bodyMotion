import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style,state } from '@angular/animations'

@Component({
  selector: 'main-header',
  templateUrl: './main-header.html',
  styleUrls: ['./main-header.css']
})
export class MainHeaderComponent implements OnInit {
  ngOnInit(){
    console.info('MainHeaderComponent starts');
  }
}
