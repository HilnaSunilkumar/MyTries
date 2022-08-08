import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, ElementRef, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'angular-experiments';
  des = true;
  constructor(){
    console.log('constructor')
  }
  onClickMe(ele: HTMLInputElement){
    this.title = 'changed'
  }
  Ondestr(){
    this.des = false;
  }
  
}
