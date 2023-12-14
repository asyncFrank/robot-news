import { fechtNewsArticlesParticularTerm, fetchNewsArticleTerms } from "../../lib/fetchNews";
import { ArticleProps } from "../../typings";

type Props = {
  searchParams?: { term: string };
};

async function SearchPage ({searchParams}:Props) {

    const news : ArticleProps{} = await fechtNewsArticlesParticularTerm('general',searchParams?.term,true)
  return <div>SearchPage</div>;
};

export default SearchPage;
