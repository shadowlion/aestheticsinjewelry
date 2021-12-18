import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { exceptionals, Exceptional } from "../../data";

const ExceptionalCard = ({
  exceptional,
  index,
}: {
  exceptional: Exceptional;
  index: number;
}) => {
  return (
    <div className="card">
      <div className="card-img-top text-center">
        <Image src={exceptional.img} alt={exceptional.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{exceptional.title}</h5>
        <Link href={`/exceptionals/${index + 1}`}>
          <a className="btn btn-primary stretched-link">Details</a>
        </Link>
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
                  <ExceptionalCard exceptional={exceptional} index={index} />
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
