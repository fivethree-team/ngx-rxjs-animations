import { ElementRef } from '@angular/core';
import { RectPosition } from './types';

export function getPosition(el: ElementRef): RectPosition {
  const bounds = el.nativeElement.getBoundingClientRect();
  return {
    top: bounds.top,
    left: bounds.left,
    height: el.nativeElement.clientHeight,
    width: el.nativeElement.clientWidth
  };
}
export function setPosition(el: ElementRef, r: RectPosition): ElementRef {
  el.nativeElement.style.top = r.top + 'px';
  el.nativeElement.style.left = r.left + 'px';
  el.nativeElement.style.height = r.height + 'px';
  el.nativeElement.style.width = r.width + 'px';
  return el;
}

export function getStylePixels(el: ElementRef, style: string) {
  return +getComputedStyle(el.nativeElement)
    .getPropertyValue(style)
    .match(/\d+/)[0];
}

export function setStyle(el: ElementRef, style: string, value: string) {
  el.nativeElement.style[style] = value;
}

export function toRGB(c: number) {
  const r = Math.floor(c / (256 * 256));
  const g = Math.floor(c / 256) % 256;
  const b = c % 256;
  return `rgb(${r},${g},${b})`;
}

export function rgbToHex(orig) {
  const rgb = parseRgb(orig);
  return rgb && rgb.length === 4
    ? '#' +
        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : orig;
}

export function parseRgb(orig) {
  const parsed = orig
    .replace(/\s/g, '')
    .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  const rgb = [...parsed.splice(1, 3).map(v => +v), +parsed[4] || 1];

  return rgb;
}

export function getTweenedRgb(toColor: any, fromColor: any, t: number) {
  let rgb;
  if (toColor[3] || fromColor[3]) {
    rgb = `rgba(${t * (toColor[0] - fromColor[0]) + fromColor[0]},${t *
      (toColor[1] - fromColor[1]) +
      fromColor[1]},${t * (toColor[2] - fromColor[2]) + fromColor[2]},${t *
      (toColor[3] - fromColor[3]) +
      fromColor[3]})`;
  } else {
    rgb = `rgb(${t * (toColor[0] - fromColor[0]) + fromColor[0]},${t *
      (toColor[0] - fromColor[0]) +
      fromColor[0]},${t * (toColor[0] - fromColor[0]) + fromColor[0]})`;
  }
  return rgb;
}
