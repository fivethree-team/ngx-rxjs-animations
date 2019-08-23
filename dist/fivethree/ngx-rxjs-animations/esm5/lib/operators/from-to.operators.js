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
export var fromTo = (/**
 * @param {?} el
 * @param {?} style
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
function (el, style, from, to, m) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(tap((/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var te = t * (to - from) + from;
        /** @type {?} */
        var value = m(te);
        el.nativeElement.style[style] = value;
    })));
}); });
/** @type {?} */
export var fromToPixels = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
function (target, from, to, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromTo(target, style, from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return t + "px"; })));
}); });
/** @type {?} */
export var toPixels = (/**
 * @param {?} target
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
function (target, to, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromToPixels(target, getStylePixels(target, style), to, style));
}); });
/** @type {?} */
export var toBoxModel = (/**
 * @param {?} target
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
function (target, toBox, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(toPixels(target, typeof toBox !== 'number' ? toBox.left || 0 : toBox, style + "-left"), toPixels(target, typeof toBox !== 'number' ? toBox.right || 0 : toBox, style + "-right"), toPixels(target, typeof toBox !== 'number' ? toBox.top || 0 : toBox, style + "-top"), toPixels(target, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, style + "-bottom"), removeStyles(target, boxModel(style)));
}); });
/** @type {?} */
export var fromToBoxModel = (/**
 * @param {?} target
 * @param {?} fromBox
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
function (target, fromBox, toBox, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromToPixels(target, typeof fromBox !== 'number' ? fromBox.left || 0 : fromBox, typeof toBox !== 'number' ? toBox.left || 0 : toBox, style + "-left"), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.right || 0 : fromBox, typeof toBox !== 'number' ? toBox.right || 0 : toBox, style + "-right"), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.top || 0 : fromBox, typeof toBox !== 'number' ? toBox.top || 0 : toBox, style + "-top"), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.bottom || 0 : fromBox, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, style + "-bottom"), removeStyles(target, boxModel(style)));
}); });
/** @type {?} */
export var toPadding = (/**
 * @param {?} target
 * @param {?} padding
 * @return {?}
 */
function (target, padding) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(toBoxModel(target, padding, 'padding'));
}); });
/** @type {?} */
export var toMargin = (/**
 * @param {?} target
 * @param {?} margin
 * @return {?}
 */
function (target, margin) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(toBoxModel(target, margin, 'margin'));
}); });
/** @type {?} */
export var fromToPosition = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (target, from, to) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(fromToPixels(target, from.top, to.top, 'top'), fromToPixels(target, from.height, to.height, 'height'), fromToPixels(target, from.left, to.left, 'left'), fromToPixels(target, from.width, to.width, 'width'), removeStyles(target, position));
}); });
/** @type {?} */
export var toPosition = (/**
 * @param {?} target
 * @param {?} to
 * @return {?}
 */
function (target, to) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(toPixels(target, to.top, 'top'), toPixels(target, to.left, 'left'), toPixels(target, to.height, 'height'), toPixels(target, to.width, 'width'), removeStyles(target, position));
}); });
/** @type {?} */
export var toBoxShadow = (/**
 * @param {?} target
 * @param {?} boxShadow
 * @return {?}
 */
function (target, boxShadow) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    var ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    var pfBS = parseBoxShadow(boxShadow);
    return source.pipe(fromTo(target, 'box-shadow', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        var _a = normalizeBoxShadows(ptBS, pfBS), tBS = _a.tBS, fBS = _a.fBS;
        /** @type {?} */
        var tweenedBS = tBS.map((/**
         * @param {?} bs
         * @param {?} index
         * @return {?}
         */
        function (bs, index) {
            /** @type {?} */
            var fBSi = fBS[index];
            /** @type {?} */
            var toColor = parseRgb(bs.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            var fromColor = parseRgb(fBSi.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            var rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}); });
/** @type {?} */
export var fromToColor = (/**
 * @param {?} target
 * @param {?} fromColor
 * @param {?=} style
 * @return {?}
 */
function (target, fromColor, style) {
    if (style === void 0) { style = 'color'; }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var targetColor = getComputedStyle(target.nativeElement).getPropertyValue(style);
        /** @type {?} */
        var tRGB = parseRgb(targetColor);
        /** @type {?} */
        var fRGB = parseRgb(fromColor);
        console.log('from to', fRGB, tRGB);
        return source.pipe(fromTo(target, style, 0, 1, (/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return getTweenedRgb(tRGB, fRGB, t); })), removeStyles(target, color));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS10by5vcGVyYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvb3BlcmF0b3JzL2Zyb20tdG8ub3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVuRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ25CLE1BQU0sMEJBQTBCLENBQUM7O0FBRWxDLE1BQU0sS0FBTyxNQUFNOzs7Ozs7OztBQUFHLFVBQ3BCLEVBQWMsRUFDZCxLQUFhLEVBQ2IsSUFBWSxFQUNaLEVBQVUsRUFDVixDQUF3Qjs7Ozs7QUFDckIsVUFBSSxNQUEwQjtJQUNqQyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQ1QsR0FBRzs7OztJQUFDLFVBQUEsQ0FBQzs7WUFDRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUk7O1lBQzNCLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDLEVBQUMsQ0FDSDtBQU5ELENBTUMsSUFBQSxDQUFBOztBQUVILE1BQU0sS0FBTyxZQUFZOzs7Ozs7O0FBQUcsVUFDMUIsTUFBa0IsRUFDbEIsSUFBWSxFQUNaLEVBQVUsRUFDVixLQUFhOzs7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QU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FDekUsS0FBSyxDQUNOOztZQUNLLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDOztZQUM1QixJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsRUFDOUQsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7Q0FBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgcmVtb3ZlU3R5bGVzIH0gZnJvbSAnLi91dGlsLm9wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHBvc2l0aW9uLCBjb2xvciwgYm94TW9kZWwgfSBmcm9tICcuLi9hbmltYXRpb25zL3N0eWxlcyc7XG5cbmltcG9ydCB7IFJlY3RQb3NpdGlvbiwgQm94TW9kZWwgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IGdldFN0eWxlUGl4ZWxzLCBwYXJzZVJnYiwgZ2V0VHdlZW5lZFJnYiB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgcGFyc2VCb3hTaGFkb3csXG4gIG5vcm1hbGl6ZUJveFNoYWRvd3MsXG4gIGdldFR3ZWVuZWRCb3hTaGFkb3csXG4gIHN0cmluZ2lmeUJveFNoYWRvd1xufSBmcm9tICcuLi9hbmltYXRpb25zL2JveC1zaGFkb3cnO1xuXG5leHBvcnQgY29uc3QgZnJvbVRvID0gKFxuICBlbDogRWxlbWVudFJlZixcbiAgc3R5bGU6IHN0cmluZyxcbiAgZnJvbTogbnVtYmVyLFxuICB0bzogbnVtYmVyLFxuICBtOiAodDogbnVtYmVyKSA9PiBzdHJpbmdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PlxuICBzb3VyY2UucGlwZShcbiAgICB0YXAodCA9PiB7XG4gICAgICBjb25zdCB0ZSA9IHQgKiAodG8gLSBmcm9tKSArIGZyb207XG4gICAgICBjb25zdCB2YWx1ZSA9IG0odGUpO1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICB9KVxuICApO1xuXG5leHBvcnQgY29uc3QgZnJvbVRvUGl4ZWxzID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIGZyb206IG51bWJlcixcbiAgdG86IG51bWJlcixcbiAgc3R5bGU6IHN0cmluZ1xuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+XG4gIHNvdXJjZS5waXBlKGZyb21Ubyh0YXJnZXQsIHN0eWxlLCBmcm9tLCB0bywgdCA9PiBgJHt0fXB4YCkpO1xuXG5leHBvcnQgY29uc3QgdG9QaXhlbHMgPSAodGFyZ2V0OiBFbGVtZW50UmVmLCB0bzogbnVtYmVyLCBzdHlsZTogc3RyaW5nKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+XG4gIHNvdXJjZS5waXBlKGZyb21Ub1BpeGVscyh0YXJnZXQsIGdldFN0eWxlUGl4ZWxzKHRhcmdldCwgc3R5bGUpLCB0bywgc3R5bGUpKTtcblxuZXhwb3J0IGNvbnN0IHRvQm94TW9kZWwgPSAoXG4gIHRhcmdldDogRWxlbWVudFJlZixcbiAgdG9Cb3g6IG51bWJlciB8IEJveE1vZGVsLFxuICBzdHlsZTogc3RyaW5nXG4pID0+IDxUPihzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgdG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICB0eXBlb2YgdG9Cb3ggIT09ICdudW1iZXInID8gdG9Cb3gubGVmdCB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tbGVmdGBcbiAgICApLFxuICAgIHRvUGl4ZWxzKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdHlwZW9mIHRvQm94ICE9PSAnbnVtYmVyJyA/IHRvQm94LnJpZ2h0IHx8IDAgOiB0b0JveCxcbiAgICAgIGAke3N0eWxlfS1yaWdodGBcbiAgICApLFxuICAgIHRvUGl4ZWxzKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdHlwZW9mIHRvQm94ICE9PSAnbnVtYmVyJyA/IHRvQm94LnRvcCB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tdG9wYFxuICAgICksXG4gICAgdG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICB0eXBlb2YgdG9Cb3ggIT09ICdudW1iZXInID8gdG9Cb3guYm90dG9tIHx8IDAgOiB0b0JveCxcbiAgICAgIGAke3N0eWxlfS1ib3R0b21gXG4gICAgKSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBib3hNb2RlbChzdHlsZSkpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZnJvbVRvQm94TW9kZWwgPSAoXG4gIHRhcmdldDogRWxlbWVudFJlZixcbiAgZnJvbUJveDogbnVtYmVyIHwgQm94TW9kZWwsXG4gIHRvQm94OiBudW1iZXIgfCBCb3hNb2RlbCxcbiAgc3R5bGU6IHN0cmluZ1xuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ub1BpeGVscyhcbiAgICAgIHRhcmdldCxcbiAgICAgIHR5cGVvZiBmcm9tQm94ICE9PSAnbnVtYmVyJyA/IGZyb21Cb3gubGVmdCB8fCAwIDogZnJvbUJveCxcbiAgICAgIHR5cGVvZiB0b0JveCAhPT0gJ251bWJlcicgPyB0b0JveC5sZWZ0IHx8IDAgOiB0b0JveCxcbiAgICAgIGAke3N0eWxlfS1sZWZ0YFxuICAgICksXG4gICAgZnJvbVRvUGl4ZWxzKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdHlwZW9mIGZyb21Cb3ggIT09ICdudW1iZXInID8gZnJvbUJveC5yaWdodCB8fCAwIDogZnJvbUJveCxcbiAgICAgIHR5cGVvZiB0b0JveCAhPT0gJ251bWJlcicgPyB0b0JveC5yaWdodCB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tcmlnaHRgXG4gICAgKSxcbiAgICBmcm9tVG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICB0eXBlb2YgZnJvbUJveCAhPT0gJ251bWJlcicgPyBmcm9tQm94LnRvcCB8fCAwIDogZnJvbUJveCxcbiAgICAgIHR5cGVvZiB0b0JveCAhPT0gJ251bWJlcicgPyB0b0JveC50b3AgfHwgMCA6IHRvQm94LFxuICAgICAgYCR7c3R5bGV9LXRvcGBcbiAgICApLFxuICAgIGZyb21Ub1BpeGVscyhcbiAgICAgIHRhcmdldCxcbiAgICAgIHR5cGVvZiBmcm9tQm94ICE9PSAnbnVtYmVyJyA/IGZyb21Cb3guYm90dG9tIHx8IDAgOiBmcm9tQm94LFxuICAgICAgdHlwZW9mIHRvQm94ICE9PSAnbnVtYmVyJyA/IHRvQm94LmJvdHRvbSB8fCAwIDogdG9Cb3gsXG4gICAgICBgJHtzdHlsZX0tYm90dG9tYFxuICAgICksXG4gICAgcmVtb3ZlU3R5bGVzKHRhcmdldCwgYm94TW9kZWwoc3R5bGUpKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvUGFkZGluZyA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIHBhZGRpbmc6IG51bWJlciB8IEJveE1vZGVsKSA9PiA8XG4gIFRcbj4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRvQm94TW9kZWwodGFyZ2V0LCBwYWRkaW5nLCAncGFkZGluZycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b01hcmdpbiA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIG1hcmdpbjogbnVtYmVyIHwgQm94TW9kZWwpID0+IDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj5cbikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUodG9Cb3hNb2RlbCh0YXJnZXQsIG1hcmdpbiwgJ21hcmdpbicpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmcm9tVG9Qb3NpdGlvbiA9IChcbiAgdGFyZ2V0OiBFbGVtZW50UmVmLFxuICBmcm9tOiBSZWN0UG9zaXRpb24sXG4gIHRvOiBSZWN0UG9zaXRpb25cbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIHRhcmdldC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ub1BpeGVscyh0YXJnZXQsIGZyb20udG9wLCB0by50b3AsICd0b3AnKSxcbiAgICBmcm9tVG9QaXhlbHModGFyZ2V0LCBmcm9tLmhlaWdodCwgdG8uaGVpZ2h0LCAnaGVpZ2h0JyksXG4gICAgZnJvbVRvUGl4ZWxzKHRhcmdldCwgZnJvbS5sZWZ0LCB0by5sZWZ0LCAnbGVmdCcpLFxuICAgIGZyb21Ub1BpeGVscyh0YXJnZXQsIGZyb20ud2lkdGgsIHRvLndpZHRoLCAnd2lkdGgnKSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBwb3NpdGlvbilcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b1Bvc2l0aW9uID0gKHRhcmdldDogRWxlbWVudFJlZiwgdG86IFJlY3RQb3NpdGlvbikgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIHRhcmdldC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIHRvUGl4ZWxzKHRhcmdldCwgdG8udG9wLCAndG9wJyksXG4gICAgdG9QaXhlbHModGFyZ2V0LCB0by5sZWZ0LCAnbGVmdCcpLFxuICAgIHRvUGl4ZWxzKHRhcmdldCwgdG8uaGVpZ2h0LCAnaGVpZ2h0JyksXG4gICAgdG9QaXhlbHModGFyZ2V0LCB0by53aWR0aCwgJ3dpZHRoJyksXG4gICAgcmVtb3ZlU3R5bGVzKHRhcmdldCwgcG9zaXRpb24pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9Cb3hTaGFkb3cgPSAodGFyZ2V0OiBFbGVtZW50UmVmLCBib3hTaGFkb3c6IHN0cmluZykgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIGNvbnN0IHRhcmdldEJTID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAnYm94LXNoYWRvdydcbiAgKTtcblxuICBjb25zdCBwdEJTID0gcGFyc2VCb3hTaGFkb3codGFyZ2V0QlMpO1xuICBjb25zdCBwZkJTID0gcGFyc2VCb3hTaGFkb3coYm94U2hhZG93KTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ubyh0YXJnZXQsICdib3gtc2hhZG93JywgMCwgMSwgdCA9PiB7XG4gICAgICBjb25zdCB7IHRCUywgZkJTIH0gPSBub3JtYWxpemVCb3hTaGFkb3dzKHB0QlMsIHBmQlMpO1xuICAgICAgY29uc3QgdHdlZW5lZEJTID0gdEJTLm1hcCgoYnMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZCU2kgPSBmQlNbaW5kZXhdO1xuICAgICAgICBjb25zdCB0b0NvbG9yID0gcGFyc2VSZ2IoYnMuY29sb3IpIHx8IHBhcnNlUmdiKCdyZ2IoMCwwLDApJyk7XG4gICAgICAgIGNvbnN0IGZyb21Db2xvciA9IHBhcnNlUmdiKGZCU2kuY29sb3IpIHx8IHBhcnNlUmdiKCdyZ2IoMCwwLDApJyk7XG4gICAgICAgIGNvbnN0IHJnYiA9IGdldFR3ZWVuZWRSZ2IodG9Db2xvciwgZnJvbUNvbG9yLCB0KTtcblxuICAgICAgICByZXR1cm4gZ2V0VHdlZW5lZEJveFNoYWRvdyh0LCBicywgZkJTaSwgcmdiKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeUJveFNoYWRvdyh0d2VlbmVkQlMpO1xuICAgIH0pLFxuICAgIHJlbW92ZVN0eWxlcyh0YXJnZXQsIFsnYm94LXNoYWRvdyddKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21Ub0NvbG9yID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIGZyb21Db2xvcjogc3RyaW5nLFxuICBzdHlsZSA9ICdjb2xvcidcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIGNvbnN0IHRhcmdldENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICBzdHlsZVxuICApO1xuICBjb25zdCB0UkdCID0gcGFyc2VSZ2IodGFyZ2V0Q29sb3IpO1xuICBjb25zdCBmUkdCID0gcGFyc2VSZ2IoZnJvbUNvbG9yKTtcbiAgY29uc29sZS5sb2coJ2Zyb20gdG8nLCBmUkdCLCB0UkdCKTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ubyh0YXJnZXQsIHN0eWxlLCAwLCAxLCB0ID0+IGdldFR3ZWVuZWRSZ2IodFJHQiwgZlJHQiwgdCkpLFxuICAgIHJlbW92ZVN0eWxlcyh0YXJnZXQsIGNvbG9yKVxuICApO1xufTtcbiJdfQ==