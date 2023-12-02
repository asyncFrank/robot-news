import { fecthArticle } from "../../../lib/fetchNews";
import { ArticleProps, SlugProps } from "../../../typings";
import { notFound } from "next/navigation";
type Props = {
  searchParams?: SlugProps;
};
const ArticlePage = async ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const newsId = searchParams.newsId;
  const slgArticle: ArticleProps = await fecthArticle(newsId);
  //    console.log(data)

  return (
    <article className="flex flex-col mb-4">
      {/* <section className="flex flex-col lg:flex-row pb-24  px:0 lg:px-10 overflow-hidden"> */}
        <img
          src={
            slgArticle.url_image_noticia === "NA"
              ? "/na-contact-img.png"
              : slgArticle.url_image_noticia
          }
          alt={slgArticle.title}
          className="h-48 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md "
        />
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {slgArticle.title}
          </h1>
        </div>
        {/* <div className="flex divide-x-0 space-x-4"> */}
        {/* <div className="flex "> */}
          <h2 className="font-bold">Por:{slgArticle.autor_materia}</h2>
          <h2 className="font-bold pl-4">Obs:{slgArticle.obs}</h2>
          <p className="pl-4">{slgArticle.date}</p>
        {/* </div> */}
        <p>{slgArticle.subtitle}</p>
        <p>{slgArticle.body}</p>
      {/* </section> */}
    </article>
  );
};

export default ArticlePage;
