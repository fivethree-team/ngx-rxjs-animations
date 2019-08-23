/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const transformF = (/**
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
(from, to, m) => (/**
 * @template T
 * @param {?} t
 * @return {?}
 */
(t) => {
    /** @type {?} */
    const te = t * (to - from) + from;
    return m ? m(te) : `${te}`;
}));
/** @type {?} */
export const translateY = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    t => `translateY(${t}%)`));
});
/** @type {?} */
export const translateX = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    t => `translateX(${t}%)`));
});
/** @type {?} */
export const translateZ = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    t => `translateZ(${t}%)`));
});
/** @type {?} */
export const scale = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    t => `scale(${t})`));
});
/** @type {?} */
export const scaleX = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    t => `scaleX(${t})`));
});
/** @type {?} */
export const scaleY = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(from, to) => {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    t => `scaleY(${t})`));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9uZ3gtcnhqcy1hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL2FuaW1hdGlvbnMvdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLFVBQVU7Ozs7OztBQUFHLENBQ3hCLElBQVksRUFDWixFQUFVLEVBQ1YsQ0FBd0IsRUFDeEIsRUFBRTs7Ozs7QUFBQyxDQUFJLENBQVMsRUFBRSxFQUFFOztVQUNkLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSTtJQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFBOztBQUVELE1BQU0sT0FBTyxVQUFVOzs7OztBQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3JDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxVQUFVOzs7OztBQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3JDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxVQUFVOzs7OztBQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3JDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxLQUFLOzs7OztBQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFBOztBQUNELE1BQU0sT0FBTyxNQUFNOzs7OztBQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2pDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFBOztBQUNELE1BQU0sT0FBTyxNQUFNOzs7OztBQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ2pDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFOzs7O0lBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUYgPSAoXG4gIGZyb206IG51bWJlcixcbiAgdG86IG51bWJlcixcbiAgbTogKHQ6IG51bWJlcikgPT4gc3RyaW5nXG4pID0+IDxUPih0OiBudW1iZXIpID0+IHtcbiAgY29uc3QgdGUgPSB0ICogKHRvIC0gZnJvbSkgKyBmcm9tO1xuICByZXR1cm4gbSA/IG0odGUpIDogYCR7dGV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGVZID0gKGZyb20sIHRvKSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1GKGZyb20sIHRvLCB0ID0+IGB0cmFuc2xhdGVZKCR7dH0lKWApO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZVggPSAoZnJvbSwgdG8pID0+IHtcbiAgcmV0dXJuIHRyYW5zZm9ybUYoZnJvbSwgdG8sIHQgPT4gYHRyYW5zbGF0ZVgoJHt0fSUpYCk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlWiA9IChmcm9tLCB0bykgPT4ge1xuICByZXR1cm4gdHJhbnNmb3JtRihmcm9tLCB0bywgdCA9PiBgdHJhbnNsYXRlWigke3R9JSlgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzY2FsZSA9IChmcm9tLCB0bykgPT4ge1xuICByZXR1cm4gdHJhbnNmb3JtRihmcm9tLCB0bywgdCA9PiBgc2NhbGUoJHt0fSlgKTtcbn07XG5leHBvcnQgY29uc3Qgc2NhbGVYID0gKGZyb20sIHRvKSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1GKGZyb20sIHRvLCB0ID0+IGBzY2FsZVgoJHt0fSlgKTtcbn07XG5leHBvcnQgY29uc3Qgc2NhbGVZID0gKGZyb20sIHRvKSA9PiB7XG4gIHJldHVybiB0cmFuc2Zvcm1GKGZyb20sIHRvLCB0ID0+IGBzY2FsZVkoJHt0fSlgKTtcbn07XG4iXX0=