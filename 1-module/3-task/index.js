function ucFirst(str) {
  let firstStr = str.charAt(0).toUpperCase();
  return firstStr + str.substring(1);
}
// return firstStr + str.substr(1, str.length-1);