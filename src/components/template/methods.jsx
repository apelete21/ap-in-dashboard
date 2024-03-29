export const removeElement = (id) => {
  document.querySelector(`.${id}`).remove();
};

export const modifyElement = (id) => {
  document.querySelector(`.${id}`).toggleAttribute("contenteditable");
};

export const cleanJobDOM = () => {
  /**
   * editor elements remove
   */
  document
    .querySelectorAll(
      ".detailsContainer .editBtn, .action-btn, .action-list-btn, .listBtn"
    )
    .forEach((element, index) => {
      element.remove();
    });

    
  /**
 // empty elements remove //
 */
  // document.querySelectorAll(".detailsContainer *").forEach((element, index) => {
  //   if (!element.hasChildNodes()) {
  //     element.remove();
  //   }
  // });

  /**
   // removing the span element that wrap editable element
   */
  document
    .querySelectorAll(".detailsContainer .onhover")
    .forEach((element, index) => {
      element.replaceWith(...element.childNodes);
    });
};

export const cleanBlogDOM = () => {
  /**
   * editor elements remove
   */
  document
    .querySelectorAll(
      ".detailsContainer .editBtn, .action-btn, .action-list-btn, .listBtn, .imageUploader, .role, .image-btn-container, .image-btn-remove"
    )
    .forEach((element, index) => {
      element.remove();
    });

  /**
 // empty elements remove //
 */
  // document.querySelectorAll(".detailsContainer *").forEach((element, index) => {
  //   if (!element.hasChildNodes()) {
  //     element.remove();
  //   }
  // });

  /**
   // removing the span element that wrap editable element
   */
  document
    .querySelectorAll(".detailsContainer .onhover")
    .forEach((element, index) => {
      element.replaceWith(...element.childNodes);
    });
};