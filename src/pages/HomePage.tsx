import TeaCard from "../components/TeaSortCard/TeaSortCard";
import teas from "../data/teas.json";

type TeaSortCard = {
  name: string;
  image: string;
  fermentation: string;
  brewing: string;
  regions: string;
  popular: string;
  description: string;
};

const HomePage = () => {

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">Китайский чай</h1>
            <p className="hero__subtitle">Традиции, терруар и мастерство в каждой чашке</p>
            <p className="hero__text">
              Китайский чай — это не просто напиток, а целая культура. Вкус формируется климатом, высотой плантаций,
              способом обработки листа и умением мастеров. От нежных белых и цветочных зелёных до янтарных улунов
              и глубоких выдержанных пуэров — у каждого сорта свой характер и история.
            </p>
          </div>
        </div>
        <div className="hero__decor hero__decor--1" />
        <div className="hero__decor hero__decor--2" />
        <div className="hero__decor hero__decor--3" />
      </section>
      <section id="catalog" className="vsnap" aria-label="Каталог сортов чая">
        {teas.map((teaSortCard: TeaSortCard) => (
          <article className="vsnap__item" key={teaSortCard.name}>
            <TeaCard {...teaSortCard} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
