type ArticleProps = {
  _id:string;
  title: string;
  subtitle:string;
  body: string;
  date: string;
  obs: string;
  contato_sacci: string;
  relevance: number;
  url_image_noticia: string;
  cultura: string;
  city: string;
  state: string;
  description: string;
  link: string;
  update_frequency: string;
  autor_materia:string;
};

type NewsResponse = {
  news: NewsResponse;
  total: Number;
  data: Article[] ;
};


type Category =
  | "sementes"
  | "agroquímicos"
  | "máquinas"
  | "adubos"
  | "serviços";

type Cultivation =
  | "ALGODÃO"
  | "ARROZ"
  | "BATATA"
  | "CAFÉ"
  | "CANA"
  | "FEIJÃO"
  | "FUMO"
  | "HORTIFRUTI"
  | "MANDIOCA"
  | "MILHO"
  | "SOJA"
  | "TOMATE"
  | "TRIGO"
  | "OUTROS"
  | "NI";


export interface FilterProps {
  term?: string;
  _id?: string;
}

export interface SlugProps{
  newsId: string;
}


