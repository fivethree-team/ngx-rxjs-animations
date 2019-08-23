const VALUES_REG = /,(?![^\(]*\))/;
const PARTS_REG = /\s(?![^(]*\))/;

export const emptyBS = {
  inset: false,
  spreadRadius: 0,
  offsetY: 0,
  offsetX: 0,
  blurRadius: 0,
  color: 'rgb(0,0,0)'
};

export interface BoxShadow {
  inset: boolean;
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
}

const parseValue = (str: string) => {
  const parts = str.split(PARTS_REG);
  const inset = parts.includes('inset');
  const first = parts[0];
  const color = first;

  const nums = parts
    .filter(n => n !== 'inset')
    .filter(n => n !== color)
    .map(toNum);
  const [offsetX, offsetY, blurRadius, spreadRadius] = nums;
  const boxShadow: BoxShadow = {
    inset: inset || false,
    offsetX: offsetX || 0,
    offsetY: offsetY || 0,
    blurRadius: blurRadius || 0,
    spreadRadius: spreadRadius || 0,
    color: color || 'rgba(0, 0, 0, 0)'
  };
  return boxShadow;
};

const stringifyValue = (obj: BoxShadow) => {
  return [
    obj.inset ? 'inset' : null,
    obj.offsetX,
    obj.offsetY,
    obj.blurRadius,
    obj.spreadRadius,
    obj.color
  ]
    .filter(v => v !== null && v !== undefined)
    .map(toPx)
    .map(s => ('' + s).trim())
    .join(' ');
};

const toNum = v => {
  if (!/px$/.test(v) && v !== '0') return v;
  const n = parseFloat(v);
  return !isNaN(n) ? n : v;
};
const toPx = n => (typeof n === 'number' && n !== 0 ? n + 'px' : n);

export const parseBoxShadow = (str: string) =>
  str
    .split(VALUES_REG)
    .map(s => s.trim())
    .map(parseValue);
export const stringifyBoxShadow = (arr: BoxShadow[]) =>
  arr.map(stringifyValue).join(', ');

export function getTweenedBoxShadow(
  t: number,
  bs: BoxShadow,
  fBS: BoxShadow,
  rgb: any
) {
  const ret: BoxShadow = {
    inset: t >= 0.5 ? bs.inset : fBS.inset,
    color: rgb,
    blurRadius: t * (bs.blurRadius - fBS.blurRadius) + fBS.blurRadius,
    offsetX: t * (bs.offsetX - fBS.offsetX) + fBS.offsetX,
    offsetY: t * (bs.offsetY - fBS.offsetY) + fBS.offsetY,
    spreadRadius: t * (bs.spreadRadius - fBS.spreadRadius) + fBS.spreadRadius
  };
  return ret;
}

export function normalizeBoxShadows(tBS: BoxShadow[], fBS: BoxShadow[]) {
  tBS.forEach(bs => {
    if (fBS.length < tBS.length) {
      fBS.push(emptyBS);
    }
  });
  fBS.forEach(bs => {
    if (tBS.length < fBS.length) {
      tBS.push(emptyBS);
    }
  });

  return { tBS, fBS };
}
