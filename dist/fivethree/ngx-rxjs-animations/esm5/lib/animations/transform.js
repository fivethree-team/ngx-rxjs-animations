/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var transformF = (/**
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
function (from, to, m) { return (/**
 * @template T
 * @param {?} t
 * @return {?}
 */
function (t) {
    /** @type {?} */
    var te = t * (to - from) + from;
    return m ? m(te) : "" + te;
}); });
/** @type {?} */
export var translateY = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "translateY(" + t + "%)"; }));
});
/** @type {?} */
export var translateX = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "translateX(" + t + "%)"; }));
});
/** @type {?} */
export var translateZ = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "translateZ(" + t + "%)"; }));
});
/** @type {?} */
export var scale = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "scale(" + t + ")"; }));
});
/** @type {?} */
export var scaleX = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "scaleX(" + t + ")"; }));
});
/** @type {?} */
export var scaleY = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "scaleY(" + t + ")"; }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9uZ3gtcnhqcy1hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL2FuaW1hdGlvbnMvdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxLQUFPLFVBQVU7Ozs7OztBQUFHLFVBQ3hCLElBQVksRUFDWixFQUFVLEVBQ1YsQ0FBd0I7Ozs7O0FBQ3JCLFVBQUksQ0FBUzs7UUFDVixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUk7SUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxFQUFJLENBQUM7QUFDN0IsQ0FBQyxJQUFBLENBQUE7O0FBRUQsTUFBTSxLQUFPLFVBQVU7Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUNqQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7OztJQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZ0JBQWMsQ0FBQyxPQUFJLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLFVBQVU7Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUNqQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7OztJQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZ0JBQWMsQ0FBQyxPQUFJLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLFVBQVU7Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUNqQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7OztJQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZ0JBQWMsQ0FBQyxPQUFJLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLEtBQUs7Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUM1QixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7OztJQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsV0FBUyxDQUFDLE1BQUcsRUFBYixDQUFhLEVBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUE7O0FBQ0QsTUFBTSxLQUFPLE1BQU07Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUM3QixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7OztJQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBVSxDQUFDLE1BQUcsRUFBZCxDQUFjLEVBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUE7O0FBQ0QsTUFBTSxLQUFPLE1BQU07Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUM3QixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7OztJQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBVSxDQUFDLE1BQUcsRUFBZCxDQUFjLEVBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdHJhbnNmb3JtRiA9IChcbiAgZnJvbTogbnVtYmVyLFxuICB0bzogbnVtYmVyLFxuICBtOiAodDogbnVtYmVyKSA9PiBzdHJpbmdcbikgPT4gPFQ+KHQ6IG51bWJlcikgPT4ge1xuICBjb25zdCB0ZSA9IHQgKiAodG8gLSBmcm9tKSArIGZyb207XG4gIHJldHVybiBtID8gbSh0ZSkgOiBgJHt0ZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZVkgPSAoZnJvbSwgdG8pID0+IHtcbiAgcmV0dXJuIHRyYW5zZm9ybUYoZnJvbSwgdG8sIHQgPT4gYHRyYW5zbGF0ZVkoJHt0fSUpYCk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlWCA9IChmcm9tLCB0bykgPT4ge1xuICByZXR1cm4gdHJhbnNmb3JtRihmcm9tLCB0bywgdCA9PiBgdHJhbnNsYXRlWCgke3R9JSlgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGVaID0gKGZyb20sIHRvKSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1GKGZyb20sIHRvLCB0ID0+IGB0cmFuc2xhdGVaKCR7dH0lKWApO1xufTtcblxuZXhwb3J0IGNvbnN0IHNjYWxlID0gKGZyb20sIHRvKSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1GKGZyb20sIHRvLCB0ID0+IGBzY2FsZSgke3R9KWApO1xufTtcbmV4cG9ydCBjb25zdCBzY2FsZVggPSAoZnJvbSwgdG8pID0+IHtcbiAgcmV0dXJuIHRyYW5zZm9ybUYoZnJvbSwgdG8sIHQgPT4gYHNjYWxlWCgke3R9KWApO1xufTtcbmV4cG9ydCBjb25zdCBzY2FsZVkgPSAoZnJvbSwgdG8pID0+IHtcbiAgcmV0dXJuIHRyYW5zZm9ybUYoZnJvbSwgdG8sIHQgPT4gYHNjYWxlWSgke3R9KWApO1xufTtcbiJdfQ==