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
export const morphStylePixels = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
(target, fromEl, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(fromToPixels(target, getStylePixels(fromEl, style), getStylePixels(target, style), style))));
/** @type {?} */
export const morphBoxModel = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
(target, fromEl, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphStylePixels(target, fromEl, `${style}-left`), morphStylePixels(target, fromEl, `${style}-right`), morphStylePixels(target, fromEl, `${style}-top`), morphStylePixels(target, fromEl, `${style}-bottom`));
}));
/** @type {?} */
export const morphPosition = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const to = getPosition(target);
    /** @type {?} */
    const from = getPosition(fromEl);
    return source.pipe(fromToPosition(target, from, to));
}));
/** @type {?} */
export const morphBoxShadow = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    const fromBS = getComputedStyle(fromEl.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    const ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    const pfBS = parseBoxShadow(fromBS);
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
            fBSi.color = fBSi.color === 'none' ? 'rgba(0,0,0,0)' : fBSi.color;
            bs.color = bs.color === 'none' ? fBSi.color : bs.color;
            /** @type {?} */
            const toColor = parseRgb(bs.color);
            /** @type {?} */
            const fromColor = parseRgb(fBSi.color);
            /** @type {?} */
            const rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}));
/** @type {?} */
export const morphElement = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphPosition(target, fromEl), morphBoxShadow(target, fromEl), morphStylePixels(target, fromEl, 'border-radius'), removeStyles(target, container));
}));
/** @type {?} */
export const morphColor = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?=} style
 * @return {?}
 */
(target, fromEl, style = 'color') => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(style);
    return source.pipe(fromToColor(target, fromColor, style), removeStyles(target, color));
}));
/** @type {?} */
export const morphText = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl), morphStylePixels(target, fromEl, 'font-size'), morphStylePixels(target, fromEl, 'font-weight'));
}));
/** @type {?} */
export const morph = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl, 'background-color'));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ycGgub3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9uZ3gtcnhqcy1hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL29wZXJhdG9ycy9tb3JwaC5vcGVyYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQzVFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbkIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGNBQWMsRUFDZCxNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0scUJBQXFCLENBQUM7O0FBRTdCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztBQUFHLENBQzlCLE1BQWtCLEVBQ2xCLE1BQWtCLEVBQ2xCLEtBQWEsRUFDYixFQUFFOzs7OztBQUFDLENBQUksTUFBMEIsRUFBRSxFQUFFLENBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsWUFBWSxDQUNWLE1BQU0sRUFDTixjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUM3QixjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUM3QixLQUFLLENBQ04sQ0FDRixDQUFBLENBQUE7O0FBRUgsTUFBTSxPQUFPLGFBQWE7Ozs7OztBQUFHLENBQzNCLE1BQWtCLEVBQ2xCLE1BQWtCLEVBQ2xCLEtBQUssRUFDTCxFQUFFOzs7OztBQUFDLENBQUksTUFBMEIsRUFBRSxFQUFFO0lBQ3JDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsZ0JBQWdCLENBQUMsTUFBTSxFQUFF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TSxPQUFPLEtBQUs7Ozs7O0FBQUcsQ0FBQyxNQUFrQixFQUFFLE1BQWtCLEVBQUUsRUFBRTs7Ozs7QUFBQyxDQUMvRCxNQUEwQixFQUMxQixFQUFFO0lBQ0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUM1QixhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFDeEMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FDL0MsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGdldFN0eWxlUGl4ZWxzLCBnZXRQb3NpdGlvbiwgcGFyc2VSZ2IsIGdldFR3ZWVuZWRSZ2IgfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCB7IHJlbW92ZVN0eWxlcyB9IGZyb20gJy4vdXRpbC5vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBjb250YWluZXIsIGNvbG9yLCBwb3NpdGlvbiwgYm94TW9kZWwgfSBmcm9tICcuLi9hbmltYXRpb25zL3N0eWxlcyc7XG5pbXBvcnQge1xuICBwYXJzZUJveFNoYWRvdyxcbiAgbm9ybWFsaXplQm94U2hhZG93cyxcbiAgZ2V0VHdlZW5lZEJveFNoYWRvdyxcbiAgc3RyaW5naWZ5Qm94U2hhZG93XG59IGZyb20gJy4uL2FuaW1hdGlvbnMvYm94LXNoYWRvdyc7XG5pbXBvcnQge1xuICBmcm9tVG9QaXhlbHMsXG4gIGZyb21Ub1Bvc2l0aW9uLFxuICBmcm9tVG8sXG4gIGZyb21Ub0NvbG9yXG59IGZyb20gJy4vZnJvbS10by5vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgbW9ycGhTdHlsZVBpeGVscyA9IChcbiAgdGFyZ2V0OiBFbGVtZW50UmVmLFxuICBmcm9tRWw6IEVsZW1lbnRSZWYsXG4gIHN0eWxlOiBzdHJpbmdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PlxuICBzb3VyY2UucGlwZShcbiAgICBmcm9tVG9QaXhlbHMoXG4gICAgICB0YXJnZXQsXG4gICAgICBnZXRTdHlsZVBpeGVscyhmcm9tRWwsIHN0eWxlKSxcbiAgICAgIGdldFN0eWxlUGl4ZWxzKHRhcmdldCwgc3R5bGUpLFxuICAgICAgc3R5bGVcbiAgICApXG4gICk7XG5cbmV4cG9ydCBjb25zdCBtb3JwaEJveE1vZGVsID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIGZyb21FbDogRWxlbWVudFJlZixcbiAgc3R5bGVcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIHJldHVybiBzb3VyY2UucGlwZShcbiAgICBtb3JwaFN0eWxlUGl4ZWxzKHRhcmdldCwgZnJvbUVsLCBgJHtzdHlsZX0tbGVmdGApLFxuICAgIG1vcnBoU3R5bGVQaXhlbHModGFyZ2V0LCBmcm9tRWwsIGAke3N0eWxlfS1yaWdodGApLFxuICAgIG1vcnBoU3R5bGVQaXhlbHModGFyZ2V0LCBmcm9tRWwsIGAke3N0eWxlfS10b3BgKSxcbiAgICBtb3JwaFN0eWxlUGl4ZWxzKHRhcmdldCwgZnJvbUVsLCBgJHtzdHlsZX0tYm90dG9tYClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3JwaFBvc2l0aW9uID0gKHRhcmdldDogRWxlbWVudFJlZiwgZnJvbUVsOiBFbGVtZW50UmVmKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgY29uc3QgdG8gPSBnZXRQb3NpdGlvbih0YXJnZXQpO1xuICBjb25zdCBmcm9tID0gZ2V0UG9zaXRpb24oZnJvbUVsKTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKGZyb21Ub1Bvc2l0aW9uKHRhcmdldCwgZnJvbSwgdG8pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3JwaEJveFNoYWRvdyA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIGZyb21FbDogRWxlbWVudFJlZikgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIGNvbnN0IHRhcmdldEJTID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAnYm94LXNoYWRvdydcbiAgKTtcbiAgY29uc3QgZnJvbUJTID0gZ2V0Q29tcHV0ZWRTdHlsZShmcm9tRWwubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAnYm94LXNoYWRvdydcbiAgKTtcblxuICBjb25zdCBwdEJTID0gcGFyc2VCb3hTaGFkb3codGFyZ2V0QlMpO1xuICBjb25zdCBwZkJTID0gcGFyc2VCb3hTaGFkb3coZnJvbUJTKTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ubyh0YXJnZXQsICdib3gtc2hhZG93JywgMCwgMSwgdCA9PiB7XG4gICAgICBjb25zdCB7IHRCUywgZkJTIH0gPSBub3JtYWxpemVCb3hTaGFkb3dzKHB0QlMsIHBmQlMpO1xuICAgICAgY29uc3QgdHdlZW5lZEJTID0gdEJTLm1hcCgoYnMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZCU2kgPSBmQlNbaW5kZXhdO1xuICAgICAgICBmQlNpLmNvbG9yID0gZkJTaS5jb2xvciA9PT0gJ25vbmUnID8gJ3JnYmEoMCwwLDAsMCknIDogZkJTaS5jb2xvcjtcbiAgICAgICAgYnMuY29sb3IgPSBicy5jb2xvciA9PT0gJ25vbmUnID8gZkJTaS5jb2xvciA6IGJzLmNvbG9yO1xuXG4gICAgICAgIGNvbnN0IHRvQ29sb3IgPSBwYXJzZVJnYihicy5jb2xvcik7XG4gICAgICAgIGNvbnN0IGZyb21Db2xvciA9IHBhcnNlUmdiKGZCU2kuY29sb3IpO1xuICAgICAgICBjb25zdCByZ2IgPSBnZXRUd2VlbmVkUmdiKHRvQ29sb3IsIGZyb21Db2xvciwgdCk7XG5cbiAgICAgICAgcmV0dXJuIGdldFR3ZWVuZWRCb3hTaGFkb3codCwgYnMsIGZCU2ksIHJnYik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlCb3hTaGFkb3codHdlZW5lZEJTKTtcbiAgICB9KSxcbiAgICByZW1vdmVTdHlsZXModGFyZ2V0LCBbJ2JveC1zaGFkb3cnXSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3JwaEVsZW1lbnQgPSAodGFyZ2V0OiBFbGVtZW50UmVmLCBmcm9tRWw6IEVsZW1lbnRSZWYpID0+IDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPG51bWJlcj5cbikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgbW9ycGhQb3NpdGlvbih0YXJnZXQsIGZyb21FbCksXG4gICAgbW9ycGhCb3hTaGFkb3codGFyZ2V0LCBmcm9tRWwpLFxuICAgIG1vcnBoU3R5bGVQaXhlbHModGFyZ2V0LCBmcm9tRWwsICdib3JkZXItcmFkaXVzJyksXG4gICAgcmVtb3ZlU3R5bGVzKHRhcmdldCwgY29udGFpbmVyKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vcnBoQ29sb3IgPSAoXG4gIHRhcmdldDogRWxlbWVudFJlZixcbiAgZnJvbUVsOiBFbGVtZW50UmVmLFxuICBzdHlsZSA9ICdjb2xvcidcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIGNvbnN0IGZyb21Db2xvciA9IGdldENvbXB1dGVkU3R5bGUoZnJvbUVsLm5hdGl2ZUVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXG4gICAgc3R5bGVcbiAgKTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGZyb21Ub0NvbG9yKHRhcmdldCwgZnJvbUNvbG9yLCBzdHlsZSksXG4gICAgcmVtb3ZlU3R5bGVzKHRhcmdldCwgY29sb3IpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbW9ycGhUZXh0ID0gKHRhcmdldDogRWxlbWVudFJlZiwgZnJvbUVsOiBFbGVtZW50UmVmKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIG1vcnBoRWxlbWVudCh0YXJnZXQsIGZyb21FbCksXG4gICAgbW9ycGhCb3hNb2RlbCh0YXJnZXQsIGZyb21FbCwgJ3BhZGRpbmcnKSxcbiAgICBtb3JwaENvbG9yKHRhcmdldCwgZnJvbUVsKSxcbiAgICBtb3JwaFN0eWxlUGl4ZWxzKHRhcmdldCwgZnJvbUVsLCAnZm9udC1zaXplJyksXG4gICAgbW9ycGhTdHlsZVBpeGVscyh0YXJnZXQsIGZyb21FbCwgJ2ZvbnQtd2VpZ2h0JylcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb3JwaCA9ICh0YXJnZXQ6IEVsZW1lbnRSZWYsIGZyb21FbDogRWxlbWVudFJlZikgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPlxuKSA9PiB7XG4gIHJldHVybiBzb3VyY2UucGlwZShcbiAgICBtb3JwaEVsZW1lbnQodGFyZ2V0LCBmcm9tRWwpLFxuICAgIG1vcnBoQm94TW9kZWwodGFyZ2V0LCBmcm9tRWwsICdwYWRkaW5nJyksXG4gICAgbW9ycGhDb2xvcih0YXJnZXQsIGZyb21FbCwgJ2JhY2tncm91bmQtY29sb3InKVxuICApO1xufTtcbiJdfQ==