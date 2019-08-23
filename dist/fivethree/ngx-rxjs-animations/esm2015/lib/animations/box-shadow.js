/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VALUES_REG = /,(?![^\(]*\))/;
/** @type {?} */
const PARTS_REG = /\s(?![^(]*\))/;
/** @type {?} */
export const emptyBS = {
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
const parseValue = (/**
 * @param {?} str
 * @return {?}
 */
(str) => {
    /** @type {?} */
    const parts = str.split(PARTS_REG);
    /** @type {?} */
    const inset = parts.includes('inset');
    /** @type {?} */
    const first = parts[0];
    /** @type {?} */
    const color = first;
    /** @type {?} */
    const nums = parts
        .filter((/**
     * @param {?} n
     * @return {?}
     */
    n => n !== 'inset'))
        .filter((/**
     * @param {?} n
     * @return {?}
     */
    n => n !== color))
        .map(toNum);
    const [offsetX, offsetY, blurRadius, spreadRadius] = nums;
    /** @type {?} */
    const boxShadow = {
        inset: inset || false,
        offsetX: offsetX || 0,
        offsetY: offsetY || 0,
        blurRadius: blurRadius || 0,
        spreadRadius: spreadRadius || 0,
        color: color || 'rgba(0, 0, 0, 0)'
    };
    return boxShadow;
});
const ɵ0 = parseValue;
/** @type {?} */
const stringifyValue = (/**
 * @param {?} obj
 * @return {?}
 */
(obj) => {
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
    v => v !== null && v !== undefined))
        .map(toPx)
        .map((/**
     * @param {?} s
     * @return {?}
     */
    s => ('' + s).trim()))
        .join(' ');
});
const ɵ1 = stringifyValue;
/** @type {?} */
const toNum = (/**
 * @param {?} v
 * @return {?}
 */
v => {
    if (!/px$/.test(v) && v !== '0')
        return v;
    /** @type {?} */
    const n = parseFloat(v);
    return !isNaN(n) ? n : v;
});
const ɵ2 = toNum;
/** @type {?} */
const toPx = (/**
 * @param {?} n
 * @return {?}
 */
n => (typeof n === 'number' && n !== 0 ? n + 'px' : n));
const ɵ3 = toPx;
/** @type {?} */
export const parseBoxShadow = (/**
 * @param {?} str
 * @return {?}
 */
(str) => str
    .split(VALUES_REG)
    .map((/**
 * @param {?} s
 * @return {?}
 */
s => s.trim()))
    .map(parseValue));
/** @type {?} */
export const stringifyBoxShadow = (/**
 * @param {?} arr
 * @return {?}
 */
(arr) => arr.map(stringifyValue).join(', '));
/**
 * @param {?} t
 * @param {?} bs
 * @param {?} fBS
 * @param {?} rgb
 * @return {?}
 */
export function getTweenedBoxShadow(t, bs, fBS, rgb) {
    /** @type {?} */
    const ret = {
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
    bs => {
        if (fBS.length < tBS.length) {
            fBS.push(emptyBS);
        }
    }));
    fBS.forEach((/**
     * @param {?} bs
     * @return {?}
     */
    bs => {
        if (tBS.length < fBS.length) {
            tBS.push(emptyBS);
        }
    }));
    return { tBS, fBS };
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNoYWRvdy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb25zL2JveC1zaGFkb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFBTSxVQUFVLEdBQUcsZUFBZTs7TUFDNUIsU0FBUyxHQUFHLGVBQWU7O0FBRWpDLE1BQU0sT0FBTyxPQUFPLEdBQUc7SUFDckIsS0FBSyxFQUFFLEtBQUs7SUFDWixZQUFZLEVBQUUsQ0FBQztJQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUM7SUFDVixVQUFVLEVBQUUsQ0FBQztJQUNiLEtBQUssRUFBRSxZQUFZO0NBQ3BCOzs7O0FBRUQsK0JBT0M7OztJQU5DLDBCQUFlOztJQUNmLDRCQUFnQjs7SUFDaEIsNEJBQWdCOztJQUNoQiwrQkFBbUI7O0lBQ25CLGlDQUFxQjs7SUFDckIsMEJBQWM7OztNQUdWLFVBQVU7Ozs7QUFBRyxDQUFDLEdBQVcsRUFBRSxFQUFFOztVQUMzQixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O1VBQzVCLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7VUFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O1VBQ2hCLEtBQUssR0FBRyxLQUFLOztVQUViLElBQUksR0FBRyxLQUFLO1NBQ2YsTUFBTTs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBQztTQUMxQixNQUFNOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFDO1NBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUM7VUFDUCxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxHQUFHLElBQUk7O1VBQ25ELFNBQVMsR0FBYztRQUMzQixLQUFLLEVBQUUs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RyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPO1FBQ3JELFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWTtLQUMxRTtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEdBQWdCLEVBQUUsR0FBZ0I7SUFDcEUsR0FBRyxDQUFDLE9BQU87Ozs7SUFBQyxFQUFFLENBQUMsRUFBRTtRQUNmLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxPQUFPOzs7O0lBQUMsRUFBRSxDQUFDLEVBQUU7UUFDZixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBWQUxVRVNfUkVHID0gLywoPyFbXlxcKF0qXFwpKS87XG5jb25zdCBQQVJUU19SRUcgPSAvXFxzKD8hW14oXSpcXCkpLztcblxuZXhwb3J0IGNvbnN0IGVtcHR5QlMgPSB7XG4gIGluc2V0OiBmYWxzZSxcbiAgc3ByZWFkUmFkaXVzOiAwLFxuICBvZmZzZXRZOiAwLFxuICBvZmZzZXRYOiAwLFxuICBibHVyUmFkaXVzOiAwLFxuICBjb2xvcjogJ3JnYigwLDAsMCknXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJveFNoYWRvdyB7XG4gIGluc2V0OiBib29sZWFuO1xuICBvZmZzZXRYOiBudW1iZXI7XG4gIG9mZnNldFk6IG51bWJlcjtcbiAgYmx1clJhZGl1czogbnVtYmVyO1xuICBzcHJlYWRSYWRpdXM6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgcGFyc2VWYWx1ZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdChQQVJUU19SRUcpO1xuICBjb25zdCBpbnNldCA9IHBhcnRzLmluY2x1ZGVzKCdpbnNldCcpO1xuICBjb25zdCBmaXJzdCA9IHBhcnRzWzBdO1xuICBjb25zdCBjb2xvciA9IGZpcnN0O1xuXG4gIGNvbnN0IG51bXMgPSBwYXJ0c1xuICAgIC5maWx0ZXIobiA9PiBuICE9PSAnaW5zZXQnKVxuICAgIC5maWx0ZXIobiA9PiBuICE9PSBjb2xvcilcbiAgICAubWFwKHRvTnVtKTtcbiAgY29uc3QgW29mZnNldFgsIG9mZnNldFksIGJsdXJSYWRpdXMsIHNwcmVhZFJhZGl1c10gPSBudW1zO1xuICBjb25zdCBib3hTaGFkb3c6IEJveFNoYWRvdyA9IHtcbiAgICBpbnNldDogaW5zZXQgfHwgZmFsc2UsXG4gICAgb2Zmc2V0WDogb2Zmc2V0WCB8fCAwLFxuICAgIG9mZnNldFk6IG9mZnNldFkgfHwgMCxcbiAgICBibHVyUmFkaXVzOiBibHVyUmFkaXVzIHx8IDAsXG4gICAgc3ByZWFkUmFkaXVzOiBzcHJlYWRSYWRpdXMgfHwgMCxcbiAgICBjb2xvcjogY29sb3IgfHwgJ3JnYmEoMCwgMCwgMCwgMCknXG4gIH07XG4gIHJldHVybiBib3hTaGFkb3c7XG59O1xuXG5jb25zdCBzdHJpbmdpZnlWYWx1ZSA9IChvYmo6IEJveFNoYWRvdykgPT4ge1xuICByZXR1cm4gW1xuICAgIG9iai5pbnNldCA/ICdpbnNldCcgOiBudWxsLFxuICAgIG9iai5vZmZzZXRYLFxuICAgIG9iai5vZmZzZXRZLFxuICAgIG9iai5ibHVyUmFkaXVzLFxuICAgIG9iai5zcHJlYWRSYWRpdXMsXG4gICAgb2JqLmNvbG9yXG4gIF1cbiAgICAuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgLm1hcCh0b1B4KVxuICAgIC5tYXAocyA9PiAoJycgKyBzKS50cmltKCkpXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IHRvTnVtID0gdiA9PiB7XG4gIGlmICghL3B4JC8udGVzdCh2KSAmJiB2ICE9PSAnMCcpIHJldHVybiB2O1xuICBjb25zdCBuID0gcGFyc2VGbG9hdCh2KTtcbiAgcmV0dXJuICFpc05hTihuKSA/IG4gOiB2O1xufTtcbmNvbnN0IHRvUHggPSBuID0+ICh0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgbiAhPT0gMCA/IG4gKyAncHgnIDogbik7XG5cbmV4cG9ydCBjb25zdCBwYXJzZUJveFNoYWRvdyA9IChzdHI6IHN0cmluZykgPT5cbiAgc3RyXG4gICAgLnNwbGl0KFZBTFVFU19SRUcpXG4gICAgLm1hcChzID0+IHMudHJpbSgpKVxuICAgIC5tYXAocGFyc2VWYWx1ZSk7XG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5Qm94U2hhZG93ID0gKGFycjogQm94U2hhZG93W10pID0+XG4gIGFyci5tYXAoc3RyaW5naWZ5VmFsdWUpLmpvaW4oJywgJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUd2VlbmVkQm94U2hhZG93KFxuICB0OiBudW1iZXIsXG4gIGJzOiBCb3hTaGFkb3csXG4gIGZCUzogQm94U2hhZG93LFxuICByZ2I6IGFueVxuKSB7XG4gIGNvbnN0IHJldDogQm94U2hhZG93ID0ge1xuICAgIGluc2V0OiB0ID49IDAuNSA/IGJzLmluc2V0IDogZkJTLmluc2V0LFxuICAgIGNvbG9yOiByZ2IsXG4gICAgYmx1clJhZGl1czogdCAqIChicy5ibHVyUmFkaXVzIC0gZkJTLmJsdXJSYWRpdXMpICsgZkJTLmJsdXJSYWRpdXMsXG4gICAgb2Zmc2V0WDogdCAqIChicy5vZmZzZXRYIC0gZkJTLm9mZnNldFgpICsgZkJTLm9mZnNldFgsXG4gICAgb2Zmc2V0WTogdCAqIChicy5vZmZzZXRZIC0gZkJTLm9mZnNldFkpICsgZkJTLm9mZnNldFksXG4gICAgc3ByZWFkUmFkaXVzOiB0ICogKGJzLnNwcmVhZFJhZGl1cyAtIGZCUy5zcHJlYWRSYWRpdXMpICsgZkJTLnNwcmVhZFJhZGl1c1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQm94U2hhZG93cyh0QlM6IEJveFNoYWRvd1tdLCBmQlM6IEJveFNoYWRvd1tdKSB7XG4gIHRCUy5mb3JFYWNoKGJzID0+IHtcbiAgICBpZiAoZkJTLmxlbmd0aCA8IHRCUy5sZW5ndGgpIHtcbiAgICAgIGZCUy5wdXNoKGVtcHR5QlMpO1xuICAgIH1cbiAgfSk7XG4gIGZCUy5mb3JFYWNoKGJzID0+IHtcbiAgICBpZiAodEJTLmxlbmd0aCA8IGZCUy5sZW5ndGgpIHtcbiAgICAgIHRCUy5wdXNoKGVtcHR5QlMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHsgdEJTLCBmQlMgfTtcbn1cbiJdfQ==