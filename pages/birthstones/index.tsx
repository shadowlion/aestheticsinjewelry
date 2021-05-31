import Head from "next/head";
import Card from "react-bootstrap/Card";
import { birthstones } from "../../data";
import { getMonthFromIndex } from "../../helpers";

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
              <div className="col-12 col-md-4 col-lg-2 mb-3">
                <Card className="text-center">
                  <Card.Img src={`/stone-${index + 1}.jpg`} alt={birthstone} />
                  <Card.Title className="pt-3">
                    {getMonthFromIndex(index)}
                  </Card.Title>
                  <Card.Subtitle className="text-muted pb-3">
                    ({birthstone})
                  </Card.Subtitle>
                  <Card.Footer>
                    <Card.Link
                      href={`/birthstones/${index + 1}`}
                      className="stretched-link"
                    >
                      Details
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default BirthstonesPage;
