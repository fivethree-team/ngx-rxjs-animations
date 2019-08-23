/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { merge, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
/** @type {?} */
export var stagger = (/**
 * @param {?} targets
 * @param {?} animation
 * @param {?} d
 * @return {?}
 */
function (targets, animation, d) {
    /** @type {?} */
    var example = of(null);
    return merge.apply(void 0, tslib_1.__spread(targets.map((/**
     * @param {?} target
     * @param {?} index
     * @return {?}
     */
    function (target, index) {
        return example.pipe(delay(d * index), flatMap((/**
         * @return {?}
         */
        function () { return animation(target); })));
    }))));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9hbmltYXRpb25zL3N0YWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQWUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVoRCxNQUFNLEtBQU8sT0FBTzs7Ozs7O0FBQUcsVUFDckIsT0FBcUIsRUFDckIsU0FBa0QsRUFDbEQsQ0FBUzs7UUFFSCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUV4QixPQUFPLEtBQUssZ0NBQ1AsT0FBTyxDQUFDLEdBQUc7Ozs7O0lBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztRQUMzQixPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFDaEIsT0FBTzs7O1FBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUNqQztJQUhELENBR0MsRUFDRixHQUNEO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgIE9ic2VydmFibGUsIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBzdGFnZ2VyID0gKFxuICB0YXJnZXRzOiBFbGVtZW50UmVmW10sXG4gIGFuaW1hdGlvbjogKHRhcmdldDogRWxlbWVudFJlZikgPT4gT2JzZXJ2YWJsZTxhbnk+LFxuICBkOiBudW1iZXJcbikgPT4ge1xuICBjb25zdCBleGFtcGxlID0gb2YobnVsbCk7XG5cbiAgcmV0dXJuIG1lcmdlKFxuICAgIC4uLnRhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PlxuICAgICAgZXhhbXBsZS5waXBlKFxuICAgICAgICBkZWxheShkICogaW5kZXgpLFxuICAgICAgICBmbGF0TWFwKCgpID0+IGFuaW1hdGlvbih0YXJnZXQpKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn07XG4iXX0=