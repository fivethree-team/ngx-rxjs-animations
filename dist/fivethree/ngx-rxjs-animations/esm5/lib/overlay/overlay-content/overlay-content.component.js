/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var FivOverlayContent = /** @class */ (function () {
    function FivOverlayContent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(FivOverlayContent.prototype, "myStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.priority
                ? this.sanitizer.bypassSecurityTrustStyle("z-index: " + this.priority)
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FivOverlayContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    FivOverlayContent.decorators = [
        { type: Component, args: [{
                    selector: 'fiv-overlay-content',
                    template: "<ng-content #content></ng-content>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivOverlayContent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    FivOverlayContent.propDecorators = {
        myStyle: [{ type: HostBinding, args: ['style',] }]
    };
    return FivOverlayContent;
}());
export { FivOverlayContent };
if (false) {
    /** @type {?} */
    FivOverlayContent.prototype.priority;
    /**
     * @type {?}
     * @private
     */
    FivOverlayContent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9vdmVybGF5L292ZXJsYXktY29udGVudC9vdmVybGF5LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEU7SUFlRSwyQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7SUFUL0Msc0JBQ0ksc0NBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVE7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVUsQ0FBQztnQkFDdEUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNYLENBQUM7OztPQUFBOzs7O0lBTUQsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBakJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw4Q0FBK0M7O2lCQUVoRDs7OztnQkFObUIsWUFBWTs7OzBCQVE3QixXQUFXLFNBQUMsT0FBTzs7SUFZdEIsd0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLGlCQUFpQjs7O0lBUTVCLHFDQUFpQjs7Ozs7SUFFTCxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1vdmVybGF5LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheS1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRml2T3ZlcmxheUNvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IG15U3R5bGUoKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxuICAgICAgPyB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHotaW5kZXg6ICR7dGhpcy5wcmlvcml0eX1gKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgcHJpb3JpdHk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==