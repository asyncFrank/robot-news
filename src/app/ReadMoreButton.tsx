"use client";
import { Article } from "../../typings";
import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

const ReadMoreButton = ({ article }: Article) => {
  const router = useRouter();

  const handleClick = () => {
    // const queryString = Object.entries(article)
    //   .map(([key, value]) => `${key}=${value}`)
    //   .join("&");
    const { _id } = article;
        
    const url = `/article/?newsId=${_id}`;
    console.log(url);
    router.push(url)
  };
  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 text-white h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >Detalhes</button>
  );
};

export default ReadMoreButton;
