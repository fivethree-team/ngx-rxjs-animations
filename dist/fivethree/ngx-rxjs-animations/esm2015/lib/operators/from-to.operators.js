/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tap } from 'rxjs/operators';
import { removeStyles } from './util.operators';
import { position, color, boxModel } from '../animations/styles';
import { getStylePixels, parseRgb, getTweenedRgb } from '../utils';
import { parseBoxShadow, normalizeBoxShadows, getTweenedBoxShadow, stringifyBoxShadow } from '../animations/box-shadow';
/** @type {?} */
export const fromTo = (/**
 * @param {?} el
 * @param {?} style
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
(el, style, from, to, m) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(tap((/**
 * @param {?} t
 * @return {?}
 */
t => {
    /** @type {?} */
    const te = t * (to - from) + from;
    /** @type {?} */
    const value = m(te);
    el.nativeElement.style[style] = value;
})))));
/** @type {?} */
export const fromToPixels = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
(target, from, to, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(fromTo(target, style, from, to, (/**
 * @param {?} t
 * @return {?}
 */
t => `${t}px`)))));
/** @type {?} */
export const toPixels = (/**
 * @param {?} target
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
(target, to, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(fromToPixels(target, getStylePixels(target, style), to, style))));
/** @type {?} */
export const toBoxModel = (/**
 * @param {?} target
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
(target, toBox, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(toPixels(target, typeof toBox !== 'number' ? toBox.left || 0 : toBox, `${style}-left`), toPixels(target, typeof toBox !== 'number' ? toBox.right || 0 : toBox, `${style}-right`), toPixels(target, typeof toBox !== 'number' ? toBox.top || 0 : toBox, `${style}-top`), toPixels(target, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, `${style}-bottom`), removeStyles(target, boxModel(style)));
}));
/** @type {?} */
export const fromToBoxModel = (/**
 * @param {?} target
 * @param {?} fromBox
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
(target, fromBox, toBox, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(fromToPixels(target, typeof fromBox !== 'number' ? fromBox.left || 0 : fromBox, typeof toBox !== 'number' ? toBox.left || 0 : toBox, `${style}-left`), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.right || 0 : fromBox, typeof toBox !== 'number' ? toBox.right || 0 : toBox, `${style}-right`), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.top || 0 : fromBox, typeof toBox !== 'number' ? toBox.top || 0 : toBox, `${style}-top`), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.bottom || 0 : fromBox, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, `${style}-bottom`), removeStyles(target, boxModel(style)));
}));
/** @type {?} */
export const toPadding = (/**
 * @param {?} target
 * @param {?} padding
 * @return {?}
 */
(target, padding) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(toBoxModel(target, padding, 'padding'));
}));
/** @type {?} */
export const toMargin = (/**
 * @param {?} target
 * @param {?} margin
 * @return {?}
 */
(target, margin) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(toBoxModel(target, margin, 'margin'));
}));
/** @type {?} */
export const fromToPosition = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(target, from, to) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(fromToPixels(target, from.top, to.top, 'top'), fromToPixels(target, from.height, to.height, 'height'), fromToPixels(target, from.left, to.left, 'left'), fromToPixels(target, from.width, to.width, 'width'), removeStyles(target, position));
}));
/** @type {?} */
export const toPosition = (/**
 * @param {?} target
 * @param {?} to
 * @return {?}
 */
(target, to) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(toPixels(target, to.top, 'top'), toPixels(target, to.left, 'left'), toPixels(target, to.height, 'height'), toPixels(target, to.width, 'width'), removeStyles(target, position));
}));
/** @type {?} */
export const toBoxShadow = (/**
 * @param {?} target
 * @param {?} boxShadow
 * @return {?}
 */
(target, boxShadow) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    const ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    const pfBS = parseBoxShadow(boxShadow);
    return source.pipe(fromTo(target, 'box-shadow', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    t => {
        const { tBS, fBS } = normalizeBoxShadows(ptBS, pfBS);
        /** @type {?} */
        const tweenedBS = tBS.map((/**
         * @param {?} bs
         * @param {?} index
         * @return {?}
         */
        (bs, index) => {
            /** @type {?} */
            const fBSi = fBS[index];
            /** @type {?} */
            const toColor = parseRgb(bs.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            const fromColor = parseRgb(fBSi.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            const rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}));
/** @type {?} */
export const fromToColor = (/**
 * @param {?} target
 * @param {?} fromColor
 * @param {?=} style
 * @return {?}
 */
(target, fromColor, style = 'color') => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const targetColor = getComputedStyle(target.nativeElement).getPropertyValue(style);
    /** @type {?} */
    const tRGB = parseRgb(targetColor);
    /** @type {?} */
    const fRGB = parseRgb(fromColor);
    console.log('from to', fRGB, tRGB);
    return source.pipe(fromTo(target, style, 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    t => getTweenedRgb(tRGB, fRGB, t))), removeStyles(target, color));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS10by5vcGVyYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvb3BlcmF0b3JzL2Zyb20tdG8ub3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVuRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ25CLE1BQU0sMEJBQTBCLENBQUM7O0FBRWxDLE1BQU0sT0FBTyxNQUFNOzs7Ozs7OztBQUFHLENBQ3BCLEVBQWMsRUFDZCxLQUFhLEVBQ2IsSUFBWSxFQUNaLEVBQVUsRUFDVixDQUF3QixFQUN4QixFQUFFOzs7OztBQUFDLENBQUksTUFBMEIsRUFBRSxFQUFFLENBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsR0FBRzs7OztBQUFDLENBQUMsQ0FBQyxFQUFFOztVQUNBLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSTs7VUFDM0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3hDLENBQUMsRUFBQyxDQUNILENBQUEsQ0FBQTs7QUFFSCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztBQUFHLENBQzFCLE1BQWtCLEVBQ2xCLElBQVksRUFDWixFQUFVLEVBQ1YsS0FBYSxFQUNiLEVBQUU7Ozs7O0FBQUMsQ0FBSSxNQUEwQixFQUFFLEVBQUUsQ0FDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTs7OztBQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUEsQ0FBQTs7QUFFN0QsTUFBTSxPQUFPLFFBQVE7Ozs7OztBQUFHLENBQUMsTUFBa0IsRUFBRSxFQUFVLEVBQUUsS0FBYSxFQUFFLEVBQUU7Ozs7O0FBQUMsQ0FDekUsTUFBMEIsRUFDMUIsRUFBRSxDQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUE7O0FBRTdFLE1BQU0sT0FBTyxVQUFVOzs7Ozs7QUFBRyxDQUN4QixNQUFrQixFQUNsQixLQUF3QixFQUN4QixLQUFhLEVBQ2IsRUFBRTs7Ozs7QUFBQyxDQUFJLE1BQTBCLEVBQUUsRUFBRTtJQUNyQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQ2hCLFFBQVEsQ0FDTixNQUFNLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNuRCxHQUFHLEtBQUssT0FBTyxDQUNoQixFQUNELFFBQVEsQ0FDTixNQUFNLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwRCxHQUFHLEtBQUssUUFBUSxDQUNqQixFQUNELFFBQVEsQ0FDTixNQUFNLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNsRCxHQUFHLEtBQUssTUFBTSxDQUNmLEVBQ0QsUUFBUSxDQUNOLE1BQU0sRUFDTixPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3JELEdBQUcsS0FBSyxTQUFTLENBQ2xCLEVBQ0QsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdEMsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFBOztBQUVELE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0FBQUcsQ0FDNUIsTUFBa0IsRUFDbEIsT0FBMEIsRUFDMUIsS0FBd0IsRUFDeEIsS0FBYSxFQUNiLEVBQUU7Ozs7O0FBQUMsQ0FBSSxNQUEwQixFQUFFLEVBQUU7SUFDckMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixZQUFZLENBQ1YsTUFBTSxFQUNOLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDekQsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNuRCxHQUFHLEtBQUssT0FBTyxDQUNoQixFQUNELFlBQVksQ0FDVixNQUFNLEVBQ04sT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUMxRCxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BELEdBQUcsS0FBSyxRQUFRLENBQ2pCLEVBQ0QsWUFBWSxDQUNWLE1BQU0sRUFDTixPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQ3hELE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDbEQsR0FBRyxLQUFLLE1BQU0sQ0FDZixFQUNELFlBQVksQ0FDVixNQUFNLEVBQ04sT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUMzRCxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3JELEdBQUcsS0FBSyxTQUFTLENBQ2xCLEVBQ0QsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdEMsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFBOztBQUVELE1BQU0sT0FBTyxTQUFTOzs7OztBQUFHLENBQUMsTUFBa0IsRUFBRSxPQUEwQixFQUFFLEVBQUU7Ozs7O0FBQUMsQ0FHM0UsTUFBMEIsRUFDMUIsRUFBRTtJQUNGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQSxDQUFBOztBQUVELE1BQU0sT0FBTyxRQUFROzs7OztBQUFHLENBQUMsTUFBa0IsRUFBRSxNQUF5QixFQUFFLEVBQUU7Ozs7O0FBQUMsQ0FDekUsTUFBMEIsRUFDMUIsRUFBRTtJQUNGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQSxDQUFBOztBQUVELE1BQU0sT0FBTyxjQUFjOzs7Ozs7QUFBRyxDQUM1QixNQUFrQixFQUNsQixJQUFrQixFQUNsQixFQUFnQixFQUNoQixFQUFFOzs7OztBQUFDLENBQUksTUFBMEIsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDOUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFDN0MsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQ3RELFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUNoRCxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFDbkQsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FDL0IsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFBOztBQUVELE1BQU0sT0FBTyxVQUFVOzs7OztBQUFHLENBQUMsTUFBa0IsRUFBRSxFQUFnQixFQUFFLEVBQUU7Ozs7O0FBQUMsQ0FDbEUsTUFBMEIsRUFDMUIsRUFBRTtJQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDOUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQy9CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUNyQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQ25DLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQy9CLENBQUM7QUFDSixDQUFDLENBQUEsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sV0FBVzs7Ozs7QUFBRyxDQUFDLE1BQWtCLEVBQUUsU0FBaUIsRUFBRSxFQUFFOzs7OztBQUFDLENBQ3BFLE1BQTBCLEVBQzFCLEVBQUU7O1VBQ0ksUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDdEUsWUFBWSxDQUNiOztVQUVLLElBQUksR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDOztVQUMvQixJQUFJLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUN0QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUU7Y0FDL0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzs7Y0FDOUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFOztrQkFDaEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O2tCQUNqQixPQUFPLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDOztrQkFDdEQsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQzs7a0JBQzFELEdBQUcsR0FBRyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFFaEQsT0FBTyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUM7UUFDRixPQUFPLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsRUFBQyxFQUNGLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUNyQyxDQUFDO0FBQ0osQ0FBQyxDQUFBLENBQUE7O0FBRUQsTUFBTSxPQUFPLFdBQVc7Ozs7OztBQUFHLENBQ3pCLE1BQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLEtBQUssR0FBRyxPQUFPLEVBQ2YsRUFBRTs7Ozs7QUFBQyxDQUFJLE1BQTBCLEVBQUUsRUFBRTs7VUFDL0IsV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDekUsS0FBSyxDQUNOOztVQUNLLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDOztVQUM1QixJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzs7OztJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFDOUQsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDNUIsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgcmVtb3ZlU3R5bGVzIH0gZnJvbSAnLi91dGlsLm9wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHBvc2l0aW9uLCBjb2xvciwgYm94TW9kZWwgfSBmcm9tICcuLi9hbmltYXRpb25zL3N0eWxlcyc7XG5cbmltcG9ydCB7IFJlY3RQb3NpdGlvbiwgQm94TW9kZWwgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IGdldFN0eWxlUGl4ZWxzLCBwYXJzZVJnYiwgZ2V0VHdlZW5lZFJnYiB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgcGFyc2VCb3hTaGFkb3csXG4gIG5vcm1hbGl6ZUJveFNoYWRvd3MsXG4gIGdldFR3ZWVuZWRCb3hTaGFkb3csXG4gIHN0cmluZ2lmeUJveFNoYWRvd1xufSBmcm9tICcuLi9hbmltYXRpb25zL2JveC1zaGFkb3cnO1xuXG5leHBvcnQgY29uc3QgZnJvbVRvID0gKFxuICBlbDogRWxlbWVudFJlZixcbiAgc3R5bGU6IHN0cmluZyxcbiAgZnJvbTogbnVtYmVyLFxuICB0bzogbnVtYmVyLFxuICBtOiAodDogbnVtYmVyKSA9PiBzdHJpbmdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PlxuICBzb3VyY2UucGlwZShcbiAgICB0YXAodCA9PiB7XG4gICAgICBjb25zdCB0ZSA9IHQgKiAodG8gLSBmcm9tKSArIGZyb207XG4gICAgICBjb25zdCB2YWx1ZSA9IG0odGUpO1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICB9KVxuICApO1xuXG5leHBvcnQgY29uc3QgZnJvbVRvUGl4ZWxzID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIGZyb206IG51bWJlcixcbiAgdG86IG51bWJlcixcbiAgc3R5bGU6IHN0cmluZ1xuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+XG4gIHNvdXJjZS5waXBlKGZyb21Ubyh0YXJnZXQsIHN0eWxlLCBmcm9tLCB0bywgdCA9PiBgJHt0fXB4YCkpO1xuXG5leHBvcnQgY29uc3QgdG9QaXhlbHMgPSAodGFyZ2V0OiBFbGVtZW50UmVmLCB0bzogbnVtYmVyLCBzdHlsZTogc3RyaW5nKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+XG4gIHNvdXJjZS5waXBlKGZyb21Ub1BpeGVscyh0YXJnZXQsIGdldFN0eWxlUGl4ZWxzKHRhcmdldCwgc3R5bGUpLCB0bywgc3R5bGUpKTtcblxuZXhwb3J0IGNvbnN0IHRvQm94TW9kZWwgPSAoXG4gIHRhcmdldDogRWxlbWVudFJlZixcbiAgdG9Cb3g6IG51bWJlciB8IEJveE1vZGVsLFxuICBzdHlsZTogc3RyaW5nXG4pID0+IDxUPihzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgdG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICB0eXBlb2YgdG9Cb3ggIT09ICdudW1iZXInID8gdG9Cb3gubGVmdCB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tbGVmdGBcbiAgICApLFxuICAgIHRvUGl4ZWxzKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdHlwZW9mIHRvQm94ICE9PSAnbnVtYmVyJyA/IHRvQm94LnJpZ2h0IHx8IDAgOiB0b0JveCxcbiAgICAgIGAke3N0eWxlfS1yaWdodGBcbiAgICApLFxuICAgIHRvUGl4ZWxzKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdHlwZW9mIHRvQm94ICE9PSAnbnVtYmVyJyA/IHRvQm94LnRvcCB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tdG9wYFxuICAgICksXG4gICAgdG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICB0eXBlb2YgdG9Cb3ggIT09ICdudW1iZXInID8gdG9Cb3guYm90dG9tIHx8IDAgOiB0b0JveCxcbiAgICAgIGAke3N0eWxlfS1ib3R0b21gXG4gICAgKSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBib3hNb2RlbChzdHlsZSkpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZnJvbVRvQm94TW9kZWwgPSAoXG4gIHRhcmdldDogRWxlbWVudFJlZixcbiAgZnJvbUJveDogbnVtYmVyIHwgQm94TW9kZWwsXG4gIHRvQm94OiBudW1iZXIgfCBCb3hNb2RlbCxcbiAgc3R5bGU6IHN0cmluZ1xuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ub1BpeGVscyhcbiAgICAgIHRhcmdldCxcbiAgICAgIHR5cGVvZiBmcm9tQm94ICE9PSAnbnVtYmVyJyA/IGZyb21Cb3gubGVmdCB8fCAwIDogZnJvbUJveCxcbiAgICAgIHR5cGVvZiB0b0JveCAhPT0gJ251bWJlcicgPyB0b0JveC5sZWZ0IHx8IDAgOiB0b0JveCxcbiAgICAgIGAke3N0eWxlfS1sZWZ0YFxuICAgICksXG4gICAgZnJvbVRvUGl4ZWxzKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdHlwZW9mIGZyb21Cb3ggIT09ICdudW1iZXInID8gZnJvbUJveC5yaWdodCB8fCAwIDogZnJvbUJveCxcbiAgICAgIHR5cGVvZiB0b0JveCAhPT0gJ251bWJlcicgPyB0b0JveC5yaWdodCB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tcmlnaHRgXG4gICAgKSxcbiAgICBmcm9tVG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICB0eXBlb2YgZnJvbUJveCAhPT0gJ251bWJlcicgPyBmcm9tQm94LnRvcCB8fCAwIDogZnJvbUJveCxcbiAgICAgIHR5cGVvZiB0b0JveCAhPT0gJ251bWJlcicgPyB0b0JveC50b3AgfHwgMCA6IHRvQm94LFxuICAgICAgYCR7c3R5bGV9LXRvcGBcbiAgICApLFxuICAgIGZyb21Ub1BpeGVscyhcbiAgICAgIHRhcmdldCxcbiAgICAgIHR5cGVvZiBmcm9tQm94ICE9PSAnbnVtYmVyJyA/IGZyb21Cb3guYm90dG9tIHx8IDAgOiBmcm9tQm94LFxuICAgICAgdHlwZW9mIHRvQm94ICE9PSAnbnVtYmVyJyA/IHRvQm94LmJvdHRvbSB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tYm90dG9tYFxuICAgICksXG4gICAgcmVtb3ZlU3R5bGVzKHRhcmdldCwgYm94TW9kZWwoc3R5bGUpKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvUGFkZGluZyA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIHBhZGRpbmc6IG51bWJlciB8IEJveE1vZGVsKSA9PiA8XG4gIFRcbj4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRvQm94TW9kZWwodGFyZ2V0LCBwYWRkaW5nLCAncGFkZGluZycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b01hcmdpbiA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIG1hcmdpbjogbnVtYmVyIHwgQm94TW9kZWwpID0+IDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj5cbikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUodG9Cb3hNb2RlbCh0YXJnZXQsIG1hcmdpbiwgJ21hcmdpbicpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmcm9tVG9Qb3NpdGlvbiA9IChcbiAgdGFyZ2V0OiBFbGVtZW50UmVmLFxuICBmcm9tOiBSZWN0UG9zaXRpb24sXG4gIHRvOiBSZWN0UG9zaXRpb25cbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIHRhcmdldC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ub1BpeGVscyh0YXJnZXQsIGZyb20udG9wLCB0by50b3AsICd0b3AnKSxcbiAgICBmcm9tVG9QaXhlbHModGFyZ2V0LCBmcm9tLmhlaWdodCwgdG8uaGVpZ2h0LCAnaGVpZ2h0JyksXG4gICAgZnJvbVRvUGl4ZWxzKHRhcmdldCwgZnJvbS5sZWZ0LCB0by5sZWZ0LCAnbGVmdCcpLFxuICAgIGZyb21Ub1BpeGVscyh0YXJnZXQsIGZyb20ud2lkdGgsIHRvLndpZHRoLCAnd2lkdGgnKSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBwb3NpdGlvbilcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b1Bvc2l0aW9uID0gKHRhcmdldDogRWxlbWVudFJlZiwgdG86IFJlY3RQb3NpdGlvbikgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIHRhcmdldC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIHRvUGl4ZWxzKHRhcmdldCwgdG8udG9wLCAndG9wJyksXG4gICAgdG9QaXhlbHModGFyZ2V0LCB0by5sZWZ0LCAnbGVmdCcpLFxuICAgIHRvUGl4ZWxzKHRhcmdldCwgdG8uaGVpZ2h0LCAnaGVpZ2h0JyksXG4gICAgdG9QaXhlbHModGFyZ2V0LCB0by53aWR0aCwgJ3dpZHRoJyksXG4gICAgcmVtb3ZlU3R5bGVzKHRhcmdldCwgcG9zaXRpb24pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9Cb3hTaGFkb3cgPSAodGFyZ2V0OiBFbGVtZW50UmVmLCBib3hTaGFkb3c6IHN0cmluZykgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIGNvbnN0IHRhcmdldEJTID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAnYm94LXNoYWRvdydcbiAgKTtcblxuICBjb25zdCBwdEJTID0gcGFyc2VCb3hTaGFkb3codGFyZ2V0QlMpO1xuICBjb25zdCBwZkJTID0gcGFyc2VCb3hTaGFkb3coYm94U2hhZG93KTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ubyh0YXJnZXQsICdib3gtc2hhZG93JywgMCwgMSwgdCA9PiB7XG4gICAgICBjb25zdCB7IHRCUywgZkJTIH0gPSBub3JtYWxpemVCb3hTaGFkb3dzKHB0QlMsIHBmQlMpO1xuICAgICAgY29uc3QgdHdlZW5lZEJTID0gdEJTLm1hcCgoYnMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZCU2kgPSBmQlNbaW5kZXhdO1xuICAgICAgICBjb25zdCB0b0NvbG9yID0gcGFyc2VSZ2IoYnMuY29sb3IpIHx8IHBhcnNlUmdiKCdyZ2IoMCwwLDApJyk7XG4gICAgICAgIGNvbnN0IGZyb21Db2xvciA9IHBhcnNlUmdiKGZCU2kuY29sb3IpIHx8IHBhcnNlUmdiKCdyZ2IoMCwwLDApJyk7XG4gICAgICAgIGNvbnN0IHJnYiA9IGdldFR3ZWVuZWRSZ2IodG9Db2xvciwgZnJvbUNvbG9yLCB0KTtcblxuICAgICAgICByZXR1cm4gZ2V0VHdlZW5lZEJveFNoYWRvdyh0LCBicywgZkJTaSwgcmdiKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeUJveFNoYWRvdyh0d2VlbmVkQlMpO1xuICAgIH0pLFxuICAgIHJlbW92ZVN0eWxlcyh0YXJnZXQsIFsnYm94LXNoYWRvdyddKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21Ub0NvbG9yID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIGZyb21Db2xvcjogc3RyaW5nLFxuICBzdHlsZSA9ICdjb2xvcidcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIGNvbnN0IHRhcmdldENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICBzdHlsZVxuICApO1xuICBjb25zdCB0UkdCID0gcGFyc2VSZ2IodGFyZ2V0Q29sb3IpO1xuICBjb25zdCBmUkdCID0gcGFyc2VSZ2IoZnJvbUNvbG9yKTtcbiAgY29uc29sZS5sb2coJ2Zyb20gdG8nLCBmUkdCLCB0UkdCKTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ubyh0YXJnZXQsIHN0eWxlLCAwLCAxLCB0ID0+IGdldFR3ZWVuZWRSZ2IodFJHQiwgZlJHQiwgdCkpLFxuICAgIHJlbW92ZVN0eWxlcyh0YXJnZXQsIGNvbG9yKVxuICApO1xufTtcbiJdfQ==