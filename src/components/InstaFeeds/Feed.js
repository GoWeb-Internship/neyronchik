import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Feed = (props) => {
  const { id, caption, media_type, media_url, permalink } = props.feed;
  let post;
  console.log(media_url);

  const sliceCaption = () => {
    if (caption && caption.length > 45) {
      return caption.slice(0, 45).trim() + "...";
    }
    if (caption) {
      return caption;
    }
  };
  console.log(sliceCaption().length);

  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta at nulla!";
  const sliceText = text.slice(0, 71).trim() + "...";
  // console.log(sliceText.length);

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="100%"
          height="auto"
          src={media_url}
          type="video/mp4"
          controls
          playsinline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
      break;
    default:
      post = (
        <div
          className={` bg-insta-card shadow-insta-card mb-[20px] max-w-[360px] overflow-hidden rounded-[30px] border border-solid border-[#FFFFFF] p-3 backdrop-blur-sm`}
        >
          <div className="mb-3 flex">
            <div className="mr-3 h-[132px] w-[132px] shrink-0 overflow-hidden rounded-[20px]">
              <img
                className="h-[inherit] object-cover"
                width="132px"
                height="132px"
                id={id}
                src={media_url}
                alt={caption}
              />
            </div>
            <div className="flex max-h-[132px] items-center pt-3 pb-3">
              <p className="text-insta-black text-sm leading-[150%]">
                {sliceCaption()}
              </p>
            </div>
          </div>
          <a
            className="text-insta-white shadow-insta-button flex h-11 w-full items-center justify-center rounded-[30px] border border-solid border-[#E11D48] bg-[#E11D48] p-[11px] text-center"
            href={permalink}
            rel="nofollow noreferrer noopener"
            target="_blank"
            aria-label="instagram"
          >
            Дізнатись більше
            <BsArrowRight size={21} className="text-insta-white ml-[6px]" />
          </a>
        </div>
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

export default Feed;
