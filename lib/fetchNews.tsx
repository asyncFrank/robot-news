import axios from "axios";
import { Category, Cultivation, FilterProps } from "../typings";

const urlBase = process.env.NEXT_PUBLIC_BASE_API_URL;

export const fetchNewsArticleTerms = async (filters: FilterProps) => {
  const { term } = filters;
  const response = await axios.get(`${urlBase}/?term=${term}`);

  return response.data;
};
export const fetchNewsArticlesCulture = async (id: any) => {
  // const { _id } = filters;
  // const url_local = 'http://localhost:9002/api/news'
  const response = await axios.get(`${urlBase}/article?newsId=${id}`);

  return response.data;
};

export const fechtNewsArticlesParticularTerm = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {};

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
