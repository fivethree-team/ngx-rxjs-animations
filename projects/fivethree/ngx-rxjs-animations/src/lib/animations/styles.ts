export const position = ['position', 'top', 'left', 'height', 'width'];
export const container = ['border-radius'];
export const font = ['font-size', 'font-weight'];
export const color = ['color', 'background-color', 'border-color'];

export const boxModel = style => [
  `${style}-top`,
  `${style}-bottom`,
  `${style}-left`,
  `${style}-right`
];
