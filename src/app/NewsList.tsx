
import { ArticleProps } from "../../typings";
import Article from "./Article";

type Props = {
  newsProps: ArticleProps[];
};

const NewsList = ({ newsProps }:Props) => {

 
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {/* {newsProps.?.map((article) => (
        <Article key={article.title} article={article} />
      ))} */}
      
      {
        newsProps.map((article)=>(
          <Article key={article.title} article={article}/>
        ))
      }
      
    </main>
  );
};

export default NewsList;
