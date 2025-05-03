import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, delay, filter, forkJoin, of, tap, map } from "rxjs";

@Component({
  selector: 'app-angular',
  imports: [CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})

export class AngularComponent implements OnInit {
  // subjFirst = new Subject<number>();
  // observable = this.subjFirst.asObservable();

  behaviorSubj = new BehaviorSubject<number>(0);


  // observable creation
  observableFirst = of('Request 1').pipe(delay(1000));
  observableSecond = of('Request 2').pipe(delay(500));
  observableThird = of('Request 3').pipe(delay(2000));

  combined = forkJoin([this.observableFirst, this.observableSecond, this.observableSecond])
  // last two values to persist
  // replaySubj = new ReplaySubject<number>(2);
  // asyncSubj = new AsyncSubject<number>();

  // observableFirst = new Observable(subs => {
  //   subs.next('Hello from RxJS');
  //   subs.complete();
  // });

  // observableSecond = of('first value', 'second value', 'third value');

  // observableThird = from(['first value', 'second value', 'third value']);

  // observableFourth = from([1, 2, 3]);

  // observableFifth = new Observable(subs => {
  //   subs.next('Begin');
  //   subs.next('Computing');
  //   subs.error('Error! Something went wrong');
  //   subs.next('This message will never be logged');
  //   subs.complete();
  // });

  ngOnInit() {

    // // ----------------- filter, map, tap--------------------

    // this.behaviorSubj.pipe(
    //   tap(val => console.log('Before computing: ', val)),
    //   filter(val => val > 0),
    //   map(val => val * 10)
    // ).subscribe({
    //   next: val => console.log('Computed: ', val),
    //   complete: () => console.log('Complete!'),
    //   error: (err) => console.log('Error: ', err)
    // });

    // this.behaviorSubj.next(1);
    // this.behaviorSubj.next(2);
    // this.behaviorSubj.next(-1);
    // this.behaviorSubj.next(3);

    // this.behaviorSubj.complete();

    // ----------------- forkJoin --------------------

    this.combined.subscribe({
      next: ([response1, response2, response3]) => {console.log('forkJoin result: ', response1, response2, response3)},
      error: (err) => console.error('Error: ', err),
      complete: ()=> console.log('Combined complete!')
    });


    // ----------------- Simple subject --------------------

    // this.subjFirst.next(1);
    // this.subjFirst.subscribe({
    //   next: (value) => console.log('First subscriber:', value),
    //   error: (err) => console.error('Error with subscriber 1: ', err),
    //   complete: ()=> console.log('Subscriber 1 complete!')
    // })

    // this.subjFirst.next(2);
    // this.subjFirst.subscribe({
    //   next: (value) => console.log('Second subscriber:', value),
    //   error: (err) => console.error('Error with subscriber 2: ', err),
    //   complete: ()=> console.log('Subscriber 2 complete!')
    // })

    // this.subjFirst.next(3);
    // this.subjFirst.complete();
    // this.observableFirst.subscribe({
    //   next: (value) => console.log('Value observableFirst:', value),
    //   error: (err) => console.error('Error: ', err),
    //   complete: ()=> console.log('ObservableFirst complete!')
    // })

    // ----------------- Behavior subject --------------------

   // this.behaviorSubj.subscribe(val => console.log('Sub 1: ', val));

    // this.behaviorSubj.next(1);
    // this.behaviorSubj.next(2);

    // this.behaviorSubj.subscribe(val => console.log('Sub 2: ', val));
    // this.behaviorSubj.next(3);

    // this.behaviorSubj.complete();

    // ----------------- Replay subject --------------------

    // // data production
    // this.replaySubj.next(1);
    // this.replaySubj.next(2);
    // this.replaySubj.next(3);

    // this.replaySubj.subscribe(val=> console.log('Subscriber: ', val));

    // this.replaySubj.complete();

    // ----------------- Async subject --------------------

    // // data production
    // this.asyncSubj.next(1);
    // this.asyncSubj.next(2);
    // this.asyncSubj.next(3);

    // this.asyncSubj.subscribe(val => console.log('Async subscriber: ', val));

    // last data production
    // this.asyncSubj.next(4);

    // this.asyncSubj.complete();

    // this.observableSecond.subscribe({
    //   next: (value) => console.log('Value observableSecond:', value),
    //   error: (err) => console.error('Error: ', err),
    //   complete: ()=> console.log('ObservableSecond complete!')
    // })

    // this.observableThird.subscribe({
    //   next: (value) => console.log('Value observableThird:', value),
    //   error: (err) => console.error('Error: ', err),
    //   complete: ()=> console.log('ObservableThird complete!')
    // })

    // this.observableFourth.subscribe(value => console.log('Value observableFourth:', value));

    // this.observableFifth.subscribe({
    //   next: (value) => console.log('Value observableFifth:', value),
    //   error: (err) => console.error('Error: ', err),
    //   complete: ()=> console.log('ObservableFifth complete!')
    // })
  }
}
