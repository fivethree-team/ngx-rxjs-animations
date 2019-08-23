/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
/**
 * @param {?} easingFunction
 * @param {?} duration
 * @return {?}
 */
export function tween(easingFunction, duration) {
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        /** @type {?} */
        var startTime;
        /** @type {?} */
        var id = requestAnimationFrame((/**
         * @param {?} time
         * @return {?}
         */
        function sample(time) {
            startTime = startTime || time;
            /** @type {?} */
            var t = time - startTime;
            if (t < duration) {
                observer.next(easingFunction(t, 0, 1, duration));
                id = requestAnimationFrame(sample);
            }
            else {
                observer.next(easingFunction(duration, 0, 1, duration));
                id = requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    observer.complete();
                }));
            }
        }));
        return (/**
         * @return {?}
         */
        function () {
            if (id) {
                cancelAnimationFrame(id);
            }
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdlZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy90d2Vlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBRWxDLE1BQU0sVUFBVSxLQUFLLENBQ25CLGNBQXdCLEVBQ3hCLFFBQWdCO0lBRWhCLE9BQU8sSUFBSSxVQUFVOzs7O0lBQUMsVUFBQSxRQUFROztZQUN4QixTQUFTOztZQUNULEVBQUUsR0FBRyxxQkFBcUI7Ozs7UUFBQyxTQUFTLE1BQU0sQ0FBQyxJQUFJO1lBQ2pELFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDOztnQkFDeEIsQ0FBQyxHQUFHLElBQUksR0FBRyxTQUFTO1lBQzFCLElBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRTtnQkFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakQsRUFBRSxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELEVBQUUsR0FBRyxxQkFBcUI7OztnQkFBQztvQkFDekIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDO1FBQ0Y7OztRQUFPO1lBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlbihcbiAgZWFzaW5nRnVuY3Rpb246IEZ1bmN0aW9uLFxuICBkdXJhdGlvbjogbnVtYmVyXG4pOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgIGxldCBzdGFydFRpbWU7XG4gICAgbGV0IGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIHNhbXBsZSh0aW1lKSB7XG4gICAgICBzdGFydFRpbWUgPSBzdGFydFRpbWUgfHwgdGltZTtcbiAgICAgIGNvbnN0IHQgPSB0aW1lIC0gc3RhcnRUaW1lO1xuICAgICAgaWYgKHQgPCBkdXJhdGlvbikge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVhc2luZ0Z1bmN0aW9uKHQsIDAsIDEsIGR1cmF0aW9uKSk7XG4gICAgICAgIGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNhbXBsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGVhc2luZ0Z1bmN0aW9uKGR1cmF0aW9uLCAwLCAxLCBkdXJhdGlvbikpO1xuICAgICAgICBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cbiJdfQ==