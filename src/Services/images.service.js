import axios from "axios";

export const getImages = async () => {
  let res = {};
  try {
    res = await axios.get("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": "61368461b2155c16bf859884"
      }
    });
    res = res?.data?.data;
  } catch (error) {
    console.log(error);
  }
  return res || [];
};
