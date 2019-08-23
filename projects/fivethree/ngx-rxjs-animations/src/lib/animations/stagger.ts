import { ElementRef } from '@angular/core';
import {  Observable, merge, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export const stagger = (
  targets: ElementRef[],
  animation: (target: ElementRef) => Observable<any>,
  d: number
) => {
  const example = of(null);

  return merge(
    ...targets.map((target, index) =>
      example.pipe(
        delay(d * index),
        flatMap(() => animation(target))
      )
    )
  );
};
