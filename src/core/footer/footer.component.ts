import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style,state } from '@angular/animations'

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  ngOnInit(){
    console.info('footer starts');
  }
}
