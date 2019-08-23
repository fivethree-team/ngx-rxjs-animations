/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { merge, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
/** @type {?} */
export const stagger = (/**
 * @param {?} targets
 * @param {?} animation
 * @param {?} d
 * @return {?}
 */
(targets, animation, d) => {
    /** @type {?} */
    const example = of(null);
    return merge(...targets.map((/**
     * @param {?} target
     * @param {?} index
     * @return {?}
     */
    (target, index) => example.pipe(delay(d * index), flatMap((/**
     * @return {?}
     */
    () => animation(target)))))));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb25zL3N0YWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBZSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWhELE1BQU0sT0FBTyxPQUFPOzs7Ozs7QUFBRyxDQUNyQixPQUFxQixFQUNyQixTQUFrRCxFQUNsRCxDQUFTLEVBQ1QsRUFBRTs7VUFDSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUV4QixPQUFPLEtBQUssQ0FDVixHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7OztJQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQ1YsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFDaEIsT0FBTzs7O0lBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQ2pDLEVBQ0YsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgIE9ic2VydmFibGUsIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBzdGFnZ2VyID0gKFxuICB0YXJnZXRzOiBFbGVtZW50UmVmW10sXG4gIGFuaW1hdGlvbjogKHRhcmdldDogRWxlbWVudFJlZikgPT4gT2JzZXJ2YWJsZTxhbnk+LFxuICBkOiBudW1iZXJcbikgPT4ge1xuICBjb25zdCBleGFtcGxlID0gb2YobnVsbCk7XG5cbiAgcmV0dXJuIG1lcmdlKFxuICAgIC4uLnRhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PlxuICAgICAgZXhhbXBsZS5waXBlKFxuICAgICAgICBkZWxheShkICogaW5kZXgpLFxuICAgICAgICBmbGF0TWFwKCgpID0+IGFuaW1hdGlvbih0YXJnZXQpKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn07XG4iXX0=