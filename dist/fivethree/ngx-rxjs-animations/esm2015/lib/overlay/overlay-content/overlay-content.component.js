/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class FivOverlayContent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    get myStyle() {
        return this.priority
            ? this.sanitizer.bypassSecurityTrustStyle(`z-index: ${this.priority}`)
            : null;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
FivOverlayContent.decorators = [
    { type: Component, args: [{
                selector: 'fiv-overlay-content',
                template: "<ng-content #content></ng-content>",
                styles: [""]
            }] }
];
/** @nocollapse */
FivOverlayContent.ctorParameters = () => [
    { type: DomSanitizer }
];
FivOverlayContent.propDecorators = {
    myStyle: [{ type: HostBinding, args: ['style',] }]
};
if (false) {
    /** @type {?} */
    FivOverlayContent.prototype.priority;
    /**
     * @type {?}
     * @private
     */
    FivOverlayContent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9vdmVybGF5L292ZXJsYXktY29udGVudC9vdmVybGF5LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPcEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQVU1QixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQzs7OztJQVQvQyxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRO1lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7O0lBTUQsUUFBUSxLQUFJLENBQUM7OztZQWpCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsOENBQStDOzthQUVoRDs7OztZQU5tQixZQUFZOzs7c0JBUTdCLFdBQVcsU0FBQyxPQUFPOzs7O0lBT3BCLHFDQUFpQjs7Ozs7SUFFTCxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zpdi1vdmVybGF5LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheS1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRml2T3ZlcmxheUNvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IG15U3R5bGUoKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxuICAgICAgPyB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHotaW5kZXg6ICR7dGhpcy5wcmlvcml0eX1gKVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgcHJpb3JpdHk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==