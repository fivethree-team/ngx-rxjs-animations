import { Observable, of, Subject, merge } from 'rxjs';
import { map, first, tap, last, delay, flatMap } from 'rxjs/operators';
import { Directive, ElementRef, Input, TemplateRef, Injectable, ComponentFactoryResolver, RendererFactory2, ApplicationRef, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, EventEmitter, Component, ViewChild, Output, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} easingFunction
 * @param {?} duration
 * @return {?}
 */
function tween(easingFunction, duration) {
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    observer => {
        /** @type {?} */
        let startTime;
        /** @type {?} */
        let id = requestAnimationFrame((/**
         * @param {?} time
         * @return {?}
         */
        function sample(time) {
            startTime = startTime || time;
            /** @type {?} */
            const t = time - startTime;
            if (t < duration) {
                observer.next(easingFunction(t, 0, 1, duration));
                id = requestAnimationFrame(sample);
            }
            else {
                observer.next(easingFunction(duration, 0, 1, duration));
                id = requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const reverse = (/**
 * @return {?}
 */
() => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(map((/**
 * @param {?} t
 * @return {?}
 */
t => 1 - t)))));
/** @type {?} */
const before = (/**
 * @param {?} next
 * @return {?}
 */
(next) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    source
        .pipe(first(), tap(next))
        .subscribe();
    return source;
}));
/** @type {?} */
const beforeStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
(target, style, value) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(before((/**
     * @return {?}
     */
    () => (target.nativeElement.style[style] = value))));
}));
/** @type {?} */
const after = (/**
 * @param {?} next
 * @return {?}
 */
(next) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    source
        .pipe(last(), tap(next))
        .subscribe();
    return source;
}));
/** @type {?} */
const afterStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
(target, style, value) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(after((/**
     * @return {?}
     */
    () => (target.nativeElement.style[style] = value))));
}));
/** @type {?} */
const removeStyle = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
(el, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(after((/**
     * @return {?}
     */
    () => (el.nativeElement.style[style] = ''))));
}));
/** @type {?} */
const removeStyles = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
(el, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(after((/**
     * @return {?}
     */
    () => style.forEach((/**
     * @param {?} s
     * @return {?}
     */
    s => (el.nativeElement.style[s] = ''))))));
}));
/** @type {?} */
const transform = (/**
 * @param {?} target
 * @param {...?} ts
 * @return {?}
 */
(target, ...ts) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(tap((/**
     * @param {?} t
     * @return {?}
     */
    t => {
        /** @type {?} */
        const styles = ts.map((/**
         * @param {?} s
         * @return {?}
         */
        s => s(t))).join(' ');
        target.nativeElement.style.transform = styles;
    })));
}));
/** @type {?} */
const fps = (/**
 * @return {?}
 */
() => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    let lastTime = 0;
    /** @type {?} */
    let startTime = 0;
    /** @type {?} */
    const frames = [];
    return source.pipe(before((/**
     * @return {?}
     */
    () => {
        lastTime = performance.now();
        startTime = lastTime;
    })), tap((/**
     * @return {?}
     */
    () => frames.push(1 / (performance.now() - lastTime)))), tap((/**
     * @return {?}
     */
    () => (lastTime = performance.now()))), after((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const duration = performance.now() - startTime;
    })));
}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const transformF = (/**
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
const translateY = (/**
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
const translateX = (/**
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
const translateZ = (/**
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
const scale = (/**
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
const scaleX = (/**
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
const scaleY = (/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const position = ['position', 'top', 'left', 'height', 'width'];
/** @type {?} */
const container = ['border-radius'];
/** @type {?} */
const color = ['color', 'background-color', 'border-color'];
/** @type {?} */
const boxModel = (/**
 * @param {?} style
 * @return {?}
 */
style => [
    `${style}-top`,
    `${style}-bottom`,
    `${style}-left`,
    `${style}-right`
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
function getPosition(el) {
    /** @type {?} */
    const bounds = el.nativeElement.getBoundingClientRect();
    return {
        top: bounds.top,
        left: bounds.left,
        height: el.nativeElement.clientHeight,
        width: el.nativeElement.clientWidth
    };
}
/**
 * @param {?} el
 * @param {?} r
 * @return {?}
 */
function setPosition(el, r) {
    el.nativeElement.style.top = r.top + 'px';
    el.nativeElement.style.left = r.left + 'px';
    el.nativeElement.style.height = r.height + 'px';
    el.nativeElement.style.width = r.width + 'px';
    return el;
}
/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
function getStylePixels(el, style) {
    return +getComputedStyle(el.nativeElement)
        .getPropertyValue(style)
        .match(/\d+/)[0];
}
/**
 * @param {?} el
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
function setStyle(el, style, value) {
    el.nativeElement.style[style] = value;
}
/**
 * @param {?} c
 * @return {?}
 */
function toRGB(c) {
    /** @type {?} */
    const r = Math.floor(c / (256 * 256));
    /** @type {?} */
    const g = Math.floor(c / 256) % 256;
    /** @type {?} */
    const b = c % 256;
    return `rgb(${r},${g},${b})`;
}
/**
 * @param {?} orig
 * @return {?}
 */
function rgbToHex(orig) {
    /** @type {?} */
    const rgb = parseRgb(orig);
    return rgb && rgb.length === 4
        ? '#' +
            ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : orig;
}
/**
 * @param {?} orig
 * @return {?}
 */
function parseRgb(orig) {
    /** @type {?} */
    const parsed = orig
        .replace(/\s/g, '')
        .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    /** @type {?} */
    const rgb = [...parsed.splice(1, 3).map((/**
         * @param {?} v
         * @return {?}
         */
        v => +v)), +parsed[4] || 1];
    return rgb;
}
/**
 * @param {?} toColor
 * @param {?} fromColor
 * @param {?} t
 * @return {?}
 */
function getTweenedRgb(toColor, fromColor, t) {
    /** @type {?} */
    let rgb;
    if (toColor[3] || fromColor[3]) {
        rgb = `rgba(${t * (toColor[0] - fromColor[0]) + fromColor[0]},${t *
            (toColor[1] - fromColor[1]) +
            fromColor[1]},${t * (toColor[2] - fromColor[2]) + fromColor[2]},${t *
            (toColor[3] - fromColor[3]) +
            fromColor[3]})`;
    }
    else {
        rgb = `rgb(${t * (toColor[0] - fromColor[0]) + fromColor[0]},${t *
            (toColor[0] - fromColor[0]) +
            fromColor[0]},${t * (toColor[0] - fromColor[0]) + fromColor[0]})`;
    }
    return rgb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VALUES_REG = /,(?![^\(]*\))/;
/** @type {?} */
const PARTS_REG = /\s(?![^(]*\))/;
/** @type {?} */
const emptyBS = {
    inset: false,
    spreadRadius: 0,
    offsetY: 0,
    offsetX: 0,
    blurRadius: 0,
    color: 'rgb(0,0,0)'
};
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
/** @type {?} */
const toPx = (/**
 * @param {?} n
 * @return {?}
 */
n => (typeof n === 'number' && n !== 0 ? n + 'px' : n));
/** @type {?} */
const parseBoxShadow = (/**
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
const stringifyBoxShadow = (/**
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
function getTweenedBoxShadow(t, bs, fBS, rgb) {
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
function normalizeBoxShadows(tBS, fBS) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fromTo = (/**
 * @param {?} el
 * @param {?} style
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
(el, style, from, to, m) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(tap((/**
 * @param {?} t
 * @return {?}
 */
t => {
    /** @type {?} */
    const te = t * (to - from) + from;
    /** @type {?} */
    const value = m(te);
    el.nativeElement.style[style] = value;
})))));
/** @type {?} */
const fromToPixels = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
(target, from, to, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(fromTo(target, style, from, to, (/**
 * @param {?} t
 * @return {?}
 */
t => `${t}px`)))));
/** @type {?} */
const toPixels = (/**
 * @param {?} target
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
(target, to, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(fromToPixels(target, getStylePixels(target, style), to, style))));
/** @type {?} */
const toBoxModel = (/**
 * @param {?} target
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
(target, toBox, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(toPixels(target, typeof toBox !== 'number' ? toBox.left || 0 : toBox, `${style}-left`), toPixels(target, typeof toBox !== 'number' ? toBox.right || 0 : toBox, `${style}-right`), toPixels(target, typeof toBox !== 'number' ? toBox.top || 0 : toBox, `${style}-top`), toPixels(target, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, `${style}-bottom`), removeStyles(target, boxModel(style)));
}));
/** @type {?} */
const fromToBoxModel = (/**
 * @param {?} target
 * @param {?} fromBox
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
(target, fromBox, toBox, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(fromToPixels(target, typeof fromBox !== 'number' ? fromBox.left || 0 : fromBox, typeof toBox !== 'number' ? toBox.left || 0 : toBox, `${style}-left`), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.right || 0 : fromBox, typeof toBox !== 'number' ? toBox.right || 0 : toBox, `${style}-right`), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.top || 0 : fromBox, typeof toBox !== 'number' ? toBox.top || 0 : toBox, `${style}-top`), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.bottom || 0 : fromBox, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, `${style}-bottom`), removeStyles(target, boxModel(style)));
}));
/** @type {?} */
const toPadding = (/**
 * @param {?} target
 * @param {?} padding
 * @return {?}
 */
(target, padding) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(toBoxModel(target, padding, 'padding'));
}));
/** @type {?} */
const toMargin = (/**
 * @param {?} target
 * @param {?} margin
 * @return {?}
 */
(target, margin) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(toBoxModel(target, margin, 'margin'));
}));
/** @type {?} */
const fromToPosition = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
(target, from, to) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(fromToPixels(target, from.top, to.top, 'top'), fromToPixels(target, from.height, to.height, 'height'), fromToPixels(target, from.left, to.left, 'left'), fromToPixels(target, from.width, to.width, 'width'), removeStyles(target, position));
}));
/** @type {?} */
const toPosition = (/**
 * @param {?} target
 * @param {?} to
 * @return {?}
 */
(target, to) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(toPixels(target, to.top, 'top'), toPixels(target, to.left, 'left'), toPixels(target, to.height, 'height'), toPixels(target, to.width, 'width'), removeStyles(target, position));
}));
/** @type {?} */
const toBoxShadow = (/**
 * @param {?} target
 * @param {?} boxShadow
 * @return {?}
 */
(target, boxShadow) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    const ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    const pfBS = parseBoxShadow(boxShadow);
    return source.pipe(fromTo(target, 'box-shadow', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    t => {
        const { tBS, fBS } = normalizeBoxShadows(ptBS, pfBS);
        /** @type {?} */
        const tweenedBS = tBS.map((/**
         * @param {?} bs
         * @param {?} index
         * @return {?}
         */
        (bs, index) => {
            /** @type {?} */
            const fBSi = fBS[index];
            /** @type {?} */
            const toColor = parseRgb(bs.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            const fromColor = parseRgb(fBSi.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            const rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}));
/** @type {?} */
const fromToColor = (/**
 * @param {?} target
 * @param {?} fromColor
 * @param {?=} style
 * @return {?}
 */
(target, fromColor, style = 'color') => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const targetColor = getComputedStyle(target.nativeElement).getPropertyValue(style);
    /** @type {?} */
    const tRGB = parseRgb(targetColor);
    /** @type {?} */
    const fRGB = parseRgb(fromColor);
    console.log('from to', fRGB, tRGB);
    return source.pipe(fromTo(target, style, 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    t => getTweenedRgb(tRGB, fRGB, t))), removeStyles(target, color));
}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const slideOutDown = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(0, 100))));
/** @type {?} */
const slideOutUp = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(0, -100))));
/** @type {?} */
const slideOutLeft = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(0, -100))));
/** @type {?} */
const slideOutRight = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(0, 100))));
/** @type {?} */
const slideInDown = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(-100, 0))));
/** @type {?} */
const slideInUp = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateY(100, 0))));
/** @type {?} */
const slideInLeft = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(-100, 0))));
/** @type {?} */
const slideInRight = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, translateX(100, 0))));
/** @type {?} */
const fadeIn = (/**
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
const fadeOut = (/**
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
const scaleYOut = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
(target, easing, duration) => tween(easing, duration).pipe(transform(target, scaleY(1, 0))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnimateDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.staggerDelay = 0;
        this.delay = 0;
        this._staggerIndex = 0;
        this.element.nativeElement.style.opacity = 0;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    set staggerIndex(i) {
        this._index = [
            ...this.element.nativeElement.parentElement.children
        ].indexOf(this.element.nativeElement);
        this._staggerIndex = i;
    }
    /**
     * @return {?}
     */
    get staggerIndex() {
        return this._staggerIndex;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.animIn) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._clone = this.element.nativeElement;
            this._parent = this.element.nativeElement.parentElement;
            this._index = [
                ...this.element.nativeElement.parentElement.children
            ].indexOf(this.element.nativeElement);
            of(true)
                .pipe(delay(this.staggerDelay * this.staggerIndex + this.delay), flatMap((/**
             * @return {?}
             */
            () => this.animIn(this.element))), before((/**
             * @return {?}
             */
            () => (this.element.nativeElement.style.opacity = ''))))
                .subscribe();
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // TODO Why though?
        if (this.element.nativeElement.parentElement) {
            // outer parent go destroyed
            return;
        }
        if (!this.animOut) {
            // no animation specified
            return;
        }
        this._inserted = this._parent.insertBefore(this._clone, this._parent.children[this._index]);
        this.element.nativeElement = this._inserted;
        of(true)
            .pipe(delay(this.staggerDelay * (this.staggerIndex + 1)), flatMap((/**
         * @return {?}
         */
        () => this.animOut(this.element))))
            .subscribe({
            complete: (/**
             * @return {?}
             */
            () => {
                this._parent.removeChild(this._inserted);
            })
        });
    }
}
AnimateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anim]'
            },] }
];
/** @nocollapse */
AnimateDirective.ctorParameters = () => [
    { type: ElementRef }
];
AnimateDirective.propDecorators = {
    animIn: [{ type: Input, args: ['anim.in',] }],
    animOut: [{ type: Input, args: ['anim.out',] }],
    staggerIndex: [{ type: Input, args: ['anim.stagger',] }],
    staggerDelay: [{ type: Input, args: ['anim.stagger.delay',] }],
    delay: [{ type: Input, args: ['anim.delay',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FivOverlayService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} rendererFactory
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, rendererFactory, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} content
     * @return {?}
     */
    morph(component, content) {
        /** @type {?} */
        const resolvedContent = this.resolveNgContent(content);
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, resolvedContent);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        domElem.style.opacity = '0';
        document.body.appendChild(domElem);
        /** @type {?} */
        const s = new Subject();
        setTimeout((/**
         * @return {?}
         */
        () => {
            s.next(componentRef.instance);
            domElem.style.opacity = '1';
        }), 0);
        return s.asObservable();
    }
    /**
     * @private
     * @template T
     * @param {?} content
     * @return {?}
     */
    resolveNgContent(content) {
        if (!content) {
            return;
        }
        if (typeof content === 'string') {
            /** @type {?} */
            const element = this.renderer.createText(content);
            return [[element]];
        }
        if (content instanceof TemplateRef) {
            /** @type {?} */
            const viewRef = content.createEmbeddedView(null);
            return [viewRef.rootNodes];
        }
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        return [[componentRef.location.nativeElement]];
    }
}
FivOverlayService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FivOverlayService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: RendererFactory2 },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ FivOverlayService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FivOverlayService_Factory() { return new FivOverlayService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(RendererFactory2), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR)); }, token: FivOverlayService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FivOverlay {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.afterInit = new EventEmitter();
        this._open = false;
    }
    /**
     * @param {?=} priority
     * @param {?=} data
     * @return {?}
     */
    show(priority, data) {
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
            () => {
                this.afterInit.emit(data);
            }), 0);
            return this.componentRef.instance;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
            this._open = false;
        }
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
}
FivOverlay.decorators = [
    { type: Component, args: [{
                selector: 'fiv-overlay',
                template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [""]
            }] }
];
/** @nocollapse */
FivOverlay.ctorParameters = () => [
    { type: FivOverlayService }
];
FivOverlay.propDecorators = {
    ngContent: [{ type: ViewChild, args: ['content', { static: false },] }],
    priority: [{ type: Input }],
    afterInit: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FivOverlayContent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FivOverlayModule {
}
FivOverlayModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FivOverlay, FivOverlayContent],
                imports: [CommonModule],
                exports: [FivOverlay, FivOverlayContent],
                entryComponents: [FivOverlayContent],
                providers: [FivOverlayService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnimationsModule {
}
AnimationsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AnimateDirective],
                imports: [CommonModule, FivOverlayModule],
                exports: [AnimateDirective, FivOverlayModule],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function linear(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return (c * t) / d + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInQuad(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * (t /= d) * t + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutQuad(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutQuad(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if ((t /= d / 2) < 1) {
        return (c / 2) * t * t + b;
    }
    else {
        return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInCubic(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * (t /= d) * t * t + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutCubic(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if ((t /= d / 2) < 1) {
        return (c / 2) * t * t * t + b;
    }
    else {
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInQuart(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * (t /= d) * t * t * t + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutQuart(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutQuart(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if ((t /= d / 2) < 1) {
        return (c / 2) * t * t * t * t + b;
    }
    else {
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInQuint(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutQuint(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutQuint(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if ((t /= d / 2) < 1) {
        return (c / 2) * t * t * t * t * t + b;
    }
    else {
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInSine(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutSine(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutSine(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInExpo(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutExpo(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutExpo(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if (t === 0) {
        return b;
    }
    if (t === d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }
    else {
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInCirc(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutCirc(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutCirc(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if ((t /= d / 2) < 1) {
        return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    }
    else {
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInElastic(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    /** @type {?} */
    let a;
    /** @type {?} */
    let p;
    /** @type {?} */
    let s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
        return b;
    }
    else if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return (-(a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b);
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutElastic(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    /** @type {?} */
    let a;
    /** @type {?} */
    let p;
    /** @type {?} */
    let s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
        return b;
    }
    else if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return (a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
        c +
        b);
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutElastic(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    /** @type {?} */
    let a;
    /** @type {?} */
    let p;
    /** @type {?} */
    let s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
        return b;
    }
    else if ((t /= d / 2) === 2) {
        return b + c;
    }
    if (!p) {
        p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    if (t < 1) {
        return (-0.5 *
            (a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
            b);
    }
    else {
        return (a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
            c +
            b);
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @param {?} s
 * @return {?}
 */
function easeInBack(t, b, _c, d, s) {
    /** @type {?} */
    const c = _c - b;
    if (s === void 0) {
        s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @param {?} s
 * @return {?}
 */
function easeOutBack(t, b, _c, d, s) {
    /** @type {?} */
    const c = _c - b;
    if (s === void 0) {
        s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @param {?} s
 * @return {?}
 */
function easeInOutBack(t, b, _c, d, s) {
    /** @type {?} */
    const c = _c - b;
    if (s === void 0) {
        s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
        return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    else {
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInBounce(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    /** @type {?} */
    let v;
    v = easeOutBounce(d - t, 0, c, d);
    return c - v + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeOutBounce(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    }
    else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    }
    else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} _c
 * @param {?} d
 * @return {?}
 */
function easeInOutBounce(t, b, _c, d) {
    /** @type {?} */
    const c = _c - b;
    /** @type {?} */
    let v;
    if (t < d / 2) {
        v = easeInBounce(t * 2, 0, c, d);
        return v * 0.5 + b;
    }
    else {
        v = easeOutBounce(t * 2 - d, 0, c, d);
        return v * 0.5 + c * 0.5 + b;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const morphStylePixels = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
(target, fromEl, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => source.pipe(fromToPixels(target, getStylePixels(fromEl, style), getStylePixels(target, style), style))));
/** @type {?} */
const morphBoxModel = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
(target, fromEl, style) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphStylePixels(target, fromEl, `${style}-left`), morphStylePixels(target, fromEl, `${style}-right`), morphStylePixels(target, fromEl, `${style}-top`), morphStylePixels(target, fromEl, `${style}-bottom`));
}));
/** @type {?} */
const morphPosition = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const to = getPosition(target);
    /** @type {?} */
    const from = getPosition(fromEl);
    return source.pipe(fromToPosition(target, from, to));
}));
/** @type {?} */
const morphBoxShadow = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    const fromBS = getComputedStyle(fromEl.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    const ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    const pfBS = parseBoxShadow(fromBS);
    return source.pipe(fromTo(target, 'box-shadow', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    t => {
        const { tBS, fBS } = normalizeBoxShadows(ptBS, pfBS);
        /** @type {?} */
        const tweenedBS = tBS.map((/**
         * @param {?} bs
         * @param {?} index
         * @return {?}
         */
        (bs, index) => {
            /** @type {?} */
            const fBSi = fBS[index];
            fBSi.color = fBSi.color === 'none' ? 'rgba(0,0,0,0)' : fBSi.color;
            bs.color = bs.color === 'none' ? fBSi.color : bs.color;
            /** @type {?} */
            const toColor = parseRgb(bs.color);
            /** @type {?} */
            const fromColor = parseRgb(fBSi.color);
            /** @type {?} */
            const rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}));
/** @type {?} */
const morphElement = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphPosition(target, fromEl), morphBoxShadow(target, fromEl), morphStylePixels(target, fromEl, 'border-radius'), removeStyles(target, container));
}));
/** @type {?} */
const morphColor = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?=} style
 * @return {?}
 */
(target, fromEl, style = 'color') => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(style);
    return source.pipe(fromToColor(target, fromColor, style), removeStyles(target, color));
}));
/** @type {?} */
const morphText = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl), morphStylePixels(target, fromEl, 'font-size'), morphStylePixels(target, fromEl, 'font-weight'));
}));
/** @type {?} */
const morph = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
(target, fromEl) => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl, 'background-color'));
}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const stagger = (/**
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

export { AnimateDirective, AnimationsModule, FivOverlay, FivOverlayModule, FivOverlayService, after, afterStyle, before, beforeStyle, easeInBack, easeInBounce, easeInCirc, easeInCubic, easeInElastic, easeInExpo, easeInOutBack, easeInOutBounce, easeInOutCirc, easeInOutCubic, easeInOutElastic, easeInOutExpo, easeInOutQuad, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInQuad, easeInQuart, easeInQuint, easeInSine, easeOutBack, easeOutBounce, easeOutCirc, easeOutCubic, easeOutElastic, easeOutExpo, easeOutQuad, easeOutQuart, easeOutQuint, easeOutSine, fadeIn, fadeOut, fps, fromTo, fromToBoxModel, fromToColor, fromToPixels, fromToPosition, getPosition, getStylePixels, getTweenedRgb, linear, morph, morphBoxModel, morphBoxShadow, morphColor, morphElement, morphPosition, morphStylePixels, morphText, parseRgb, removeStyle, removeStyles, reverse, rgbToHex, scale, scaleX, scaleY, scaleYOut, setPosition, setStyle, slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp, stagger, toBoxModel, toBoxShadow, toMargin, toPadding, toPixels, toPosition, toRGB, transform, transformF, translateX, translateY, translateZ, tween, FivOverlayContent as ɵa };
//# sourceMappingURL=fivethree-ngx-rxjs-animations.js.map
