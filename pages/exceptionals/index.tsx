import Head from "next/head";
import Image from "next/image";
import Exceptional1Img from "../../public/exceptional-1.png";
import Exceptional2Img from "../../public/exceptional-2.png";
import Exceptional3Img from "../../public/exceptional-3.png";
import Exceptional4Img from "../../public/exceptional-4.png";
import Exceptional5Img from "../../public/exceptional-5.png";
import Exceptional6Img from "../../public/exceptional-6.png";

type Exceptional = { title: string; img: StaticImageData };

const exceptionals: Exceptional[] = [
  {
    title: "Large Open Sapphire and Diamond Ring",
    img: Exceptional1Img,
  },
  { title: "Emerald and Diamond Necklace", img: Exceptional2Img },
  { title: "Yellow and White Diamond Ring", img: Exceptional3Img },
  { title: "Round Sapphire and Diamond Ring", img: Exceptional4Img },
  { title: "Emerald and Diamond Ring", img: Exceptional5Img },
  { title: "Tri-Color Gold and Diamond Ring", img: Exceptional6Img },
];

const ExceptionalCard = ({ exceptional }: { exceptional: Exceptional }) => {
  return (
    <div className="card">
      <div className="card-img-top text-center">
        <Image src={exceptional.img} alt={exceptional.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{exceptional.title}</h5>
        <button className="btn btn-primary stretched-link">Details</button>
      </div>
    </div>
  );
};

const ExceptionalsPage = () => {
  return (
    <>
      <Head>
        <title>Exceptionals | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Exceptionals Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="exceptionals" className="container py-5">
        <h1 className="text-center pb-3">The Exceptionals</h1>
        <section>
          <p>
            We strive to provide an extensive selection of jewelry that
            maintains a high degree of beauty, quality and workmanship no matter
            what price you&apos;re looking for. However, regardless of the price
            point, some jewelry is so remarkable that it can only be called
            Exceptional.
          </p>
          <div className="row">
            {exceptionals.map((exceptional, index) => {
              return (
                <div className="col-12 col-md-4 mb-3" key={index}>
                  <ExceptionalCard exceptional={exceptional} />
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
};

export default ExceptionalsPage;
