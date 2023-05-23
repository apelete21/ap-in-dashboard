export const removeElement = (id) => {
  document.querySelector(`.${id}`).remove();
};

export const modifyElement = (id) => {
  document.querySelector(`.${id}`).toggleAttribute("contenteditable");
};

export const cleanDOM = () => {
  // editor elements remove
  document
    .querySelectorAll(
      ".detailsContainer .editBtn, .action-btn, .action-list-btn, .listBtn"
    )
    .forEach((element, index) => {
      element.remove();
    });
  // empty elements remove
  document.querySelectorAll(".detailsContainer *").forEach((element, index) => {
    if (!element.hasChildNodes()) {
      element.remove();
    }
  });
  // removing the 
  document
    .querySelectorAll(".detailsContainer .onhover")
    .forEach((element, index) => {
      element.replaceWith(...element.childNodes);
    });
};

export const standaloneFunc = (fn) => {
  fn();
};
