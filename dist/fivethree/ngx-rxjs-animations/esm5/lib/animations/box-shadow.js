/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var VALUES_REG = /,(?![^\(]*\))/;
/** @type {?} */
var PARTS_REG = /\s(?![^(]*\))/;
/** @type {?} */
export var emptyBS = {
    inset: false,
    spreadRadius: 0,
    offsetY: 0,
    offsetX: 0,
    blurRadius: 0,
    color: 'rgb(0,0,0)'
};
/**
 * @record
 */
export function BoxShadow() { }
if (false) {
    /** @type {?} */
    BoxShadow.prototype.inset;
    /** @type {?} */
    BoxShadow.prototype.offsetX;
    /** @type {?} */
    BoxShadow.prototype.offsetY;
    /** @type {?} */
    BoxShadow.prototype.blurRadius;
    /** @type {?} */
    BoxShadow.prototype.spreadRadius;
    /** @type {?} */
    BoxShadow.prototype.color;
}
/** @type {?} */
var parseValue = (/**
 * @param {?} str
 * @return {?}
 */
function (str) {
    /** @type {?} */
    var parts = str.split(PARTS_REG);
    /** @type {?} */
    var inset = parts.includes('inset');
    /** @type {?} */
    var first = parts[0];
    /** @type {?} */
    var color = first;
    /** @type {?} */
    var nums = parts
        .filter((/**
     * @param {?} n
     * @return {?}
     */
    function (n) { return n !== 'inset'; }))
        .filter((/**
     * @param {?} n
     * @return {?}
     */
    function (n) { return n !== color; }))
        .map(toNum);
    var _a = tslib_1.__read(nums, 4), offsetX = _a[0], offsetY = _a[1], blurRadius = _a[2], spreadRadius = _a[3];
    /** @type {?} */
    var boxShadow = {
        inset: inset || false,
        offsetX: offsetX || 0,
        offsetY: offsetY || 0,
        blurRadius: blurRadius || 0,
        spreadRadius: spreadRadius || 0,
        color: color || 'rgba(0, 0, 0, 0)'
    };
    return boxShadow;
});
var ɵ0 = parseValue;
/** @type {?} */
var stringifyValue = (/**
 * @param {?} obj
 * @return {?}
 */
function (obj) {
    return [
        obj.inset ? 'inset' : null,
        obj.offsetX,
        obj.offsetY,
        obj.blurRadius,
        obj.spreadRadius,
        obj.color
    ]
        .filter((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return v !== null && v !== undefined; }))
        .map(toPx)
        .map((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return ('' + s).trim(); }))
        .join(' ');
});
var ɵ1 = stringifyValue;
/** @type {?} */
var toNum = (/**
 * @param {?} v
 * @return {?}
 */
function (v) {
    if (!/px$/.test(v) && v !== '0')
        return v;
    /** @type {?} */
    var n = parseFloat(v);
    return !isNaN(n) ? n : v;
});
var ɵ2 = toNum;
/** @type {?} */
var toPx = (/**
 * @param {?} n
 * @return {?}
 */
function (n) { return (typeof n === 'number' && n !== 0 ? n + 'px' : n); });
var ɵ3 = toPx;
/** @type {?} */
export var parseBoxShadow = (/**
 * @param {?} str
 * @return {?}
 */
function (str) {
    return str
        .split(VALUES_REG)
        .map((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return s.trim(); }))
        .map(parseValue);
});
/** @type {?} */
export var stringifyBoxShadow = (/**
 * @param {?} arr
 * @return {?}
 */
function (arr) {
    return arr.map(stringifyValue).join(', ');
});
/**
 * @param {?} t
 * @param {?} bs
 * @param {?} fBS
 * @param {?} rgb
 * @return {?}
 */
export function getTweenedBoxShadow(t, bs, fBS, rgb) {
    /** @type {?} */
    var ret = {
        inset: t >= 0.5 ? bs.inset : fBS.inset,
        color: rgb,
        blurRadius: t * (bs.blurRadius - fBS.blurRadius) + fBS.blurRadius,
        offsetX: t * (bs.offsetX - fBS.offsetX) + fBS.offsetX,
        offsetY: t * (bs.offsetY - fBS.offsetY) + fBS.offsetY,
        spreadRadius: t * (bs.spreadRadius - fBS.spreadRadius) + fBS.spreadRadius
    };
    return ret;
}
/**
 * @param {?} tBS
 * @param {?} fBS
 * @return {?}
 */
export function normalizeBoxShadows(tBS, fBS) {
    tBS.forEach((/**
     * @param {?} bs
     * @return {?}
     */
    function (bs) {
        if (fBS.length < tBS.length) {
            fBS.push(emptyBS);
        }
    }));
    fBS.forEach((/**
     * @param {?} bs
     * @return {?}
     */
    function (bs) {
        if (tBS.length < fBS.length) {
            tBS.push(emptyBS);
        }
    }));
    return { tBS: tBS, fBS: fBS };
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNoYWRvdy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb25zL2JveC1zaGFkb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sVUFBVSxHQUFHLGVBQWU7O0lBQzVCLFNBQVMsR0FBRyxlQUFlOztBQUVqQyxNQUFNLEtBQU8sT0FBTyxHQUFHO0lBQ3JCLEtBQUssRUFBRSxLQUFLO0lBQ1osWUFBWSxFQUFFLENBQUM7SUFDZixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsVUFBVSxFQUFFLENBQUM7SUFDYixLQUFLLEVBQUUsWUFBWTtDQUNwQjs7OztBQUVELCtCQU9DOzs7SUFOQywwQkFBZTs7SUFDZiw0QkFBZ0I7O0lBQ2hCLDRCQUFnQjs7SUFDaEIsK0JBQW1COztJQUNuQixpQ0FBcUI7O0lBQ3JCLDBCQUFjOzs7SUFHVixVQUFVOzs7O0FBQUcsVUFBQyxHQUFXOztRQUN2QixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O1FBQzVCLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7UUFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O1FBQ2hCLEtBQUssR0FBRyxLQUFLOztRQUViLElBQUksR0FBRyxLQUFLO1NBQ2YsTUFBTTs7OztJQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLE9BQU8sRUFBYixDQUFhLEVBQUM7U0FDMUIsTUFBTTs7OztJQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEtBQUssRUFBWCxDQUFXLEVBQUM7U0FDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNQLElBQUEsNEJBQW1ELEVBQWxELGVBQU8sRUFBRSxlQUFPLEVBQUUsa0JBQVUsRUFBRSxvQkFBb0I7O1FBQ25ELFNBQVMsR0FBYztRQUMz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UUFDckQsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPO1FBQ3JELFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWTtLQUMxRTtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEdBQWdCLEVBQUUsR0FBZ0I7SUFDcEUsR0FBRyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLEVBQUU7UUFDWixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsRUFBRTtRQUNaLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBWQUxVRVNfUkVHID0gLywoPyFbXlxcKF0qXFwpKS87XG5jb25zdCBQQVJUU19SRUcgPSAvXFxzKD8hW14oXSpcXCkpLztcblxuZXhwb3J0IGNvbnN0IGVtcHR5QlMgPSB7XG4gIGluc2V0OiBmYWxzZSxcbiAgc3ByZWFkUmFkaXVzOiAwLFxuICBvZmZzZXRZOiAwLFxuICBvZmZzZXRYOiAwLFxuICBibHVyUmFkaXVzOiAwLFxuICBjb2xvcjogJ3JnYigwLDAsMCknXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJveFNoYWRvdyB7XG4gIGluc2V0OiBib29sZWFuO1xuICBvZmZzZXRYOiBudW1iZXI7XG4gIG9mZnNldFk6IG51bWJlcjtcbiAgYmx1clJhZGl1czogbnVtYmVyO1xuICBzcHJlYWRSYWRpdXM6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgcGFyc2VWYWx1ZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdChQQVJUU19SRUcpO1xuICBjb25zdCBpbnNldCA9IHBhcnRzLmluY2x1ZGVzKCdpbnNldCcpO1xuICBjb25zdCBmaXJzdCA9IHBhcnRzWzBdO1xuICBjb25zdCBjb2xvciA9IGZpcnN0O1xuXG4gIGNvbnN0IG51bXMgPSBwYXJ0c1xuICAgIC5maWx0ZXIobiA9PiBuICE9PSAnaW5zZXQnKVxuICAgIC5maWx0ZXIobiA9PiBuICE9PSBjb2xvcilcbiAgICAubWFwKHRvTnVtKTtcbiAgY29uc3QgW29mZnNldFgsIG9mZnNldFksIGJsdXJSYWRpdXMsIHNwcmVhZFJhZGl1c10gPSBudW1zO1xuICBjb25zdCBib3hTaGFkb3c6IEJveFNoYWRvdyA9IHtcbiAgICBpbnNldDogaW5zZXQgfHwgZmFsc2UsXG4gICAgb2Zmc2V0WDogb2Zmc2V0WCB8fCAwLFxuICAgIG9mZnNldFk6IG9mZnNldFkgfHwgMCxcbiAgICBibHVyUmFkaXVzOiBibHVyUmFkaXVzIHx8IDAsXG4gICAgc3ByZWFkUmFkaXVzOiBzcHJlYWRSYWRpdXMgfHwgMCxcbiAgICBjb2xvcjogY29sb3IgfHwgJ3JnYmEoMCwgMCwgMCwgMCknXG4gIH07XG4gIHJldHVybiBib3hTaGFkb3c7XG59O1xuXG5jb25zdCBzdHJpbmdpZnlWYWx1ZSA9IChvYmo6IEJveFNoYWRvdykgPT4ge1xuICByZXR1cm4gW1xuICAgIG9iai5pbnNldCA/ICdpbnNldCcgOiBudWxsLFxuICAgIG9iai5vZmZzZXRYLFxuICAgIG9iai5vZmZzZXRZLFxuICAgIG9iai5ibHVyUmFkaXVzLFxuICAgIG9iai5zcHJlYWRSYWRpdXMsXG4gICAgb2JqLmNvbG9yXG4gIF1cbiAgICAuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgLm1hcCh0b1B4KVxuICAgIC5tYXAocyA9PiAoJycgKyBzKS50cmltKCkpXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IHRvTnVtID0gdiA9PiB7XG4gIGlmICghL3B4JC8udGVzdCh2KSAmJiB2ICE9PSAnMCcpIHJldHVybiB2O1xuICBjb25zdCBuID0gcGFyc2VGbG9hdCh2KTtcbiAgcmV0dXJuICFpc05hTihuKSA/IG4gOiB2O1xufTtcbmNvbnN0IHRvUHggPSBuID0+ICh0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgbiAhPT0gMCA/IG4gKyAncHgnIDogbik7XG5cbmV4cG9ydCBjb25zdCBwYXJzZUJveFNoYWRvdyA9IChzdHI6IHN0cmluZykgPT5cbiAgc3RyXG4gICAgLnNwbGl0KFZBTFVFU19SRUcpXG4gICAgLm1hcChzID0+IHMudHJpbSgpKVxuICAgIC5tYXAocGFyc2VWYWx1ZSk7XG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5Qm94U2hhZG93ID0gKGFycjogQm94U2hhZG93W10pID0+XG4gIGFyci5tYXAoc3RyaW5naWZ5VmFsdWUpLmpvaW4oJywgJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUd2VlbmVkQm94U2hhZG93KFxuICB0OiBudW1iZXIsXG4gIGJzOiBCb3hTaGFkb3csXG4gIGZCUzogQm94U2hhZG93LFxuICByZ2I6IGFueVxuKSB7XG4gIGNvbnN0IHJldDogQm94U2hhZG93ID0ge1xuICAgIGluc2V0OiB0ID49IDAuNSA/IGJzLmluc2V0IDogZkJTLmluc2V0LFxuICAgIGNvbG9yOiByZ2IsXG4gICAgYmx1clJhZGl1czogdCAqIChicy5ibHVyUmFkaXVzIC0gZkJTLmJsdXJSYWRpdXMpICsgZkJTLmJsdXJSYWRpdXMsXG4gICAgb2Zmc2V0WDogdCAqIChicy5vZmZzZXRYIC0gZkJTLm9mZnNldFgpICsgZkJTLm9mZnNldFgsXG4gICAgb2Zmc2V0WTogdCAqIChicy5vZmZzZXRZIC0gZkJTLm9mZnNldFkpICsgZkJTLm9mZnNldFksXG4gICAgc3ByZWFkUmFkaXVzOiB0ICogKGJzLnNwcmVhZFJhZGl1cyAtIGZCUy5zcHJlYWRSYWRpdXMpICsgZkJTLnNwcmVhZFJhZGl1c1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQm94U2hhZG93cyh0QlM6IEJveFNoYWRvd1tdLCBmQlM6IEJveFNoYWRvd1tdKSB7XG4gIHRCUy5mb3JFYWNoKGJzID0+IHtcbiAgICBpZiAoZkJTLmxlbmd0aCA8IHRCUy5sZW5ndGgpIHtcbiAgICAgIGZCUy5wdXNoKGVtcHR5QlMpO1xuICAgIH1cbiAgfSk7XG4gIGZCUy5mb3JFYWNoKGJzID0+IHtcbiAgICBpZiAodEJTLmxlbmd0aCA8IGZCUy5sZW5ndGgpIHtcbiAgICAgIHRCUy5wdXNoKGVtcHR5QlMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHsgdEJTLCBmQlMgfTtcbn1cbiJdfQ==