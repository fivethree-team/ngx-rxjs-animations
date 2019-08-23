export const transformF = (
  from: number,
  to: number,
  m: (t: number) => string
) => <T>(t: number) => {
  const te = t * (to - from) + from;
  return m ? m(te) : `${te}`;
};

export const translateY = (from, to) => {
  return transformF(from, to, t => `translateY(${t}%)`);
};

export const translateX = (from, to) => {
  return transformF(from, to, t => `translateX(${t}%)`);
};

export const translateZ = (from, to) => {
  return transformF(from, to, t => `translateZ(${t}%)`);
};

export const scale = (from, to) => {
  return transformF(from, to, t => `scale(${t})`);
};
export const scaleX = (from, to) => {
  return transformF(from, to, t => `scaleX(${t})`);
};
export const scaleY = (from, to) => {
  return transformF(from, to, t => `scaleY(${t})`);
};
