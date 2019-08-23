/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tap, map, first, last } from 'rxjs/operators';
/** @type {?} */
export var reverse = (/**
 * @return {?}
 */
function () { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(map((/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return 1 - t; })));
}); });
/** @type {?} */
export var before = (/**
 * @param {?} next
 * @return {?}
 */
function (next) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    source
        .pipe(first(), tap(next))
        .subscribe();
    return source;
}); });
/** @type {?} */
export var beforeStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
function (target, style, value) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(before((/**
     * @return {?}
     */
    function () { return (target.nativeElement.style[style] = value); })));
}); });
/** @type {?} */
export var after = (/**
 * @param {?} next
 * @return {?}
 */
function (next) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    source
        .pipe(last(), tap(next))
        .subscribe();
    return source;
}); });
/** @type {?} */
export var afterStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
function (target, style, value) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(after((/**
     * @return {?}
     */
    function () { return (target.nativeElement.style[style] = value); })));
}); });
/** @type {?} */
export var removeStyle = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
function (el, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(after((/**
     * @return {?}
     */
    function () { return (el.nativeElement.style[style] = ''); })));
}); });
/** @type {?} */
export var removeStyles = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
function (el, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(after((/**
     * @return {?}
     */
    function () { return style.forEach((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return (el.nativeElement.style[s] = ''); })); })));
}); });
/** @type {?} */
export var transform = (/**
 * @param {?} target
 * @param {...?} ts
 * @return {?}
 */
function (target) {
    var ts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ts[_i - 1] = arguments[_i];
    }
    return (/**
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
            var styles = ts.map((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s(t); })).join(' ');
            target.nativeElement.style.transform = styles;
        })));
    });
});
/** @type {?} */
export var fps = (/**
 * @return {?}
 */
function () { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var lastTime = 0;
    /** @type {?} */
    var startTime = 0;
    /** @type {?} */
    var frames = [];
    return source.pipe(before((/**
     * @return {?}
     */
    function () {
        lastTime = performance.now();
        startTime = lastTime;
    })), tap((/**
     * @return {?}
     */
    function () { return frames.push(1 / (performance.now() - lastTime)); })), tap((/**
     * @return {?}
     */
    function () { return (lastTime = performance.now()); })), after((/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var duration = performance.now() - startTime;
        /** @type {?} */
        var f = frames.filter((/**
         * @param {?} item
         * @param {?} pos
         * @return {?}
         */
        function (item, pos) {
            return frames.indexOf(item) === pos;
        }));
    })));
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5vcGVyYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvb3BlcmF0b3JzL3V0aWwub3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZELE1BQU0sS0FBTyxPQUFPOzs7QUFBRzs7Ozs7QUFBTSxVQUFJLE1BQTBCO0lBQ3pELE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBQyxDQUFDO0FBQTVCLENBQTRCLElBQUEsQ0FBQTs7QUFFOUIsTUFBTSxLQUFPLE1BQU07Ozs7QUFBRyxVQUFDLElBQWtCOzs7OztBQUFLLFVBQUksTUFBcUI7SUFDckUsTUFBTTtTQUNILElBQUksQ0FDSCxLQUFLLEVBQUUsRUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQ1Y7U0FDQSxTQUFTLEVBQUUsQ0FBQztJQUNmLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsSUFBQSxDQUFBOztBQUNELE1BQU0sS0FBTyxXQUFXOzs7Ozs7QUFBRyxVQUN6QixNQUFrQixFQUNsQixLQUFhLEVBQ2IsS0FBYTs7Ozs7QUFDVixVQUFJLE1BQXFCO0lBQzVCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7SUFBQyxjQUFNLE9BQUEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBM0MsQ0FBMkMsRUFBQyxDQUFDLENBQUM7QUFDaEYsQ0FBQyxJQUFBLENBQUE7O0FBRUQsTUFBTSxLQUFPLEtBQUs7Ozs7QUFBRyxVQUFDLElBQWtCOzs7OztBQUFLLFVBQUksTUFBcUI7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RyxTQUFTOztZQUN4QyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBUyxJQUFJLEVBQUUsR0FBRztZQUN4QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3RDLENBQUMsRUFBQztJQUNKLENBQUMsRUFBQyxDQUNILENBQUM7QUFDSixDQUFDLElBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0YXAsIG1hcCwgZmlyc3QsIGxhc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gKCkgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PlxuICBzb3VyY2UucGlwZShtYXAodCA9PiAxIC0gdCkpO1xuXG5leHBvcnQgY29uc3QgYmVmb3JlID0gKG5leHQ6ICh2PykgPT4gdm9pZCkgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICBzb3VyY2VcbiAgICAucGlwZShcbiAgICAgIGZpcnN0KCksXG4gICAgICB0YXAobmV4dClcbiAgICApXG4gICAgLnN1YnNjcmliZSgpO1xuICByZXR1cm4gc291cmNlO1xufTtcbmV4cG9ydCBjb25zdCBiZWZvcmVTdHlsZSA9IChcbiAgdGFyZ2V0OiBFbGVtZW50UmVmLFxuICBzdHlsZTogc3RyaW5nLFxuICB2YWx1ZTogc3RyaW5nXG4pID0+IDxUPihzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKGJlZm9yZSgoKSA9PiAodGFyZ2V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGVbc3R5bGVdID0gdmFsdWUpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWZ0ZXIgPSAobmV4dDogKHY/KSA9PiB2b2lkKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gIHNvdXJjZVxuICAgIC5waXBlKFxuICAgICAgbGFzdCgpLFxuICAgICAgdGFwKG5leHQpXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKTtcbiAgcmV0dXJuIHNvdXJjZTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZnRlclN0eWxlID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIHN0eWxlOiBzdHJpbmcsXG4gIHZhbHVlOiBzdHJpbmdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoYWZ0ZXIoKCkgPT4gKHRhcmdldC5uYXRpdmVFbGVtZW50LnN0eWxlW3N0eWxlXSA9IHZhbHVlKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVN0eWxlID0gKGVsOiBFbGVtZW50UmVmLCBzdHlsZSkgPT4gPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8VD5cbikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoYWZ0ZXIoKCkgPT4gKGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGVbc3R5bGVdID0gJycpKSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZVN0eWxlcyA9IChlbDogRWxlbWVudFJlZiwgc3R5bGU6IHN0cmluZ1tdKSA9PiA8VD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+XG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGFmdGVyKCgpID0+IHN0eWxlLmZvckVhY2gocyA9PiAoZWwubmF0aXZlRWxlbWVudC5zdHlsZVtzXSA9ICcnKSkpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtID0gKFxuICB0YXJnZXQ6IEVsZW1lbnRSZWYsXG4gIC4uLnRzOiAoPFQ+KG51bWJlcikgPT4gc3RyaW5nKVtdXG4pID0+IDxUPihzb3VyY2U6IE9ic2VydmFibGU8bnVtYmVyPikgPT4ge1xuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgdGFwKHQgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzID0gdHMubWFwKHMgPT4gcyh0KSkuam9pbignICcpO1xuICAgICAgdGFyZ2V0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVzO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZnBzID0gKCkgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxudW1iZXI+KSA9PiB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIGxldCBzdGFydFRpbWUgPSAwO1xuICBjb25zdCBmcmFtZXMgPSBbXTtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBsYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgc3RhcnRUaW1lID0gbGFzdFRpbWU7XG4gICAgfSksXG4gICAgdGFwKCgpID0+IGZyYW1lcy5wdXNoKDEgLyAocGVyZm9ybWFuY2Uubm93KCkgLSBsYXN0VGltZSkpKSxcbiAgICB0YXAoKCkgPT4gKGxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkpKSxcbiAgICBhZnRlcigoKSA9PiB7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgY29uc3QgZiA9IGZyYW1lcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgcG9zKSB7XG4gICAgICAgIHJldHVybiBmcmFtZXMuaW5kZXhPZihpdGVtKSA9PT0gcG9zO1xuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn07XG4iXX0=