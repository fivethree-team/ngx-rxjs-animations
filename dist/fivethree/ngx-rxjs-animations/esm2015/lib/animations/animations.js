/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tween } from './tween';
import { transform } from '../operators/util.operators';
import { translateY, translateX, scaleY } from './transform';
import { fromTo } from '../operators/from-to.operators';
/** @type {?} */
export const slideOutDown = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(0, 100))));
/** @type {?} */
export const slideOutUp = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(0, -100))));
/** @type {?} */
export const slideOutLeft = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(0, -100))));
/** @type {?} */
export const slideOutRight = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(0, 100))));
/** @type {?} */
export const slideInDown = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(-100, 0))));
/** @type {?} */
export const slideInUp = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(100, 0))));
/** @type {?} */
export const slideInLeft = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(-100, 0))));
/** @type {?} */
export const slideInRight = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(100, 0))));
/** @type {?} */
export const fadeIn = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(fromTo(target, 'opacity', 0, 1, (/**
 * @param {?} t
 * @return {?}
 */
t => `${t}`))));
/** @type {?} */
export const fadeOut = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(fromTo(target, 'opacity', 1, 0, (/**
 * @param {?} t
 * @return {?}
 */
t => `${t}`))));
/** @type {?} */
export const scaleYOut = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, scaleY(1, 0))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb25zL2FuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRXhELE1BQU0sT0FBTyxZQUFZOzs7Ozs7QUFBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7QUFFckUsTUFBTSxPQUFPLFVBQVU7Ozs7OztBQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUNyRCxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBQ3RFLE1BQU0sT0FBTyxZQUFZOzs7Ozs7QUFBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUN0RSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0FBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ3hELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBQ3JFLE1BQU0sT0FBTyxXQUFXOzs7Ozs7QUFBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdEQsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUN0RSxNQUFNLE9BQU8sU0FBUzs7Ozs7O0FBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ3BELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBQ3JFLE1BQU0sT0FBTyxXQUFXOzs7Ozs7QUFBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdEQsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUN0RSxNQUFNLE9BQU8sWUFBWTs7Ozs7O0FBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ3ZELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRXJFLE1BQU0sT0FBTyxNQUFNOzs7Ozs7QUFBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDakQsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7QUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFBOztBQUM1RSxNQUFNLE9BQU8sT0FBTzs7Ozs7O0FBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ2xELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7O0FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTs7QUFFNUUsTUFBTSxPQUFPLFNBQVM7Ozs7OztBQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUNwRCxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHdlZW4gfSBmcm9tICcuL3R3ZWVuJztcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJy4uL29wZXJhdG9ycy91dGlsLm9wZXJhdG9ycyc7XG5pbXBvcnQgeyB0cmFuc2xhdGVZLCB0cmFuc2xhdGVYLCBzY2FsZVkgfSBmcm9tICcuL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBmcm9tVG8gfSBmcm9tICcuLi9vcGVyYXRvcnMvZnJvbS10by5vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVPdXREb3duID0gKHRhcmdldCwgZWFzaW5nLCBkdXJhdGlvbikgPT5cbiAgdHdlZW4oZWFzaW5nLCBkdXJhdGlvbikucGlwZSh0cmFuc2Zvcm0odGFyZ2V0LCB0cmFuc2xhdGVZKDAsIDEwMCkpKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlT3V0VXAgPSAodGFyZ2V0LCBlYXNpbmcsIGR1cmF0aW9uKSA9PlxuICB0d2VlbihlYXNpbmcsIGR1cmF0aW9uKS5waXBlKHRyYW5zZm9ybSh0YXJnZXQsIHRyYW5zbGF0ZVkoMCwgLTEwMCkpKTtcbmV4cG9ydCBjb25zdCBzbGlkZU91dExlZnQgPSAodGFyZ2V0LCBlYXNpbmcsIGR1cmF0aW9uKSA9PlxuICB0d2VlbihlYXNpbmcsIGR1cmF0aW9uKS5waXBlKHRyYW5zZm9ybSh0YXJnZXQsIHRyYW5zbGF0ZVgoMCwgLTEwMCkpKTtcbmV4cG9ydCBjb25zdCBzbGlkZU91dFJpZ2h0ID0gKHRhcmdldCwgZWFzaW5nLCBkdXJhdGlvbikgPT5cbiAgdHdlZW4oZWFzaW5nLCBkdXJhdGlvbikucGlwZSh0cmFuc2Zvcm0odGFyZ2V0LCB0cmFuc2xhdGVYKDAsIDEwMCkpKTtcbmV4cG9ydCBjb25zdCBzbGlkZUluRG93biA9ICh0YXJnZXQsIGVhc2luZywgZHVyYXRpb24pID0+XG4gIHR3ZWVuKGVhc2luZywgZHVyYXRpb24pLnBpcGUodHJhbnNmb3JtKHRhcmdldCwgdHJhbnNsYXRlWSgtMTAwLCAwKSkpO1xuZXhwb3J0IGNvbnN0IHNsaWRlSW5VcCA9ICh0YXJnZXQsIGVhc2luZywgZHVyYXRpb24pID0+XG4gIHR3ZWVuKGVhc2luZywgZHVyYXRpb24pLnBpcGUodHJhbnNmb3JtKHRhcmdldCwgdHJhbnNsYXRlWSgxMDAsIDApKSk7XG5leHBvcnQgY29uc3Qgc2xpZGVJbkxlZnQgPSAodGFyZ2V0LCBlYXNpbmcsIGR1cmF0aW9uKSA9PlxuICB0d2VlbihlYXNpbmcsIGR1cmF0aW9uKS5waXBlKHRyYW5zZm9ybSh0YXJnZXQsIHRyYW5zbGF0ZVgoLTEwMCwgMCkpKTtcbmV4cG9ydCBjb25zdCBzbGlkZUluUmlnaHQgPSAodGFyZ2V0LCBlYXNpbmcsIGR1cmF0aW9uKSA9PlxuICB0d2VlbihlYXNpbmcsIGR1cmF0aW9uKS5waXBlKHRyYW5zZm9ybSh0YXJnZXQsIHRyYW5zbGF0ZVgoMTAwLCAwKSkpO1xuXG5leHBvcnQgY29uc3QgZmFkZUluID0gKHRhcmdldCwgZWFzaW5nLCBkdXJhdGlvbikgPT5cbiAgdHdlZW4oZWFzaW5nLCBkdXJhdGlvbikucGlwZShmcm9tVG8odGFyZ2V0LCAnb3BhY2l0eScsIDAsIDEsIHQgPT4gYCR7dH1gKSk7XG5leHBvcnQgY29uc3QgZmFkZU91dCA9ICh0YXJnZXQsIGVhc2luZywgZHVyYXRpb24pID0+XG4gIHR3ZWVuKGVhc2luZywgZHVyYXRpb24pLnBpcGUoZnJvbVRvKHRhcmdldCwgJ29wYWNpdHknLCAxLCAwLCB0ID0+IGAke3R9YCkpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGVZT3V0ID0gKHRhcmdldCwgZWFzaW5nLCBkdXJhdGlvbikgPT5cbiAgdHdlZW4oZWFzaW5nLCBkdXJhdGlvbikucGlwZSh0cmFuc2Zvcm0odGFyZ2V0LCBzY2FsZVkoMSwgMCkpKTtcbiJdfQ==