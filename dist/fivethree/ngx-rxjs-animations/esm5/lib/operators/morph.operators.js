/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getStylePixels, getPosition, parseRgb, getTweenedRgb } from '../utils';
import { removeStyles } from './util.operators';
import { container, color } from '../animations/styles';
import { parseBoxShadow, normalizeBoxShadows, getTweenedBoxShadow, stringifyBoxShadow } from '../animations/box-shadow';
import { fromToPixels, fromToPosition, fromTo, fromToColor } from './from-to.operators';
/** @type {?} */
export var morphStylePixels = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
function (target, fromEl, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromToPixels(target, getStylePixels(fromEl, style), getStylePixels(target, style), style));
}); });
/** @type {?} */
export var morphBoxModel = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
function (target, fromEl, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphStylePixels(target, fromEl, style + "-left"), morphStylePixels(target, fromEl, style + "-right"), morphStylePixels(target, fromEl, style + "-top"), morphStylePixels(target, fromEl, style + "-bottom"));
}); });
/** @type {?} */
export var morphPosition = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var to = getPosition(target);
    /** @type {?} */
    var from = getPosition(fromEl);
    return source.pipe(fromToPosition(target, from, to));
}); });
/** @type {?} */
export var morphBoxShadow = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    var fromBS = getComputedStyle(fromEl.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    var ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    var pfBS = parseBoxShadow(fromBS);
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
            fBSi.color = fBSi.color === 'none' ? 'rgba(0,0,0,0)' : fBSi.color;
            bs.color = bs.color === 'none' ? fBSi.color : bs.color;
            /** @type {?} */
            var toColor = parseRgb(bs.color);
            /** @type {?} */
            var fromColor = parseRgb(fBSi.color);
            /** @type {?} */
            var rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}); });
/** @type {?} */
export var morphElement = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphPosition(target, fromEl), morphBoxShadow(target, fromEl), morphStylePixels(target, fromEl, 'border-radius'), removeStyles(target, container));
}); });
/** @type {?} */
export var morphColor = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?=} style
 * @return {?}
 */
function (target, fromEl, style) {
    if (style === void 0) { style = 'color'; }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(style);
        return source.pipe(fromToColor(target, fromColor, style), removeStyles(target, color));
    });
});
/** @type {?} */
export var morphText = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl), morphStylePixels(target, fromEl, 'font-size'), morphStylePixels(target, fromEl, 'font-weight'));
}); });
/** @type {?} */
export var morph = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl, 'background-color'));
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ycGgub3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9uZ3gtcnhqcy1hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL29wZXJhdG9ycy9tb3JwaC5vcGVyYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQzVFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbkIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGNBQWMsRUFDZCxNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0scUJBQXFCLENBQUM7O0FBRTdCLE1BQU0sS0FBTyxnQkFBZ0I7Ozs7OztBQUFHLFVBQzlCLE1BQWtCLEVBQ2xCLE1BQWtCLEVBQ2xCLEtBQWE7Ozs7O0FBQ1YsVUFBSSxNQUEwQjtJQUNqQyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQ1QsWUFBWSxDQUNWLE1BQU0sRUFDTixjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUM3QixjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUM3QixLQUFLLENBQ04sQ0FDRjtBQVBELENBT0MsSUFBQSxDQUFBOztBQUVILE1BQU0sS0FBTyxhQUFhOzs7Ozs7QUFBRyxVQUMzQixNQUFrQixFQUNsQixNQUFrQixFQUNsQixLQUFLOzs7OztBQUNGLFVBQUksTUFBMEI7SUFDakMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFLLEtBQUssVUFBTyxDQUFD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QyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUMvQyxDQUFDO0FBQ0osQ0FBQyxJQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZ2V0U3R5bGVQaXhlbHMsIGdldFBvc2l0aW9uLCBwYXJzZVJnYiwgZ2V0VHdlZW5lZFJnYiB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IHsgcmVtb3ZlU3R5bGVzIH0gZnJvbSAnLi91dGlsLm9wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGNvbnRhaW5lciwgY29sb3IsIHBvc2l0aW9uLCBib3hNb2RlbCB9IGZyb20gJy4uL2FuaW1hdGlvbnMvc3R5bGVzJztcbmltcG9ydCB7XG4gIHBhcnNlQm94U2hhZG93LFxuICBub3JtYWxpemVCb3hTaGFkb3dzLFxuICBnZXRUd2VlbmVkQm94U2hhZG93LFxuICBzdHJpbmdpZnlCb3hTaGFkb3dcbn0gZnJvbSAnLi4vYW5pbWF0aW9ucy9ib3gtc2hhZG93JztcbmltcG9ydCB7XG4gIGZyb21Ub1BpeGVscyxcbiAgZnJvbVRvUG9zaXRpb24sXG4gIGZyb21UbyxcbiAgZnJvbVRvQ29sb3Jcbn0gZnJvbSAnLi9mcm9tLXRvLm9wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBtb3JwaFN0eWxlUGl4ZWxzID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIGZyb21FbDogRWxlbWVudFJlZixcbiAgc3R5bGU6IHN0cmluZ1xuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+XG4gIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ub1BpeGVscyhcbiAgICAgIHRhcmdldCxcbiAgICAgIGdldFN0eWxlUGl4ZWxzKGZyb21FbCwgc3R5bGUpLFxuICAgICAgZ2V0U3R5bGVQaXhlbHModGFyZ2V0LCBzdHlsZSksXG4gICAgICBzdHlsZVxuICAgIClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IG1vcnBoQm94TW9kZWwgPSAoXG4gIHRhcmdldDogRWxlbWVudFJlZixcbiAgZnJvbUVsOiBFbGVtZW50UmVmLFxuICBzdHlsZVxuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIG1vcnBoU3R5bGVQaXhlbHModGFyZ2V0LCBmcm9tRWwsIGAke3N0eWxlfS1sZWZ0YCksXG4gICAgbW9ycGhTdHlsZVBpeGVscyh0YXJnZXQsIGZyb21FbCwgYCR7c3R5bGV9LXJpZ2h0YCksXG4gICAgbW9ycGhTdHlsZVBpeGVscyh0YXJnZXQsIGZyb21FbCwgYCR7c3R5bGV9LXRvcGApLFxuICAgIG1vcnBoU3R5bGVQaXhlbHModGFyZ2V0LCBmcm9tRWwsIGAke3N0eWxlfS1ib3R0b21gKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vcnBoUG9zaXRpb24gPSAodGFyZ2V0OiBFbGVtZW50UmVmLCBmcm9tRWw6IEVsZW1lbnRSZWYpID0+IDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj5cbikgPT4ge1xuICBjb25zdCB0byA9IGdldFBvc2l0aW9uKHRhcmdldCk7XG4gIGNvbnN0IGZyb20gPSBnZXRQb3NpdGlvbihmcm9tRWwpO1xuICByZXR1cm4gc291cmNlLnBpcGUoZnJvbVRvUG9zaXRpb24odGFyZ2V0LCBmcm9tLCB0bykpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vcnBoQm94U2hhZG93ID0gKHRhcmdldDogRWxlbWVudFJlZiwgZnJvbUVsOiBFbGVtZW50UmVmKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgY29uc3QgdGFyZ2V0QlMgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldC5uYXRpdmVFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICdib3gtc2hhZG93J1xuICApO1xuICBjb25zdCBmcm9tQlMgPSBnZXRDb21wdXRlZFN0eWxlKGZyb21FbC5uYXRpdmVFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICdib3gtc2hhZG93J1xuICApO1xuXG4gIGNvbnN0IHB0QlMgPSBwYXJzZUJveFNoYWRvdyh0YXJnZXRCUyk7XG4gIGNvbnN0IHBmQlMgPSBwYXJzZUJveFNoYWRvdyhmcm9tQlMpO1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgZnJvbVRvKHRhcmdldCwgJ2JveC1zaGFkb3cnLCAwLCAxLCB0ID0+IHtcbiAgICAgIGNvbnN0IHsgdEJTLCBmQlMgfSA9IG5vcm1hbGl6ZUJveFNoYWRvd3MocHRCUywgcGZCUyk7XG4gICAgICBjb25zdCB0d2VlbmVkQlMgPSB0QlMubWFwKChicywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZkJTaSA9IGZCU1tpbmRleF07XG4gICAgICAgIGZCU2kuY29sb3IgPSBmQlNpLmNvbG9yID09PSAnbm9uZScgPyAncmdiYSgwLDAsMCwwKScgOiBmQlNpLmNvbG9yO1xuICAgICAgICBicy5jb2xvciA9IGJzLmNvbG9yID09PSAnbm9uZScgPyBmQlNpLmNvbG9yIDogYnMuY29sb3I7XG5cbiAgICAgICAgY29uc3QgdG9Db2xvciA9IHBhcnNlUmdiKGJzLmNvbG9yKTtcbiAgICAgICAgY29uc3QgZnJvbUNvbG9yID0gcGFyc2VSZ2IoZkJTaS5jb2xvcik7XG4gICAgICAgIGNvbnN0IHJnYiA9IGdldFR3ZWVuZWRSZ2IodG9Db2xvciwgZnJvbUNvbG9yLCB0KTtcblxuICAgICAgICByZXR1cm4gZ2V0VHdlZW5lZEJveFNoYWRvdyh0LCBicywgZkJTaSwgcmdiKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeUJveFNoYWRvdyh0d2VlbmVkQlMpO1xuICAgIH0pLFxuICAgIHJlbW92ZVN0eWxlcyh0YXJnZXQsIFsnYm94LXNoYWRvdyddKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vcnBoRWxlbWVudCA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIGZyb21FbDogRWxlbWVudFJlZikgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIHJldHVybiBzb3VyY2UucGlwZShcbiAgICBtb3JwaFBvc2l0aW9uKHRhcmdldCwgZnJvbUVsKSxcbiAgICBtb3JwaEJveFNoYWRvdyh0YXJnZXQsIGZyb21FbCksXG4gICAgbW9ycGhTdHlsZVBpeGVscyh0YXJnZXQsIGZyb21FbCwgJ2JvcmRlci1yYWRpdXMnKSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBjb250YWluZXIpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbW9ycGhDb2xvciA9IChcbiAgdGFyZ2V0OiBFbGVtZW50UmVmLFxuICBmcm9tRWw6IEVsZW1lbnRSZWYsXG4gIHN0eWxlID0gJ2NvbG9yJ1xuKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj4pID0+IHtcbiAgY29uc3QgZnJvbUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShmcm9tRWwubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICBzdHlsZVxuICApO1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgZnJvbVRvQ29sb3IodGFyZ2V0LCBmcm9tQ29sb3IsIHN0eWxlKSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBjb2xvcilcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3JwaFRleHQgPSAodGFyZ2V0OiBFbGVtZW50UmVmLCBmcm9tRWw6IEVsZW1lbnRSZWYpID0+IDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj5cbikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgbW9ycGhFbGVtZW50KHRhcmdldCwgZnJvbUVsKSxcbiAgICBtb3JwaEJveE1vZGVsKHRhcmdldCwgZnJvbUVsLCAncGFkZGluZycpLFxuICAgIG1vcnBoQ29sb3IodGFyZ2V0LCBmcm9tRWwpLFxuICAgIG1vcnBoU3R5bGVQaXhlbHModGFyZ2V0LCBmcm9tRWwsICdmb250LXNpemUnKSxcbiAgICBtb3JwaFN0eWxlUGl4ZWxzKHRhcmdldCwgZnJvbUVsLCAnZm9udC13ZWlnaHQnKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vcnBoID0gKHRhcmdldDogRWxlbWVudFJlZiwgZnJvbUVsOiBFbGVtZW50UmVmKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIG1vcnBoRWxlbWVudCh0YXJnZXQsIGZyb21FbCksXG4gICAgbW9ycGhCb3hNb2RlbCh0YXJnZXQsIGZyb21FbCwgJ3BhZGRpbmcnKSxcbiAgICBtb3JwaENvbG9yKHRhcmdldCwgZnJvbUVsLCAnYmFja2dyb3VuZC1jb2xvcicpXG4gICk7XG59O1xuIl19