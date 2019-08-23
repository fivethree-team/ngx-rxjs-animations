import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { reveal } from '../animations';
import {
  slideInDown,
  easeInSine,
  slideInUp,
  slideInRight,
  slideInLeft,
  slideOutUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  easeOutSine,
  fadeIn,
  fadeOut,
  tween,
  fromToColor,
  after
} from '@fivethree/ngx-rxjs-animations';
import { Subject, Observable, concat, of } from 'rxjs';
import { delay, flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnDestroy {
  @ViewChild('animateme', { read: ElementRef, static: false })
  animateElement: ElementRef;
  $onDestroy = new Subject();
  currentSelection: {
    name: string;
    animation: (
      element: ElementRef,
      easing,
      duration: number
    ) => Observable<number>;
  };

  animationSelection = [
    { name: 'slideInUp', animation: slideInUp },
    { name: 'slideInDown', animation: slideInDown },
    { name: 'slideInLeft', animation: slideInLeft },
    { name: 'slideInRight', animation: slideInRight },
    { name: 'slideOutUp', animation: slideOutUp },
    { name: 'slideOutDown', animation: slideOutDown },
    { name: 'slideOutLeft', animation: slideOutLeft },
    { name: 'slideOutRight', animation: slideOutRight },
    { name: 'fadeIn', animation: fadeIn },
    { name: 'fadeOut', animation: fadeOut }
  ];

  //animations
  reveal = reveal;
  slideDown = (element: ElementRef) => slideInDown(element, easeInSine, 200);

  colorTween = (element: ElementRef) =>
    tween(easeOutSine, 400).pipe(
      fromToColor(element, 'rgb(255,255,255)', 'background-color')
    );

  constructor() {
    this.currentSelection = this.animationSelection[0];
  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  animate(d = 0) {
    concat(
      of(true).pipe(
        delay(d),
        flatMap(() =>
          this.currentSelection.animation(this.animateElement, easeOutSine, 300)
        )
      ),
      of(true).pipe(
        delay(300),
        flatMap(() => fadeOut(this.animateElement, easeOutSine, 200)),
        after(() => {
          this.animateElement.nativeElement.transform = '';
        })
      ),
      of(true).pipe(
        delay(300),
        flatMap(() => fadeIn(this.animateElement, easeOutSine, 200))
      )
    ).subscribe();
  }
}
