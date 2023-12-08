"use client";
import { ArticleProps } from "../typings";
import { useRouter } from "next/navigation";

type Props = {
  article: ArticleProps;
};

const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    // const queryString = Object.entries(article)
    //   .map(([key, value]) => `${key}=${value}`)
    //   .join("&");
    // const url = `/article?${queryString}`
    // const url = '/article'
    // console.log(url)
    const { _id } = article;

    const url = `/article?newsId=${_id}`;

    router.push(url);
  
  };
  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 text-white h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Detalhes
    </button>
  );
};

export default ReadMoreButton;
