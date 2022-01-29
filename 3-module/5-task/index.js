"use strict";
function getMinMax(str) {
   .split(" ")
   .filter((i) => isFinite(i))
   .map((i) => +i);

  return {
    min: Math.min(...returnValue),
    max: Math.max(...returnValue)
  };
}

