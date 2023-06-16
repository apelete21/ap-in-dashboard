import React, { useState } from "react";
import random from "../../../../service/random";
import { modifyElement, removeElement } from "../../methods";
import { imgUrl, pictureReq } from "../../../../requests/article";

export const ImageUploader = ({ image, setImage }) => {
  const [success, setSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      UploadEvent(e);
    }
  };

  const UploadEvent = async (e) => {
    e.preventDefault();
    setLoading(true)
    const body = new FormData();
    body.append("file", e?.target?.files[0]);

    const { data, ok } = await pictureReq("POST", "upload", body);
    console.log({ data, ok });
    setImage(data?.srcUrl);
    setLoading(false)
  };

  return (
    <>
      <div className={`imageUploader ${loading && "imgLoading"}`}>
        <input
          type={"file"}
          title={""}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onChange={UploadEvent}
        />
      </div>
    </>
  );
};

export function BannerImg() {
  const [image, setImage] = useState();
  return (
    <>
      <section class="news-banner">
        <ImageUploader image={image} setImage={setImage} />
        <img
          src={`${imgUrl}/${image}`}
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
    setImages([...images, <ImageCard />]);
  };

  const modifyCaption = () => {
    modifyElement(captionID);
  };

  const removeImageContainer = () => {
    removeElement(contID);
  };

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
  const imageId = "img--" + random();
  const deleteImage = () => {
    removeElement(imageId);
  };
  return (
    <>
      <div class={`illustration-image ${imageId}`}>
        <button className="image-btn-remove" onClick={deleteImage}>
          X
        </button>
        <img
          src="https://appealofinnovation.com/assets/media/images/banners/news.png"
          // src="https://appealofinnovation.com/assets/media/images/news/news-two.png"
          alt=""
        />
      </div>
    </>
  );
}
