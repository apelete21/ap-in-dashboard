import React, { useState } from "react";


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
  const addImgSection = () => {
    setImages([...images, <ImageCard />])
  }
  return (
    <>
      <div class="illustration-img">
        <button onClick={addImgSection}>add second image</button>
        <div class="illustration-img--container dflex">{images}</div>
        <p class="img-info">Spring in Japan lasts from about mid</p>
      </div>
    </>
  );
}

export function ImageCard() {
  return (
    <>
      <div class="illustration-image">
        <img
          src="https://appealofinnovation.com/assets/media/images/news/news-two.png"
          alt=""
        />
      </div>
    </>
  );
}
