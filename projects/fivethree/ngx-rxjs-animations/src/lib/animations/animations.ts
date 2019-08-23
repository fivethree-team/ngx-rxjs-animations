import { tween } from './tween';
import { transform } from '../operators/util.operators';
import { translateY, translateX, scaleY } from './transform';
import { fromTo } from '../operators/from-to.operators';

export const slideOutDown = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(0, 100)));

export const slideOutUp = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(0, -100)));
export const slideOutLeft = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(0, -100)));
export const slideOutRight = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(0, 100)));
export const slideInDown = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(-100, 0)));
export const slideInUp = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateY(100, 0)));
export const slideInLeft = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(-100, 0)));
export const slideInRight = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, translateX(100, 0)));

export const fadeIn = (target, easing, duration) =>
  tween(easing, duration).pipe(fromTo(target, 'opacity', 0, 1, t => `${t}`));
export const fadeOut = (target, easing, duration) =>
  tween(easing, duration).pipe(fromTo(target, 'opacity', 1, 0, t => `${t}`));

export const scaleYOut = (target, easing, duration) =>
  tween(easing, duration).pipe(transform(target, scaleY(1, 0)));
