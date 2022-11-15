import axios from "axios";

const token = process.env.GATSBY_APP_INS_TOKEN;
const postsLimit = 3;
const instagramUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${postsLimit}&access_token=${token}`;

export const fetchInstagramPosts = async () => {
  try {
    const data = await axios.get(instagramUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
