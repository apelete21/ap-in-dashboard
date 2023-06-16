import React, { useState } from "react";
import random from "../../../../service/random";
import { modifyElement, removeElement } from "../../methods";


export function BannerImg() {
  return (
    <>
      <section class="news-banner">
        <img
          src="https://appealofinnovation.com/assets/media/images/banners/news.png"
          alt=""
          srcset=""
        />
      </section>
    </>
  );
}

export function ImgContainer() {
  const [images, setImages] = useState([<ImageCard />]);
  const captionID = "capId-" + random();
  const contID = "contId-" + random();
  const addImgSection = () => {
    setImages([...images, <ImageCard />])
  }

  const modifyCaption = () => {
    modifyElement(captionID)
  }

  const removeImageContainer = () => {
    removeElement(contID)
  }

  return (
    <>
      <div class={`illustration-img ${contID}`}>
        <div className="image-btn-container">
          <button className="image-btn" onClick={addImgSection}>
            add image
          </button>
          <button className="image-btn" onClick={modifyCaption}>
            modify caption
          </button>
          <button className="image-btn" onClick={removeImageContainer}>
            remove
          </button>
        </div>
        <div class="illustration-img--container dflex">{images}</div>
        <p class={`img-info ${captionID}`}>
          Spring in Japan lasts from about mid
        </p>
      </div>
    </>
  );
}

export function ImageCard() {
  const imageId = "img--" + random()
  const deleteImage = () => {
      removeElement(imageId)
  }
  return (
    <>
      <div class={`illustration-image ${imageId}`}>
        <button className="image-btn-remove" onClick={deleteImage}>
          X
        </button>
        <img
          src="https://appealofinnovation.com/assets/media/images/news/news-two.png"
          alt=""
        />
      </div>
    </>
  );
}
