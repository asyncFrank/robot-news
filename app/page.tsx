import { fetchNewsA } from "../lib/fetchNews";
import { HomeProps } from '../typings'
import NewsList from "./NewsList";

// type Props={
//   term:string;
// }
export default async function Home({searchParams}:HomeProps) {
  //fetch news data
  //ainda nao colocaremos o tipo pois vem varios dados diferenets em data
  const data =  await fetchNewsA({term: searchParams?.term || "",})
  // console.log(data)
  return (
    //  news list
    <div>
      <NewsList  newsProps ={data.news}/>
      
    </div>
  );
}
