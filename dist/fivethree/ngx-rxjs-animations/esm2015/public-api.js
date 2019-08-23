/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export { slideOutDown, slideOutUp, slideOutLeft, slideOutRight, slideInDown, slideInUp, slideInLeft, slideInRight, fadeIn, fadeOut, scaleYOut } from './lib/animations/animations';
export { AnimateDirective } from './lib/animations/animate.directive';
export { AnimationsModule } from './lib/animations/animations.module';
export { linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce } from './lib/animations/easings';
export { fromTo, fromToPixels, toPixels, toBoxModel, fromToBoxModel, toPadding, toMargin, fromToPosition, toPosition, toBoxShadow, fromToColor } from './lib/operators/from-to.operators';
export { reverse, before, beforeStyle, after, afterStyle, removeStyle, removeStyles, transform, fps } from './lib/operators/util.operators';
export { morphStylePixels, morphBoxModel, morphPosition, morphBoxShadow, morphElement, morphColor, morphText, morph } from './lib/operators/morph.operators';
export { FivOverlayModule } from './lib/overlay/overlay.module';
export { FivOverlay } from './lib/overlay/overlay.component';
export { FivOverlayService } from './lib/overlay/overlay.service';
export { stagger } from './lib/animations/stagger';
export { transformF, translateY, translateX, translateZ, scale, scaleX, scaleY } from './lib/animations/transform';
export { tween } from './lib/animations/tween';
export {} from './lib/types';
export { getPosition, setPosition, getStylePixels, setStyle, toRGB, rgbToHex, parseRgb, getTweenedRgb } from './lib/utils';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvbmd4LXJ4anMtYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbInB1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFKQUFjLDZCQUE2QixDQUFDO0FBQzVDLGlDQUFjLG9DQUFvQyxDQUFDO0FBQ25ELGlDQUFjLG9DQUFvQyxDQUFDO0FBQ25ELCtiQUFjLDBCQUEwQixDQUFDO0FBQ3pDLHNKQUFjLG1DQUFtQyxDQUFDO0FBQ2xELDJHQUFjLGdDQUFnQyxDQUFDO0FBQy9DLDJIQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGlDQUFjLDhCQUE4QixDQUFDO0FBQzdDLDJCQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGtDQUFjLCtCQUErQixDQUFDO0FBQzlDLHdCQUFjLDBCQUEwQixDQUFDO0FBQ3pDLHNGQUFjLDRCQUE0QixDQUFDO0FBQzNDLHNCQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGVBQWMsYUFBYSxDQUFDO0FBQzVCLDZHQUFjLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vbGliL2FuaW1hdGlvbnMvYW5pbWF0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9hbmltYXRpb25zL2FuaW1hdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvYW5pbWF0aW9ucy9lYXNpbmdzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL29wZXJhdG9ycy9mcm9tLXRvLm9wZXJhdG9ycyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9vcGVyYXRvcnMvdXRpbC5vcGVyYXRvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvb3BlcmF0b3JzL21vcnBoLm9wZXJhdG9ycyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL292ZXJsYXkvb3ZlcmxheS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvb3ZlcmxheS9vdmVybGF5LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvYW5pbWF0aW9ucy9zdGFnZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2FuaW1hdGlvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2FuaW1hdGlvbnMvdHdlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdXRpbHMnO1xuIl19