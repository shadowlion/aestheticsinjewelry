import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { birthstones, Birthstone } from "../../lib/data";
import { getMonthFromIndex } from "../../lib/helpers";

const BirthstoneCard = ({
  birthstone,
  index,
}: {
  birthstone: Birthstone;
  index: number;
}) => {
  return (
    <div className="card text-center">
      <div className="card-img-top">
        <Image src={birthstone.img} alt={birthstone.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title pt-3">{getMonthFromIndex(index)}</h5>
        <h6 className="card-subtitle text-muted pb-3">({birthstone.title})</h6>
        <Link href={`/birthstones/${index + 1}`}>
          <a className="stretched-link">Details</a>
        </Link>
      </div>
    </div>
  );
};

const BirthstonesPage = () => {
  return (
    <>
      <Head>
        <title>Birthstones | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Birthstones Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="birthstones" className="container py-5">
        <h1 className="text-center pb-4">Birthstones</h1>
        <section>
          <div className="row">
            {birthstones.map((birthstone, index) => (
              <div className="col-12 col-md-4 col-lg-2 mb-3" key={index}>
                <BirthstoneCard birthstone={birthstone} index={index} />
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default BirthstonesPage;
