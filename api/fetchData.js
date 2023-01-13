import axios from "axios";
import { RAPID_API_KEY } from "@env";

export const handleFetchData = async (type, bl_lat, tr_lat, bl_lng, tr_lng) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : 11.847676,
          tr_latitude: tr_lat ? tr_lat : 12.838442,
          bl_longitude: bl_lng ? bl_lng : 108.473209,
          tr_longitude: tr_lng ? tr_lng : 109.149359,
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "mi",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
