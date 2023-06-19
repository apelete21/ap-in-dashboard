import React, { useEffect, useState } from "react";
import random from "../../../../service/random";
import { modifyElement, removeElement } from "../../methods";
import { imgUrl, pictureReq } from "../../../../requests/article";

export const deleteImage = async (filename) => {
  return await pictureReq("POST", `delete/${filename}`, {});
};

export const ImageUploader = ({ image, setImage }) => {
  const [success, setSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (success) {
      await deleteImage(image);
    }
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await UploadEvent(e);
    }
  };

  const UploadEvent = async (e) => {
    if (success) {
      await deleteImage(image);
    }
    e.preventDefault();
    setLoading(true);
    const body = new FormData();
    body.append("file", e?.target?.files[0]);

    const { data, ok } = await pictureReq("POST", "upload", body);
    console.log({ data, ok });
    setImage(data?.srcUrl);
    setLoading(false);
    if (ok) setSuccess(true);
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

export function BannerImg({ setArticle }) {
  const [image, setImage] = useState("");
  return (
    <>
      <section className="news-banner">
        <ImageUploader image={image} setImage={setImage} />
        {image !== "" ? (
          <img src={`${imgUrl}/${image}`} className="bannerImg" alt="" srcSet="" />
        ) : (
          <>
            <div className="role">Upload your banner image</div>
          </>
        )}
      </section>
    </>
  );
}

export function ImgContainer() {
  const [images, setImages] = useState([<ImageCard />]);
  const captionID = "capId-" + random();
  const contID = "contId-" + random();
  const mustDelete = [];

  const addImgSection = () => {
    setImages([...images, <ImageCard mustDelete={mustDelete} />]);
  };

  const modifyCaption = () => {
    modifyElement(captionID);
  };

  const removeImageContainer = () => {
    mustDelete?.forEach( async (e, i) => {
      await deleteImage(e);
    });
    removeElement(contID);
  };

  return (
    <>
      <div className={`illustration-img ${contID}`}>
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
        <div className="illustration-img--container dflex">{images}</div>
        <p className={`img-info ${captionID}`}>
          Spring in Japan lasts from about mid
        </p>
      </div>
    </>
  );
}

export function ImageCard({ mustDelete }) {
  const imageId = "img--" + random();
  const [image, setImage] = useState("");
  const remove = async () => {
    removeElement(imageId);
    deleteImage(image || "");
  };

  useEffect(() => {
    mustDelete?.push(image);
  }, [image]);

  return (
    <>
      <div class={`illustration-image ${imageId}`}>
        <ImageUploader image={image} setImage={setImage} />
        <button className="image-btn-remove" onClick={remove}>
          X
        </button>
        {image !== "" ? (
          <img src={`${imgUrl}/${image}`} alt="" srcSet="" />
        ) : (
          <>
            <div className="role">Upload a image</div>
          </>
        )}
      </div>
    </>
  );
}
