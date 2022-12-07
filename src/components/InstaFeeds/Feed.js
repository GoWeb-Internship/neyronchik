import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Feed = (props) => {
  const { id, caption, media_type, media_url, permalink } = props.feed;
  let post;
  // console.log(media_url);

  const sliceCaption = () => {
    if (caption && caption.length > 45) {
      return caption.slice(0, 45).trim() + "...";
    }
    if (caption) {
      return caption;
    }
  };
  // console.log(sliceCaption().length);

  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta at nulla!";
  const sliceText = text.slice(0, 45).trim() + "...";
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
        <div className="min-w-[296px] max-w-[360px] overflow-hidden rounded-[30px] border border-solid border-[#FFFFFF] bg-insta-card p-3 shadow-insta-card backdrop-blur-sm md:p-5 notXl:mb-[20px]">
          <div className="mb-3 flex md:mb-5">
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
            <div className="flex max-h-[132px] items-center pb-3 pt-3 smOnly:min-w-[128px] md:w-44">
              <p className="text-sm font-medium leading-[150%] text-insta-black mdOnly:text-base">
                {sliceCaption() || sliceText}
              </p>
            </div>
          </div>
          <a
            className="flex h-11 w-full items-center justify-center rounded-[30px] border border-solid border-[#E11D48] bg-[#E11D48] p-[11px] text-center text-insta-white shadow-insta-button sm:h-12 mdOnly:text-base"
            href={permalink}
            rel="nofollow noreferrer noopener"
            target="_blank"
            aria-label="instagram"
          >
            Дізнатись більше
            <BsArrowRight
              size={21}
              className="ml-[6px] text-insta-white md:hidden"
            />
            <BsArrowRight
              size={28}
              className="ml-[6px] hidden text-insta-white md:block"
            />
          </a>
        </div>
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

export default Feed;
