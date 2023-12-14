"use client";
import { useSearchParams } from "next/navigation";

import { fetchNewsArticlesCulture } from "../../lib/fetchNews";

const ArticlePage = async () => {
  const params = useSearchParams();
  const newsId = params.get("newsId");

  const data = await fetchNewsArticlesCulture(newsId);

  // console.log("agora: ", data.date);
  // let dateBr = String(data.date)
  const dateBr =
    String(data.date).split("-")[2] +
    "/" +
    String(data.date).split("-")[1] +
    "/" +
    String(data.date).split("-")[0];

  // console.log(dateBr);

  return (
    // <article className="flex flex-col mb-4">
    <article>
      {/* <section className="flex flex-col lg:flex-row pb-24 py-1 px:0 lg:px-10 overflow-hidden"> */}
      <section>
        <img
          src={
            data.url_image_noticia === "NA"
              ? "/na-contact-img.png"
              : data.url_image_noticia
          }
          alt={data.title}
          className="h-48 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
        />
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">{data.title}</h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">{data.subtitle}</h2>
            <h3 className="font-bold pl-4">Por: {data.autor_materia}</h3>
            <p className="pl-4">{dateBr}</p>
          </div>
          <div className="py-6">
            <p>{data.body}</p>
            <h6>{data.obs !== '--' && data.obs}</h6>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
