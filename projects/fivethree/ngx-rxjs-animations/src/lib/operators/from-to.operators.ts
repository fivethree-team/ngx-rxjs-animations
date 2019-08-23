import { ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

import { removeStyles } from './util.operators';

import { position, color, boxModel } from '../animations/styles';

import { RectPosition, BoxModel } from '../types';

import { getStylePixels, parseRgb, getTweenedRgb } from '../utils';

import {
  parseBoxShadow,
  normalizeBoxShadows,
  getTweenedBoxShadow,
  stringifyBoxShadow
} from '../animations/box-shadow';

export const fromTo = (
  el: ElementRef,
  style: string,
  from: number,
  to: number,
  m: (t: number) => string
) => <T>(source: Observable<number>) =>
  source.pipe(
    tap(t => {
      const te = t * (to - from) + from;
      const value = m(te);
      el.nativeElement.style[style] = value;
    })
  );

export const fromToPixels = (
  target: ElementRef,
  from: number,
  to: number,
  style: string
) => <T>(source: Observable<number>) =>
  source.pipe(fromTo(target, style, from, to, t => `${t}px`));

export const toPixels = (target: ElementRef, to: number, style: string) => <T>(
  source: Observable<number>
) =>
  source.pipe(fromToPixels(target, getStylePixels(target, style), to, style));

export const toBoxModel = (
  target: ElementRef,
  toBox: number | BoxModel,
  style: string
) => <T>(source: Observable<number>) => {
  return source.pipe(
    toPixels(
      target,
      typeof toBox !== 'number' ? toBox.left || 0 : toBox,
      `${style}-left`
    ),
    toPixels(
      target,
      typeof toBox !== 'number' ? toBox.right || 0 : toBox,
      `${style}-right`
    ),
    toPixels(
      target,
      typeof toBox !== 'number' ? toBox.top || 0 : toBox,
      `${style}-top`
    ),
    toPixels(
      target,
      typeof toBox !== 'number' ? toBox.bottom || 0 : toBox,
      `${style}-bottom`
    ),
    removeStyles(target, boxModel(style))
  );
};

export const fromToBoxModel = (
  target: ElementRef,
  fromBox: number | BoxModel,
  toBox: number | BoxModel,
  style: string
) => <T>(source: Observable<number>) => {
  return source.pipe(
    fromToPixels(
      target,
      typeof fromBox !== 'number' ? fromBox.left || 0 : fromBox,
      typeof toBox !== 'number' ? toBox.left || 0 : toBox,
      `${style}-left`
    ),
    fromToPixels(
      target,
      typeof fromBox !== 'number' ? fromBox.right || 0 : fromBox,
      typeof toBox !== 'number' ? toBox.right || 0 : toBox,
      `${style}-right`
    ),
    fromToPixels(
      target,
      typeof fromBox !== 'number' ? fromBox.top || 0 : fromBox,
      typeof toBox !== 'number' ? toBox.top || 0 : toBox,
      `${style}-top`
    ),
    fromToPixels(
      target,
      typeof fromBox !== 'number' ? fromBox.bottom || 0 : fromBox,
      typeof toBox !== 'number' ? toBox.bottom || 0 : toBox,
      `${style}-bottom`
    ),
    removeStyles(target, boxModel(style))
  );
};

export const toPadding = (target: ElementRef, padding: number | BoxModel) => <
  T
>(
  source: Observable<number>
) => {
  return source.pipe(toBoxModel(target, padding, 'padding'));
};

export const toMargin = (target: ElementRef, margin: number | BoxModel) => <T>(
  source: Observable<number>
) => {
  return source.pipe(toBoxModel(target, margin, 'margin'));
};

export const fromToPosition = (
  target: ElementRef,
  from: RectPosition,
  to: RectPosition
) => <T>(source: Observable<number>) => {
  target.nativeElement.style.position = 'fixed';
  return source.pipe(
    fromToPixels(target, from.top, to.top, 'top'),
    fromToPixels(target, from.height, to.height, 'height'),
    fromToPixels(target, from.left, to.left, 'left'),
    fromToPixels(target, from.width, to.width, 'width'),
    removeStyles(target, position)
  );
};

export const toPosition = (target: ElementRef, to: RectPosition) => <T>(
  source: Observable<number>
) => {
  target.nativeElement.style.position = 'fixed';
  return source.pipe(
    toPixels(target, to.top, 'top'),
    toPixels(target, to.left, 'left'),
    toPixels(target, to.height, 'height'),
    toPixels(target, to.width, 'width'),
    removeStyles(target, position)
  );
};

export const toBoxShadow = (target: ElementRef, boxShadow: string) => <T>(
  source: Observable<number>
) => {
  const targetBS = getComputedStyle(target.nativeElement).getPropertyValue(
    'box-shadow'
  );

  const ptBS = parseBoxShadow(targetBS);
  const pfBS = parseBoxShadow(boxShadow);
  return source.pipe(
    fromTo(target, 'box-shadow', 0, 1, t => {
      const { tBS, fBS } = normalizeBoxShadows(ptBS, pfBS);
      const tweenedBS = tBS.map((bs, index) => {
        const fBSi = fBS[index];
        const toColor = parseRgb(bs.color) || parseRgb('rgb(0,0,0)');
        const fromColor = parseRgb(fBSi.color) || parseRgb('rgb(0,0,0)');
        const rgb = getTweenedRgb(toColor, fromColor, t);

        return getTweenedBoxShadow(t, bs, fBSi, rgb);
      });
      return stringifyBoxShadow(tweenedBS);
    }),
    removeStyles(target, ['box-shadow'])
  );
};

export const fromToColor = (
  target: ElementRef,
  fromColor: string,
  style = 'color'
) => <T>(source: Observable<number>) => {
  const targetColor = getComputedStyle(target.nativeElement).getPropertyValue(
    style
  );
  const tRGB = parseRgb(targetColor);
  const fRGB = parseRgb(fromColor);
  console.log('from to', fRGB, tRGB);
  return source.pipe(
    fromTo(target, style, 0, 1, t => getTweenedRgb(tRGB, fRGB, t)),
    removeStyles(target, color)
  );
};
