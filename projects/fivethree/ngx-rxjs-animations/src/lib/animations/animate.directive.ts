import { Directive, OnDestroy, Input, ElementRef, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { before } from '../operators/util.operators';

@Directive({
  selector: '[anim]'
})
export class AnimateDirective implements OnInit, OnDestroy {
  @Input('anim.in') animIn: (target: ElementRef) => Observable<number>;
  @Input('anim.out') animOut: (target: any) => Observable<number>;
  @Input('anim.stagger') set staggerIndex(i: number) {
    this._index = [
      ...this.element.nativeElement.parentElement.children
    ].indexOf(this.element.nativeElement);
    this._staggerIndex = i;
  }
  get staggerIndex() {
    return this._staggerIndex;
  }
  @Input('anim.stagger.delay') staggerDelay = 0;
  @Input('anim.delay') delay = 0;

  private _parent: HTMLElement;
  private _inserted: HTMLElement;
  private _clone: HTMLElement;
  private _index: number;
  private _staggerIndex = 0;

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.opacity = 0;
  }
  ngOnInit(): void {
    if (!this.animIn) {
      return;
    }
    setTimeout(() => {
      this._clone = this.element.nativeElement;
      this._parent = this.element.nativeElement.parentElement;
      this._index = [
        ...this.element.nativeElement.parentElement.children
      ].indexOf(this.element.nativeElement);

      of(true)
        .pipe(
          delay(this.staggerDelay * this.staggerIndex + this.delay),
          flatMap(() => this.animIn(this.element)),
          before(() => (this.element.nativeElement.style.opacity = ''))
        )
        .subscribe();
    }, 0);
  }

  ngOnDestroy(): void {
    // TODO Why though?
    if (this.element.nativeElement.parentElement) {
      // outer parent go destroyed
      return;
    }

    if (!this.animOut) {
      // no animation specified
      return;
    }

    this._inserted = this._parent.insertBefore(
      this._clone,
      this._parent.children[this._index]
    );
    this.element.nativeElement = this._inserted;
    of(true)
      .pipe(
        delay(this.staggerDelay * (this.staggerIndex + 1)),
        flatMap(() => this.animOut(this.element))
      )
      .subscribe({
        complete: () => {
          this._parent.removeChild(this._inserted);
        }
      });
  }
}
