export const higher = (array) => {
  let number = 0;
  array.forEach((element) => {
    if (parseInt(element) > parseInt(number)) {
      number = parseInt(element);
    }
  });
  return number;
};
