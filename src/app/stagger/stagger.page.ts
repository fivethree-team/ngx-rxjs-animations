import { MorphPage } from './../morph/morph.page';
import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  fadeOut,
  fadeIn,
  slideInLeft,
  slideOutRight,
  getPosition,
  toRGB,
  tween,
  morph,
  after,
  reverse,
  easeOutSine,
  toPixels,
  fromToPixels,
  beforeStyle,
  easeInSine,
  before,
  setStyle,
  afterStyle
} from '@fivethree/ngx-rxjs-animations';
import { concat, zip } from 'rxjs';
import { reveal, showButton } from '../animations';
import { tap, flatMap } from 'rxjs/operators';
import { FivOverlayService, FivOverlay } from '@fivethree/core';

export interface Item {
  color: string;
}

@Component({
  selector: 'app-stagger',
  templateUrl: 'stagger.page.html',
  styleUrls: ['stagger.page.scss']
})
export class StaggerPage implements OnInit {
  @ViewChild('content', { read: ElementRef, static: false })
  content: ElementRef;
  @ViewChild('overlay', { static: false }) overlay: FivOverlay;

  @ViewChildren('item', { read: ElementRef }) cards: QueryList<ElementRef>;
  l = true;

  items: Item[] = Array.from(new Array(10), (x, i) => ({
    color: toRGB(Math.random() * 16777215)
  }));
  currentIndex: number;
  currentItem: Item;

  showButton = showButton;

  constructor(
    private change: ChangeDetectorRef,
    private oS: FivOverlayService
  ) {}

  ngOnInit() {}

  startMorph(i, it) {
    // this.overlay.show();
  }

  close() {
    this.morphOut().subscribe();
  }

  morphOut() {
    return tween(easeInSine, 290).pipe(
      reverse(),
      morph(this.content, this.cards.toArray()[this.currentIndex]),
      after(() => this.overlay.hide())
    );
  }

  ngAfterViewInit(): void {
    this.currentIndex = 0;
    this.currentItem = this.items[0];
  }

  deconstruct() {
    concat(
      this.morphOut(),
      this.hide(this.cards.toArray()[this.currentIndex])
    ).subscribe({
      complete: () => {
        this.items.splice(this.currentIndex, 1);
      }
    });
  }

  public reveal = element => {
    const position = getPosition(element);
    return concat(
      tween(easeOutSine, 200).pipe(
        beforeStyle(element, 'opacity', '0'),
        fromToPixels(element, 0, position.height, 'height')
      ),
      zip(
        fadeIn(element, easeOutSine, 220),
        slideInLeft(element, easeOutSine, 220)
      )
    );
  };

  public hide = element =>
    concat(
      zip(
        fadeOut(element, easeOutSine, 220),
        slideOutRight(element, easeOutSine, 220)
      ),
      tween(easeOutSine, 120).pipe(toPixels(element, 0, 'height'))
    );

  add() {
    this.items.unshift({
      color: toRGB(Math.random() * 16777215)
    });
  }
}
