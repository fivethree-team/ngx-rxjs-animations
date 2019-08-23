/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tap, map, first, last } from 'rxjs/operators';
/** @type {?} */
export const reverse = (/**
 * @return {?}
 */
() => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(map((/**
 * @param {?} t
 * @return {?}
 */
t => 1 - t)))));
/** @type {?} */
export const before = (/**
 * @param {?} next
 * @return {?}
 */
(next) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    source
        .pipe(first(), tap(next))
        .subscribe();
    return source;
}));
/** @type {?} */
export const beforeStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
(target, style, value) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(before((/**
     * @return {?}
     */
    () => (target.nativeElement.style[style] = value))));
}));
/** @type {?} */
export const after = (/**
 * @param {?} next
 * @return {?}
 */
(next) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    source
        .pipe(last(), tap(next))
        .subscribe();
    return source;
}));
/** @type {?} */
export const afterStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
(target, style, value) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(after((/**
     * @return {?}
     */
    () => (target.nativeElement.style[style] = value))));
}));
/** @type {?} */
export const removeStyle = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
(el, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(after((/**
     * @return {?}
     */
    () => (el.nativeElement.style[style] = ''))));
}));
/** @type {?} */
export const removeStyles = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
(el, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(after((/**
     * @return {?}
     */
    () => style.forEach((/**
     * @param {?} s
     * @return {?}
     */
    s => (el.nativeElement.style[s] = ''))))));
}));
/** @type {?} */
export const transform = (/**
 * @param {?} target
 * @param {...?} ts
 * @return {?}
 */
(target, ...ts) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(tap((/**
     * @param {?} t
     * @return {?}
     */
    t => {
        /** @type {?} */
        const styles = ts.map((/**
         * @param {?} s
         * @return {?}
         */
        s => s(t))).join(' ');
        target.nativeElement.style.transform = styles;
    })));
}));
/** @type {?} */
export const fps = (/**
 * @return {?}
 */
() => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    let lastTime = 0;
    /** @type {?} */
    let startTime = 0;
    /** @type {?} */
    const frames = [];
    return source.pipe(before((/**
     * @return {?}
     */
    () => {
        lastTime = performance.now();
        startTime = lastTime;
    })), tap((/**
     * @return {?}
     */
    () => frames.push(1 / (performance.now() - lastTime)))), tap((/**
     * @return {?}
     */
    () => (lastTime = performance.now()))), after((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const duration = performance.now() - startTime;
        /** @type {?} */
        const f = frames.filter((/**
         * @param {?} item
         * @param {?} pos
         * @return {?}
         */
        function (item, pos) {
            return frames.indexOf(item) === pos;
        }));
    })));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5vcGVyYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvb3BlcmF0b3JzL3V0aWwub3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZELE1BQU0sT0FBTyxPQUFPOzs7QUFBRyxHQUFHLEVBQUU7Ozs7O0FBQUMsQ0FBSSxNQUEwQixFQUFFLEVBQUUsQ0FDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O0FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQSxDQUFBOztBQUU5QixNQUFNLE9BQU8sTUFBTTs7OztBQUFHLENBQUMsSUFBa0IsRUFBRSxFQUFFOzs7OztBQUFDLENBQUksTUFBcUIsRUFBRSxFQUFFO0lBQ3pFLE1BQU07U0FDSCxJQUFJLENBQ0gsS0FBSyxFQUFFLEVBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNWO1NBQ0EsU0FBUyxFQUFFLENBQUM7SUFDZixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUEsQ0FBQTs7QUFDRCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0FBQUcsQ0FDekIsTUFBa0IsRUFDbEIsS0FBYSxFQUNiLEtBQWEsRUFDYixFQUFFOzs7OztBQUFDLENBQUksTUFBcUIsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUEsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sS0FBSzs7OztBQUFHLENBQUMs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QUN6QyxLQUFLOzs7SUFBQyxHQUFHLEVBQUU7O2NBQ0gsUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTOztjQUN4QyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBUyxJQUFJLEVBQUUsR0FBRztZQUN4QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3RDLENBQUMsRUFBQztJQUNKLENBQUMsRUFBQyxDQUNILENBQUM7QUFDSixDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0YXAsIG1hcCwgZmlyc3QsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gKCkgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PlxuICBzb3VyY2UucGlwZShtYXAodCA9PiAxIC0gdCkpO1xuXG5leHBvcnQgY29uc3QgYmVmb3JlID0gKG5leHQ6ICh2PykgPT4gdm9pZCkgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICBzb3VyY2VcbiAgICAucGlwZShcbiAgICAgIGZpcnN0KCksXG4gICAgICB0YXAobmV4dClcbiAgICApXG4gICAgLnN1YnNjcmliZSgpO1xuICByZXR1cm4gc291cmNlO1xufTtcbmV4cG9ydCBjb25zdCBiZWZvcmVTdHlsZSA9IChcbiAgdGFyZ2V0OiBFbGVtZW50UmVmLFxuICBzdHlsZTogc3RyaW5nLFxuICB2YWx1ZTogc3RyaW5nXG4pID0+IDxUPihzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKGJlZm9yZSgoKSA9PiAodGFyZ2V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGVbc3R5bGVdID0gdmFsdWUpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWZ0ZXIgPSAobmV4dDogKHY/KSA9PiB2b2lkKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gIHNvdXJjZVxuICAgIC5waXBlKFxuICAgICAgbGFzdCgpLFxuICAgICAgdGFwKG5leHQpXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKTtcbiAgcmV0dXJuIHNvdXJjZTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZnRlclN0eWxlID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIHN0eWxlOiBzdHJpbmcsXG4gIHZhbHVlOiBzdHJpbmdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoYWZ0ZXIoKCkgPT4gKHRhcmdldC5uYXRpdmVFbGVtZW50LnN0eWxlW3N0eWxlXSA9IHZhbHVlKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0eWxlID0gKGVsOiBFbGVtZW50UmVmLCBzdHlsZSkgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8VD5cbikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoYWZ0ZXIoKCkgPT4gKGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGVbc3R5bGVdID0gJycpKSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZVN0eWxlcyA9IChlbDogRWxlbWVudFJlZiwgc3R5bGU6IHN0cmluZ1tdKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGFmdGVyKCgpID0+IHN0eWxlLmZvckVhY2gocyA9PiAoZWwubmF0aXZlRWxlbWVudC5zdHlsZVtzXSA9ICcnKSkpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIC4uLnRzOiAoPFQ+KG51bWJlcikgPT4gc3RyaW5nKVtdXG4pID0+IDxUPihzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgdGFwKHQgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzID0gdHMubWFwKHMgPT4gcyh0KSkuam9pbignICcpO1xuICAgICAgdGFyZ2V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVzO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZnBzID0gKCkgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIGxldCBzdGFydFRpbWUgPSAwO1xuICBjb25zdCBmcmFtZXMgPSBbXTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBsYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgc3RhcnRUaW1lID0gbGFzdFRpbWU7XG4gICAgfSksXG4gICAgdGFwKCgpID0+IGZyYW1lcy5wdXNoKDEgLyAocGVyZm9ybWFuY2Uubm93KCkgLSBsYXN0VGltZSkpKSxcbiAgICB0YXAoKCkgPT4gKGxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkpKSxcbiAgICBhZnRlcigoKSA9PiB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgY29uc3QgZiA9IGZyYW1lcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgcG9zKSB7XG4gICAgICAgIHJldHVybiBmcmFtZXMuaW5kZXhPZihpdGVtKSA9PT0gcG9zO1xuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn07XG4iXX0=