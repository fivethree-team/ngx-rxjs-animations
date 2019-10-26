import { Observable, of, merge } from 'rxjs';
import { map, first, tap, last, delay, flatMap } from 'rxjs/operators';
import { __spread, __read } from 'tslib';
import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var reverse = (/**
 * @return {?}
 */
function () { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(map((/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return 1 - t; })));
}); });
/** @type {?} */
var before = (/**
 * @param {?} next
 * @return {?}
 */
function (next) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    source
        .pipe(first(), tap(next))
        .subscribe();
    return source;
}); });
/** @type {?} */
var beforeStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
function (target, style, value) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(before((/**
     * @return {?}
     */
    function () { return (target.nativeElement.style[style] = value); })));
}); });
/** @type {?} */
var after = (/**
 * @param {?} next
 * @return {?}
 */
function (next) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    source
        .pipe(last(), tap(next))
        .subscribe();
    return source;
}); });
/** @type {?} */
var afterStyle = (/**
 * @param {?} target
 * @param {?} style
 * @param {?} value
 * @return {?}
 */
function (target, style, value) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(after((/**
     * @return {?}
     */
    function () { return (target.nativeElement.style[style] = value); })));
}); });
/** @type {?} */
var removeStyle = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
function (el, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(after((/**
     * @return {?}
     */
    function () { return (el.nativeElement.style[style] = ''); })));
}); });
/** @type {?} */
var removeStyles = (/**
 * @param {?} el
 * @param {?} style
 * @return {?}
 */
function (el, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(after((/**
     * @return {?}
     */
    function () { return style.forEach((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return (el.nativeElement.style[s] = ''); })); })));
}); });
/** @type {?} */
var transform = (/**
 * @param {?} target
 * @param {...?} ts
 * @return {?}
 */
function (target) {
    var ts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ts[_i - 1] = arguments[_i];
    }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.pipe(tap((/**
         * @param {?} t
         * @return {?}
         */
        function (t) {
            /** @type {?} */
            var styles = ts.map((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s(t); })).join(' ');
            target.nativeElement.style.transform = styles;
        })));
    });
});
/** @type {?} */
var fps = (/**
 * @return {?}
 */
function () { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var lastTime = 0;
    /** @type {?} */
    var startTime = 0;
    /** @type {?} */
    var frames = [];
    return source.pipe(before((/**
     * @return {?}
     */
    function () {
        lastTime = performance.now();
        startTime = lastTime;
    })), tap((/**
     * @return {?}
     */
    function () { return frames.push(1 / (performance.now() - lastTime)); })), tap((/**
     * @return {?}
     */
    function () { return (lastTime = performance.now()); })), after((/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var duration = performance.now() - startTime;
    })));
}); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var transformF = (/**
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
function (from, to, m) { return (/**
 * @template T
 * @param {?} t
 * @return {?}
 */
function (t) {
    /** @type {?} */
    var te = t * (to - from) + from;
    return m ? m(te) : "" + te;
}); });
/** @type {?} */
var translateY = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "translateY(" + t + "%)"; }));
});
/** @type {?} */
var translateX = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "translateX(" + t + "%)"; }));
});
/** @type {?} */
var translateZ = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "translateZ(" + t + "%)"; }));
});
/** @type {?} */
var scale = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "scale(" + t + ")"; }));
});
/** @type {?} */
var scaleX = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "scaleX(" + t + ")"; }));
});
/** @type {?} */
var scaleY = (/**
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (from, to) {
    return transformF(from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "scaleY(" + t + ")"; }));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var position = ['position', 'top', 'left', 'height', 'width'];
/** @type {?} */
var container = ['border-radius'];
/** @type {?} */
var color = ['color', 'background-color', 'border-color'];
/** @type {?} */
var boxModel = (/**
 * @param {?} style
 * @return {?}
 */
function (style) { return [
    style + "-top",
    style + "-bottom",
    style + "-left",
    style + "-right"
]; });

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
    var bounds = el.nativeElement.getBoundingClientRect();
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
    var r = Math.floor(c / (256 * 256));
    /** @type {?} */
    var g = Math.floor(c / 256) % 256;
    /** @type {?} */
    var b = c % 256;
    return "rgb(" + r + "," + g + "," + b + ")";
}
/**
 * @param {?} orig
 * @return {?}
 */
function rgbToHex(orig) {
    /** @type {?} */
    var rgb = parseRgb(orig);
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
    var parsed = orig
        .replace(/\s/g, '')
        .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    /** @type {?} */
    var rgb = __spread(parsed.splice(1, 3).map((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return +v; })), [+parsed[4] || 1]);
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
    var rgb;
    if (toColor[3] || fromColor[3]) {
        rgb = "rgba(" + (t * (toColor[0] - fromColor[0]) + fromColor[0]) + "," + (t *
            (toColor[1] - fromColor[1]) +
            fromColor[1]) + "," + (t * (toColor[2] - fromColor[2]) + fromColor[2]) + "," + (t *
            (toColor[3] - fromColor[3]) +
            fromColor[3]) + ")";
    }
    else {
        rgb = "rgb(" + (t * (toColor[0] - fromColor[0]) + fromColor[0]) + "," + (t *
            (toColor[0] - fromColor[0]) +
            fromColor[0]) + "," + (t * (toColor[0] - fromColor[0]) + fromColor[0]) + ")";
    }
    return rgb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VALUES_REG = /,(?![^\(]*\))/;
/** @type {?} */
var PARTS_REG = /\s(?![^(]*\))/;
/** @type {?} */
var emptyBS = {
    inset: false,
    spreadRadius: 0,
    offsetY: 0,
    offsetX: 0,
    blurRadius: 0,
    color: 'rgb(0,0,0)'
};
/** @type {?} */
var parseValue = (/**
 * @param {?} str
 * @return {?}
 */
function (str) {
    /** @type {?} */
    var parts = str.split(PARTS_REG);
    /** @type {?} */
    var inset = parts.includes('inset');
    /** @type {?} */
    var first = parts[0];
    /** @type {?} */
    var color = first;
    /** @type {?} */
    var nums = parts
        .filter((/**
     * @param {?} n
     * @return {?}
     */
    function (n) { return n !== 'inset'; }))
        .filter((/**
     * @param {?} n
     * @return {?}
     */
    function (n) { return n !== color; }))
        .map(toNum);
    var _a = __read(nums, 4), offsetX = _a[0], offsetY = _a[1], blurRadius = _a[2], spreadRadius = _a[3];
    /** @type {?} */
    var boxShadow = {
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
var stringifyValue = (/**
 * @param {?} obj
 * @return {?}
 */
function (obj) {
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
    function (v) { return v !== null && v !== undefined; }))
        .map(toPx)
        .map((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return ('' + s).trim(); }))
        .join(' ');
});
/** @type {?} */
var toNum = (/**
 * @param {?} v
 * @return {?}
 */
function (v) {
    if (!/px$/.test(v) && v !== '0')
        return v;
    /** @type {?} */
    var n = parseFloat(v);
    return !isNaN(n) ? n : v;
});
/** @type {?} */
var toPx = (/**
 * @param {?} n
 * @return {?}
 */
function (n) { return (typeof n === 'number' && n !== 0 ? n + 'px' : n); });
/** @type {?} */
var parseBoxShadow = (/**
 * @param {?} str
 * @return {?}
 */
function (str) {
    return str
        .split(VALUES_REG)
        .map((/**
     * @param {?} s
     * @return {?}
     */
    function (s) { return s.trim(); }))
        .map(parseValue);
});
/** @type {?} */
var stringifyBoxShadow = (/**
 * @param {?} arr
 * @return {?}
 */
function (arr) {
    return arr.map(stringifyValue).join(', ');
});
/**
 * @param {?} t
 * @param {?} bs
 * @param {?} fBS
 * @param {?} rgb
 * @return {?}
 */
function getTweenedBoxShadow(t, bs, fBS, rgb) {
    /** @type {?} */
    var ret = {
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
    function (bs) {
        if (fBS.length < tBS.length) {
            fBS.push(emptyBS);
        }
    }));
    fBS.forEach((/**
     * @param {?} bs
     * @return {?}
     */
    function (bs) {
        if (tBS.length < fBS.length) {
            tBS.push(emptyBS);
        }
    }));
    return { tBS: tBS, fBS: fBS };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fromTo = (/**
 * @param {?} el
 * @param {?} style
 * @param {?} from
 * @param {?} to
 * @param {?} m
 * @return {?}
 */
function (el, style, from, to, m) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(tap((/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var te = t * (to - from) + from;
        /** @type {?} */
        var value = m(te);
        el.nativeElement.style[style] = value;
    })));
}); });
/** @type {?} */
var fromToPixels = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
function (target, from, to, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromTo(target, style, from, to, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return t + "px"; })));
}); });
/** @type {?} */
var toPixels = (/**
 * @param {?} target
 * @param {?} to
 * @param {?} style
 * @return {?}
 */
function (target, to, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromToPixels(target, getStylePixels(target, style), to, style));
}); });
/** @type {?} */
var toBoxModel = (/**
 * @param {?} target
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
function (target, toBox, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(toPixels(target, typeof toBox !== 'number' ? toBox.left || 0 : toBox, style + "-left"), toPixels(target, typeof toBox !== 'number' ? toBox.right || 0 : toBox, style + "-right"), toPixels(target, typeof toBox !== 'number' ? toBox.top || 0 : toBox, style + "-top"), toPixels(target, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, style + "-bottom"), removeStyles(target, boxModel(style)));
}); });
/** @type {?} */
var fromToBoxModel = (/**
 * @param {?} target
 * @param {?} fromBox
 * @param {?} toBox
 * @param {?} style
 * @return {?}
 */
function (target, fromBox, toBox, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromToPixels(target, typeof fromBox !== 'number' ? fromBox.left || 0 : fromBox, typeof toBox !== 'number' ? toBox.left || 0 : toBox, style + "-left"), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.right || 0 : fromBox, typeof toBox !== 'number' ? toBox.right || 0 : toBox, style + "-right"), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.top || 0 : fromBox, typeof toBox !== 'number' ? toBox.top || 0 : toBox, style + "-top"), fromToPixels(target, typeof fromBox !== 'number' ? fromBox.bottom || 0 : fromBox, typeof toBox !== 'number' ? toBox.bottom || 0 : toBox, style + "-bottom"), removeStyles(target, boxModel(style)));
}); });
/** @type {?} */
var toPadding = (/**
 * @param {?} target
 * @param {?} padding
 * @return {?}
 */
function (target, padding) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(toBoxModel(target, padding, 'padding'));
}); });
/** @type {?} */
var toMargin = (/**
 * @param {?} target
 * @param {?} margin
 * @return {?}
 */
function (target, margin) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(toBoxModel(target, margin, 'margin'));
}); });
/** @type {?} */
var fromToPosition = (/**
 * @param {?} target
 * @param {?} from
 * @param {?} to
 * @return {?}
 */
function (target, from, to) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(fromToPixels(target, from.top, to.top, 'top'), fromToPixels(target, from.height, to.height, 'height'), fromToPixels(target, from.left, to.left, 'left'), fromToPixels(target, from.width, to.width, 'width'), removeStyles(target, position));
}); });
/** @type {?} */
var toPosition = (/**
 * @param {?} target
 * @param {?} to
 * @return {?}
 */
function (target, to) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    target.nativeElement.style.position = 'fixed';
    return source.pipe(toPixels(target, to.top, 'top'), toPixels(target, to.left, 'left'), toPixels(target, to.height, 'height'), toPixels(target, to.width, 'width'), removeStyles(target, position));
}); });
/** @type {?} */
var toBoxShadow = (/**
 * @param {?} target
 * @param {?} boxShadow
 * @return {?}
 */
function (target, boxShadow) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    var ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    var pfBS = parseBoxShadow(boxShadow);
    return source.pipe(fromTo(target, 'box-shadow', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        var _a = normalizeBoxShadows(ptBS, pfBS), tBS = _a.tBS, fBS = _a.fBS;
        /** @type {?} */
        var tweenedBS = tBS.map((/**
         * @param {?} bs
         * @param {?} index
         * @return {?}
         */
        function (bs, index) {
            /** @type {?} */
            var fBSi = fBS[index];
            /** @type {?} */
            var toColor = parseRgb(bs.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            var fromColor = parseRgb(fBSi.color) || parseRgb('rgb(0,0,0)');
            /** @type {?} */
            var rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}); });
/** @type {?} */
var fromToColor = (/**
 * @param {?} target
 * @param {?} fromColor
 * @param {?=} style
 * @return {?}
 */
function (target, fromColor, style) {
    if (style === void 0) { style = 'color'; }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var targetColor = getComputedStyle(target.nativeElement).getPropertyValue(style);
        /** @type {?} */
        var tRGB = parseRgb(targetColor);
        /** @type {?} */
        var fRGB = parseRgb(fromColor);
        console.log('from to', fRGB, tRGB);
        return source.pipe(fromTo(target, style, 0, 1, (/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return getTweenedRgb(tRGB, fRGB, t); })), removeStyles(target, color));
    });
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var slideOutDown = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateY(0, 100)));
});
/** @type {?} */
var slideOutUp = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateY(0, -100)));
});
/** @type {?} */
var slideOutLeft = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateX(0, -100)));
});
/** @type {?} */
var slideOutRight = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateX(0, 100)));
});
/** @type {?} */
var slideInDown = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateY(-100, 0)));
});
/** @type {?} */
var slideInUp = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateY(100, 0)));
});
/** @type {?} */
var slideInLeft = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateX(-100, 0)));
});
/** @type {?} */
var slideInRight = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, translateX(100, 0)));
});
/** @type {?} */
var fadeIn = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(fromTo(target, 'opacity', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "" + t; })));
});
/** @type {?} */
var fadeOut = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(fromTo(target, 'opacity', 1, 0, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) { return "" + t; })));
});
/** @type {?} */
var scaleYOut = (/**
 * @param {?} target
 * @param {?} easing
 * @param {?} duration
 * @return {?}
 */
function (target, easing, duration) {
    return tween(easing, duration).pipe(transform(target, scaleY(1, 0)));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnimateDirective = /** @class */ (function () {
    function AnimateDirective(element) {
        this.element = element;
        this.staggerDelay = 0;
        this.delay = 0;
        this._staggerIndex = 0;
        this.element.nativeElement.style.opacity = 0;
    }
    Object.defineProperty(AnimateDirective.prototype, "staggerIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._staggerIndex;
        },
        set: /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            this._index = __spread(this.element.nativeElement.parentElement.children).indexOf(this.element.nativeElement);
            this._staggerIndex = i;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AnimateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.animIn) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._clone = _this.element.nativeElement;
            _this._parent = _this.element.nativeElement.parentElement;
            _this._index = __spread(_this.element.nativeElement.parentElement.children).indexOf(_this.element.nativeElement);
            of(true)
                .pipe(delay(_this.staggerDelay * _this.staggerIndex + _this.delay), flatMap((/**
             * @return {?}
             */
            function () { return _this.animIn(_this.element); })), before((/**
             * @return {?}
             */
            function () { return (_this.element.nativeElement.style.opacity = ''); })))
                .subscribe();
        }), 0);
    };
    /**
     * @return {?}
     */
    AnimateDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function () { return _this.animOut(_this.element); })))
            .subscribe({
            complete: (/**
             * @return {?}
             */
            function () {
                _this._parent.removeChild(_this._inserted);
            })
        });
    };
    AnimateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[anim]'
                },] }
    ];
    /** @nocollapse */
    AnimateDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AnimateDirective.propDecorators = {
        animIn: [{ type: Input, args: ['anim.in',] }],
        animOut: [{ type: Input, args: ['anim.out',] }],
        staggerIndex: [{ type: Input, args: ['anim.stagger',] }],
        staggerDelay: [{ type: Input, args: ['anim.stagger.delay',] }],
        delay: [{ type: Input, args: ['anim.delay',] }]
    };
    return AnimateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnimationsModule = /** @class */ (function () {
    function AnimationsModule() {
    }
    AnimationsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AnimateDirective],
                    imports: [CommonModule],
                    exports: [AnimateDirective],
                    providers: []
                },] }
    ];
    return AnimationsModule;
}());

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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
    /** @type {?} */
    var a;
    /** @type {?} */
    var p;
    /** @type {?} */
    var s;
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
    var c = _c - b;
    /** @type {?} */
    var a;
    /** @type {?} */
    var p;
    /** @type {?} */
    var s;
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
    var c = _c - b;
    /** @type {?} */
    var a;
    /** @type {?} */
    var p;
    /** @type {?} */
    var s;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
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
    var c = _c - b;
    /** @type {?} */
    var v;
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
    var c = _c - b;
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
    var c = _c - b;
    /** @type {?} */
    var v;
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
var morphStylePixels = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
function (target, fromEl, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(fromToPixels(target, getStylePixels(fromEl, style), getStylePixels(target, style), style));
}); });
/** @type {?} */
var morphBoxModel = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?} style
 * @return {?}
 */
function (target, fromEl, style) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphStylePixels(target, fromEl, style + "-left"), morphStylePixels(target, fromEl, style + "-right"), morphStylePixels(target, fromEl, style + "-top"), morphStylePixels(target, fromEl, style + "-bottom"));
}); });
/** @type {?} */
var morphPosition = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var to = getPosition(target);
    /** @type {?} */
    var from = getPosition(fromEl);
    return source.pipe(fromToPosition(target, from, to));
}); });
/** @type {?} */
var morphBoxShadow = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    /** @type {?} */
    var targetBS = getComputedStyle(target.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    var fromBS = getComputedStyle(fromEl.nativeElement).getPropertyValue('box-shadow');
    /** @type {?} */
    var ptBS = parseBoxShadow(targetBS);
    /** @type {?} */
    var pfBS = parseBoxShadow(fromBS);
    return source.pipe(fromTo(target, 'box-shadow', 0, 1, (/**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        var _a = normalizeBoxShadows(ptBS, pfBS), tBS = _a.tBS, fBS = _a.fBS;
        /** @type {?} */
        var tweenedBS = tBS.map((/**
         * @param {?} bs
         * @param {?} index
         * @return {?}
         */
        function (bs, index) {
            /** @type {?} */
            var fBSi = fBS[index];
            fBSi.color = fBSi.color === 'none' ? 'rgba(0,0,0,0)' : fBSi.color;
            bs.color = bs.color === 'none' ? fBSi.color : bs.color;
            /** @type {?} */
            var toColor = parseRgb(bs.color);
            /** @type {?} */
            var fromColor = parseRgb(fBSi.color);
            /** @type {?} */
            var rgb = getTweenedRgb(toColor, fromColor, t);
            return getTweenedBoxShadow(t, bs, fBSi, rgb);
        }));
        return stringifyBoxShadow(tweenedBS);
    })), removeStyles(target, ['box-shadow']));
}); });
/** @type {?} */
var morphElement = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphPosition(target, fromEl), morphBoxShadow(target, fromEl), morphStylePixels(target, fromEl, 'border-radius'), removeStyles(target, container));
}); });
/** @type {?} */
var morphColor = (/**
 * @param {?} target
 * @param {?} fromEl
 * @param {?=} style
 * @return {?}
 */
function (target, fromEl, style) {
    if (style === void 0) { style = 'color'; }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(style);
        return source.pipe(fromToColor(target, fromColor, style), removeStyles(target, color));
    });
});
/** @type {?} */
var morphText = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl), morphStylePixels(target, fromEl, 'font-size'), morphStylePixels(target, fromEl, 'font-weight'));
}); });
/** @type {?} */
var morph = (/**
 * @param {?} target
 * @param {?} fromEl
 * @return {?}
 */
function (target, fromEl) { return (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function (source) {
    return source.pipe(morphElement(target, fromEl), morphBoxModel(target, fromEl, 'padding'), morphColor(target, fromEl, 'background-color'));
}); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var stagger = (/**
 * @param {?} targets
 * @param {?} animation
 * @param {?} d
 * @return {?}
 */
function (targets, animation, d) {
    /** @type {?} */
    var example = of(null);
    return merge.apply(void 0, __spread(targets.map((/**
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

export { AnimateDirective, AnimationsModule, after, afterStyle, before, beforeStyle, easeInBack, easeInBounce, easeInCirc, easeInCubic, easeInElastic, easeInExpo, easeInOutBack, easeInOutBounce, easeInOutCirc, easeInOutCubic, easeInOutElastic, easeInOutExpo, easeInOutQuad, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInQuad, easeInQuart, easeInQuint, easeInSine, easeOutBack, easeOutBounce, easeOutCirc, easeOutCubic, easeOutElastic, easeOutExpo, easeOutQuad, easeOutQuart, easeOutQuint, easeOutSine, fadeIn, fadeOut, fps, fromTo, fromToBoxModel, fromToColor, fromToPixels, fromToPosition, getPosition, getStylePixels, getTweenedRgb, linear, morph, morphBoxModel, morphBoxShadow, morphColor, morphElement, morphPosition, morphStylePixels, morphText, parseRgb, removeStyle, removeStyles, reverse, rgbToHex, scale, scaleX, scaleY, scaleYOut, setPosition, setStyle, slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp, stagger, toBoxModel, toBoxShadow, toMargin, toPadding, toPixels, toPosition, toRGB, transform, transformF, translateX, translateY, translateZ, tween };
//# sourceMappingURL=fivethree-ngx-rxjs-animations.js.map
