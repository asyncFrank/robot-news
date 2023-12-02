import axios from "axios";
import { Cultivation, FilterProps } from "../typings";
// const urlBase = "http://localhost:9002" + "/api/news";
const urlBase = "https://sacci-agk.onrender.com" + "/api/news";

export const fetchNewsA = async (filters: FilterProps) => {
  const { term } = filters;
  const response = await axios.get(`${urlBase}/?term=${term}`);

  return response.data;
};
export const fecthArticle = async (newsId: string) => {
  // const { _id } = filters;
  const response = await axios.get(`${urlBase}/article/?newsId=${newsId}`);

  return response.data;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
const fetchNews = async (
  cultivation?: Cultivation | string,
  keywords?: string,
  isDinamic?: boolean
) => {
  //GRAPHQL
  //RFETCH WITH nEXTJS 13 caching...
  // sort by images vs not imagees
  //return result
  // http://localhost:9002/api/news?term=milho
};

// export default fetchNews;
