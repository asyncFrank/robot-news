import Image from "next/image";
import { cultivations } from "../../constants";
import {fetchNewsA}  from "../../lib/fetchNews";
import { Article, NewsResponse } from "../../typings";
import NewsList from "./NewsList";

export default async function Home({ searchParams }) {
  // const term = searchParams?.term;
  // fetch data news cultivations.join()
  const data: NewsResponse =  await fetchNewsA({term: searchParams?.term || "",})
  // console.log(data)
  return (
    //  news list
    <div>
      <NewsList news={data}/>
      
    </div>
  );
}
