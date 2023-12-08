import Link from "next/link";
import { ArticleProps } from "../typings";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: ArticleProps;
};

const Article = ({ article }: Props) => {
  return (
    <article
      className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105
    hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out"
    >
      {
        <img
          src={
            article.url_image_noticia === "NA"
              ? "/na-contact-img.png"
              : article.url_image_noticia
          }
          alt={article.title}
          width={80}
          // height={60}
          // className="rounded-sm object-contain"
          className="w-full object-cover rounded-t-lg shadow-md  h-48 "
        />
      }
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.title}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.autor_materia}-</p>
            <p>{article.date}</p>
          </footer>
        </div>
        {/* <ReadMoreButton article={article}/> */}
        <Link href={`/article?newsId=${article._id}`}>Ler mais</Link>
      </div>
    </article>
  );
};

export default Article;
