import { Component, EventEmitter, Input, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncSubject, BehaviorSubject, filter, from, map, ReplaySubject } from 'rxjs';


@Component({
  selector: 'app-child-exp',
  templateUrl: './child-exp.component.html',
  styleUrls: ['./child-exp.component.css']
})
export class ChildExpComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy{

  @Input()value: string ='';
  @Input() testvalue: number =0
  constructor(){
    console.log('constructorchild')
    console.log('value',this.value)
  }
  
  Hilna = 'Reverse'
  dataEmitter = new EventEmitter<string>()

  //  $subjects = new AsyncSubject()
    subject = new ReplaySubject(2 /* windowTime */);
    // subject = new BehaviorSubject(0); // 0 is the initial value
 



    // this.$subjects.next('1st')
    // this.$subjects.next('2nd')
    // this.$subjects.complete()

    // this.$subjects.subscribe((d)=> {console.log(d)})
    // this.$subjects.next('3')
    // this.$subjects.next('4')
    // this.$subjects.complete()
    // this.$subjects.subscribe((d)=> {console.log(d)})

    // this.subject.next(1);

    // this.subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // this.subject.next(2);

    
     
    // this.subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    //   this.subject.next(3);

    // this.subject.next(1);
    // this.subject.next(2);
    // this.subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
     
    
    // this.subject.next(3);
     
    // this.subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });
    // this.subject.next(4)
    // this.subject.next(5)

    

    // let source =  from([1,2,3,4])
    // source.pipe(map(val => val*2),filter(ele => ele> 3)).subscribe(data => console.log(data))

  

  callEmitter(){
    this.dataEmitter.emit('true')
  }


  ngOnInit(): void {
    console.log('ngonit')
    console.log('value',this.value)

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }


  

  ngDoCheck(): void {
    console.log('ngDoCheck')

  }
  
  
  ngAfterContentInit(): void {
        console.log('ngAfterContentInit')

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')

  }

ngOnDestroy(): void {
  console.log('ngOnDestroy')
}
    
  


}
