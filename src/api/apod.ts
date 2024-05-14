import axios from "axios";

const API_KEY = "QdOgwTPehslBsaEWnP84cNtC0MauWpd1pAghCz3y";

export interface ApodData {
  date: string;
  explanation: string;
  title: string;
  url: string;
  media_type: string;
}

export const fetchApod = async (date: string): Promise<ApodData> => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
