import {
  fadeIn,
  easeOutSine,
  fadeOut,
  tween,
  transform,
  translateY,
  toRGB,
  slideOutDown,
  easeInOutSine,
  morph,
  reverse,
  toPixels,
  easeInSine,
  linear,
  scale,
  stagger
} from '@fivethree/ngx-rxjs-animations';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { zip, of, concat } from 'rxjs';
import { Item } from '../stagger/stagger.page';
import { delay, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.page.html',
  styleUrls: ['./masonry.page.scss']
})
export class MasonryPage implements OnInit {
  items: Item[] = Array.from(new Array(40), (x, i) => ({
    color: toRGB(Math.random() * 16777215)
  }));

  focused = false;

  @ViewChildren('card') cards: QueryList<ElementRef>;

  in = (element: ElementRef) =>
    zip(
      fadeIn(element, linear, 300),
      tween(linear, 300).pipe(transform(element, translateY(60, 0)))
    );
  out = (element: ElementRef) =>
    zip(
      fadeOut(element, linear, 300),
      tween(linear, 300).pipe(
        transform(element, scale(1, 0.5), translateY(0, 60))
      )
    );

  constructor() {}

  ngOnInit() {}

  cardClicked(index: number) {
    this.focused = !this.focused;
    const others = this.cards.filter((card, i) => i !== index);

    if (this.focused) {
      return stagger(others, this.out, 25).subscribe();
    }
    return stagger(others, this.in, 25).subscribe();
  }
}
