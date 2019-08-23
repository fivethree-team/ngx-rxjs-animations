/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { FivOverlayService } from './overlay.service';
var FivOverlay = /** @class */ (function () {
    function FivOverlay(overlay) {
        this.overlay = overlay;
        this.afterInit = new EventEmitter();
        this._open = false;
    }
    /**
     * @param {?=} priority
     * @param {?=} data
     * @return {?}
     */
    FivOverlay.prototype.show = /**
     * @param {?=} priority
     * @param {?=} data
     * @return {?}
     */
    function (priority, data) {
        var _this = this;
        if (!this.componentRef) {
            // this.componentRef = this.overlay.createOverlay(
            //   FivOverlayContent,
            //   this.ngContent
            // );
            this._open = true;
            this.componentRef.instance.priority = priority;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.afterInit.emit(data);
            }), 0);
            return this.componentRef.instance;
        }
    };
    /**
     * @return {?}
     */
    FivOverlay.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
            this._open = false;
        }
    };
    Object.defineProperty(FivOverlay.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    FivOverlay.decorators = [
        { type: Component, args: [{
                    selector: 'fiv-overlay',
                    template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FivOverlay.ctorParameters = function () { return [
        { type: FivOverlayService }
    ]; };
    FivOverlay.propDecorators = {
        ngContent: [{ type: ViewChild, args: ['content', { static: false },] }],
        priority: [{ type: Input }],
        afterInit: [{ type: Output }]
    };
    return FivOverlay;
}());
export { FivOverlay };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FivOverlay.prototype.componentRef;
    /** @type {?} */
    FivOverlay.prototype.ngContent;
    /** @type {?} */
    FivOverlay.prototype.priority;
    /** @type {?} */
    FivOverlay.prototype.afterInit;
    /**
     * @type {?}
     * @private
     */
    FivOverlay.prototype._open;
    /**
     * @type {?}
     * @private
     */
    FivOverlay.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZml2ZXRocmVlL25neC1yeGpzLWFuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXREO0lBYUUsb0JBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBSHBDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFVBQUssR0FBRyxLQUFLLENBQUM7SUFFMkIsQ0FBQzs7Ozs7O0lBRWxELHlCQUFJOzs7OztJQUFKLFVBQUssUUFBaUIsRUFBRSxJQUFVO1FBQWxDLGlCQWNDO1FBYkMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsa0RBQWtEO1lBQ2xELHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsS0FBSztZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDL0MsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1lBRU4sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFFRCx5QkFBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxzQkFBSSw0QkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwrRUFBdUM7O2lCQUV4Qzs7OztnQkFOUSxpQkFBaUI7Ozs0QkFVdkIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBQ3RDLEtBQUs7NEJBQ0wsTUFBTTs7SUFnQ1QsaUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSxVQUFVOzs7Ozs7SUFDckIsa0NBQXNEOztJQUV0RCwrQkFBcUU7O0lBQ3JFLDhCQUFrQjs7SUFDbEIsK0JBQXlDOzs7OztJQUN6QywyQkFBc0I7Ozs7O0lBRVYsNkJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIENvbXBvbmVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpdk92ZXJsYXlDb250ZW50IH0gZnJvbSAnLi9vdmVybGF5LWNvbnRlbnQvb3ZlcmxheS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXZPdmVybGF5U2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZml2LW92ZXJsYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL292ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaXZPdmVybGF5IHtcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxGaXZPdmVybGF5Q29udGVudD47XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBuZ0NvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHByaW9yaXR5O1xuICBAT3V0cHV0KCkgYWZ0ZXJJbml0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIF9vcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBGaXZPdmVybGF5U2VydmljZSkge31cblxuICBzaG93KHByaW9yaXR5PzogbnVtYmVyLCBkYXRhPzogYW55KSB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgLy8gdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlT3ZlcmxheShcbiAgICAgIC8vICAgRml2T3ZlcmxheUNvbnRlbnQsXG4gICAgICAvLyAgIHRoaXMubmdDb250ZW50XG4gICAgICAvLyApO1xuICAgICAgdGhpcy5fb3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWZ0ZXJJbml0LmVtaXQoZGF0YSk7XG4gICAgICB9LCAwKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cbn1cbiJdfQ==