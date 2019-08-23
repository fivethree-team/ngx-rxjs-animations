export declare const emptyBS: {
    inset: boolean;
    spreadRadius: number;
    offsetY: number;
    offsetX: number;
    blurRadius: number;
    color: string;
};
export interface BoxShadow {
    inset: boolean;
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    spreadRadius: number;
    color: string;
}
export declare const parseBoxShadow: (str: string) => BoxShadow[];
export declare const stringifyBoxShadow: (arr: BoxShadow[]) => string;
export declare function getTweenedBoxShadow(t: number, bs: BoxShadow, fBS: BoxShadow, rgb: any): BoxShadow;
export declare function normalizeBoxShadows(tBS: BoxShadow[], fBS: BoxShadow[]): {
    tBS: BoxShadow[];
    fBS: BoxShadow[];
};
