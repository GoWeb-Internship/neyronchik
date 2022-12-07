import React, { useState, useEffect, useRef } from "react";

import Feed from "./Feed";

import { fetchInstagramPosts } from "../../utils/instaFeedApi";
import { defaultData } from "./defaultPosts";

const InstaFeeds = () => {
  const [feeds, setFeedsData] = useState([]);
  // console.log(feeds);

  useEffect(() => {
    const posts = false; //fetchInstagramPosts();

    // posts.then((resp) => {
    //   console.log(resp);

    //   if (resp?.data?.data) {
    //     setFeedsData(resp?.data?.data);
    //     return;
    //   }

    //   setFeedsData(defaultData);
    // });

    setFeedsData(defaultData);
  }, []);

  return (
    <div className="smOnly:ml-auto smOnly:mr-auto smOnly:max-w-[360px] md:flex md:flex-row md:flex-wrap md:justify-between">
      {feeds && feeds.map((feed) => <Feed key={feed.id} feed={feed} />)}
    </div>
  );
};

export default InstaFeeds;
