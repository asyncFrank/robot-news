'use client'
import { notFound } from "next/navigation";
import { ArticleProps } from "../../typings";
import { useSearchParams } from "next/navigation";

type Props = {
  searchParams?: ArticleProps;
};

const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  
  const article: ArticleProps = searchParams;

  return (
    <article className="flex flex-col mb-4">
      <section className="flex flex-col lg:flex-row pb-24  px:0 lg:px-10 overflow-hidden">
        <img
          src={
            article.url_image_noticia === "NA"
              ? "/na-contact-img.png"
              : article.url_image_noticia
          }
          alt={article.title}
          className="h-48 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md "
        />
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title} aqui
          </h1>
        </div>
        {/* <div className="flex divide-x-0 space-x-4"> */}
        {/* <div className="flex "> */}
        <h2 className="font-bold">Por:{article.autor_materia}</h2>
        <h2 className="font-bold pl-4">Obs:{article.obs}</h2>
        <p className="pl-4">{article.date}</p>
        {/* </div> */}
        <p>{article.subtitle}</p>
        <p>{article.body}</p>
      </section>
    </article>
  );
};

export default ArticlePage;
