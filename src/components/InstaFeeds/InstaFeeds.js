import React, { useState, useEffect, useRef } from "react";

import Feed from "./Feed";

import { fetchInstagramPosts } from "../../utils/instaFeedApi";

const InstaFeeds = () => {
  const [feeds, setFeedsData] = useState([]);
  // console.log(feeds);

  useEffect(() => {
    const posts = fetchInstagramPosts();

    posts.then((resp) => {
      // console.log(resp === undefined);

      if (resp === undefined) {
        return;
      }

      setFeedsData(resp?.data.data);
    });
  }, []);

  return (
    <div className="container-feed">
      {feeds && feeds.map((feed) => <Feed key={feed.id} feed={feed} />)}
    </div>
  );
};

export default InstaFeeds;
