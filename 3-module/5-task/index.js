"use strict";
function getMinMax(str) { // Реализуйте функцию, которая принимает строку с числами и возвращает объект, содержащий минимальное и максимальное значения чисел из этой строки.
  let returnValue = str
   .split(" ")
   .filter((i) => isFinite(i))
   .map((i) => +i);

  return {
    min: Math.min(...returnValue),
    max: Math.max(...returnValue)
  };
}

