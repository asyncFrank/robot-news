'use client'
import {useSearchParams} from 'next/navigation'

import { fetchNewsA, fetchNewsArticle } from "../../lib/fetchNews";
import { ArticlePageProps, ArticleProps } from "../../typings";



const ArticlePage =  async () => {
  const params = useSearchParams();
  const newsId = params.get('newsId');
 
 
  const data = await fetchNewsArticle(newsId)

console.log('agora: ', data.date)


return (
  <article className="flex flex-col mb-4">
    <section className="flex flex-col lg:flex-row pb-24  px:0 lg:px-10 overflow-hidden">
      <img
        src={
          data.url_image_noticia === "NA"
            ? "/na-contact-img.png"
            : data.url_image_noticia
        }
        alt={data.title}
        className="h-48 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md "
      />
      <div className="px-10">
        <h1 className="headerTitle px-0 no-underline pb-2">
          {data.title} aqui
        </h1>
      </div>
      {/* <div className="flex divide-x-0 space-x-4"> */}
      {/* <div className="flex "> */}
      <h2 className="font-bold">Por:{data.autor_materia}</h2>
      <h2 className="font-bold pl-4">Obs:{data.obs}</h2>
      <p className="pl-4">{data.date}</p>
      {/* </div> */}
      <p>{data.subtitle}</p>
      <p>{data.body}</p>
    </section>
  </article>
);
};

export default ArticlePage;
