import { ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

import { getStylePixels, getPosition, parseRgb, getTweenedRgb } from '../utils';

import { removeStyles } from './util.operators';

import { container, color, position, boxModel } from '../animations/styles';
import {
  parseBoxShadow,
  normalizeBoxShadows,
  getTweenedBoxShadow,
  stringifyBoxShadow
} from '../animations/box-shadow';
import {
  fromToPixels,
  fromToPosition,
  fromTo,
  fromToColor
} from './from-to.operators';

export const morphStylePixels = (
  target: ElementRef,
  fromEl: ElementRef,
  style: string
) => <T>(source: Observable<number>) =>
  source.pipe(
    fromToPixels(
      target,
      getStylePixels(fromEl, style),
      getStylePixels(target, style),
      style
    )
  );

export const morphBoxModel = (
  target: ElementRef,
  fromEl: ElementRef,
  style
) => <T>(source: Observable<number>) => {
  return source.pipe(
    morphStylePixels(target, fromEl, `${style}-left`),
    morphStylePixels(target, fromEl, `${style}-right`),
    morphStylePixels(target, fromEl, `${style}-top`),
    morphStylePixels(target, fromEl, `${style}-bottom`)
  );
};

export const morphPosition = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  const to = getPosition(target);
  const from = getPosition(fromEl);
  return source.pipe(fromToPosition(target, from, to));
};

export const morphBoxShadow = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  const targetBS = getComputedStyle(target.nativeElement).getPropertyValue(
    'box-shadow'
  );
  const fromBS = getComputedStyle(fromEl.nativeElement).getPropertyValue(
    'box-shadow'
  );

  const ptBS = parseBoxShadow(targetBS);
  const pfBS = parseBoxShadow(fromBS);
  return source.pipe(
    fromTo(target, 'box-shadow', 0, 1, t => {
      const { tBS, fBS } = normalizeBoxShadows(ptBS, pfBS);
      const tweenedBS = tBS.map((bs, index) => {
        const fBSi = fBS[index];
        fBSi.color = fBSi.color === 'none' ? 'rgba(0,0,0,0)' : fBSi.color;
        bs.color = bs.color === 'none' ? fBSi.color : bs.color;

        const toColor = parseRgb(bs.color);
        const fromColor = parseRgb(fBSi.color);
        const rgb = getTweenedRgb(toColor, fromColor, t);

        return getTweenedBoxShadow(t, bs, fBSi, rgb);
      });
      return stringifyBoxShadow(tweenedBS);
    }),
    removeStyles(target, ['box-shadow'])
  );
};

export const morphElement = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    morphPosition(target, fromEl),
    morphBoxShadow(target, fromEl),
    morphStylePixels(target, fromEl, 'border-radius'),
    removeStyles(target, container)
  );
};

export const morphColor = (
  target: ElementRef,
  fromEl: ElementRef,
  style = 'color'
) => <T>(source: Observable<number>) => {
  const fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(
    style
  );
  return source.pipe(
    fromToColor(target, fromColor, style),
    removeStyles(target, color)
  );
};

export const morphText = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    morphElement(target, fromEl),
    morphBoxModel(target, fromEl, 'padding'),
    morphColor(target, fromEl),
    morphStylePixels(target, fromEl, 'font-size'),
    morphStylePixels(target, fromEl, 'font-weight')
  );
};

export const morph = (target: ElementRef, fromEl: ElementRef) => <T>(
  source: Observable<number>
) => {
  return source.pipe(
    morphElement(target, fromEl),
    morphBoxModel(target, fromEl, 'padding'),
    morphColor(target, fromEl, 'background-color')
  );
};
