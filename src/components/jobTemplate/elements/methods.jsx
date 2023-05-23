export const removeElement = (id) => {
  document.querySelector(`.${id}`).remove();
};

export const modifyElement = (id) => {
  document.querySelector(`.${id}`).toggleAttribute("contenteditable");
};

export const standaloneFunc = (fn) => {
  fn();
};
