import { ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

import { tap, map, first, last } from 'rxjs/operators';

export const reverse = () => <T>(source: Observable<number>) =>
  source.pipe(map(t => 1 - t));

export const before = (next: (v?) => void) => <T>(source: Observable<T>) => {
  source
    .pipe(
      first(),
      tap(next)
    )
    .subscribe();
  return source;
};
export const beforeStyle = (
  target: ElementRef,
  style: string,
  value: string
) => <T>(source: Observable<T>) => {
  return source.pipe(before(() => (target.nativeElement.style[style] = value)));
};

export const after = (next: (v?) => void) => <T>(source: Observable<T>) => {
  source
    .pipe(
      last(),
      tap(next)
    )
    .subscribe();
  return source;
};

export const afterStyle = (
  target: ElementRef,
  style: string,
  value: string
) => <T>(source: Observable<T>) => {
  return source.pipe(after(() => (target.nativeElement.style[style] = value)));
};

export const removeStyle = (el: ElementRef, style) => <T>(
  source: Observable<T>
) => {
  return source.pipe(after(() => (el.nativeElement.style[style] = '')));
};
export const removeStyles = (el: ElementRef, style: string[]) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    after(() => style.forEach(s => (el.nativeElement.style[s] = '')))
  );
};

export const transform = (
  target: ElementRef,
  ...ts: (<T>(number) => string)[]
) => <T>(source: Observable<number>) => {
  return source.pipe(
    tap(t => {
      const styles = ts.map(s => s(t)).join(' ');
      target.nativeElement.style.transform = styles;
    })
  );
};

export const fps = () => <T>(source: Observable<number>) => {
  let lastTime = 0;
  let startTime = 0;
  const frames = [];
  return source.pipe(
    before(() => {
      lastTime = performance.now();
      startTime = lastTime;
    }),
    tap(() => frames.push(1 / (performance.now() - lastTime))),
    tap(() => (lastTime = performance.now())),
    after(() => {
      const duration = performance.now() - startTime;
      const f = frames.filter(function(item, pos) {
        return frames.indexOf(item) === pos;
      });
    })
  );
};
