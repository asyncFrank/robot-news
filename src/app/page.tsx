import { fetchNewsA } from "../../lib/fetchNews";
import { NewsResponse } from "../../typings";
import NewsList from "./NewsList";

export default async function Home({ searchParams }) {
  // const term = searchParams?.term;
  // fetch data news cultivations.join()
  const data =  await fetchNewsA({term: searchParams?.term || "",})
  // console.log(data)
  return (
    //  news list
    <div>
      <NewsList  newsProps ={data.news}/>
      
    </div>
  );
}
