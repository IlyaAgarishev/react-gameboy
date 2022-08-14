const sizeOfMatrix: number = 144;

export const matrix: Array<number> = [...Array(sizeOfMatrix)].map((el, i) => i);

export const isMobile = (() => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
})();
