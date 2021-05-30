import Head from "next/head";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const exceptionals = [
  { title: "Large Open Sapphire and Diamond Ring" },
  { title: "Emerald and Diamond Necklace" },
  { title: "Yellow and White Diamond Ring" },
  { title: "Round Sapphire and Diamond Ring" },
  { title: "Emerald and Diamond Ring" },
  { title: "Tri-Color Gold and Diamond Ring" },
];

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
            what price you're looking for. However, regardless of the price
            point, some jewelry is so remarkable that it can only be called
            Exceptional.
          </p>
          <div className="row">
            {exceptionals.map((exceptional, index) => {
              return (
                <div className="col-12 col-md-4 mb-3">
                  <Card>
                    <Card.Img
                      src={`/exceptional-${index + 1}.png`}
                      alt={exceptional.title}
                    />
                    <Card.Body>
                      <Card.Title>{exceptional.title}</Card.Title>
                      <Button
                        href={`/exceptionals/${index + 1}`}
                        className="stretched-link"
                      >
                        Details
                      </Button>
                    </Card.Body>
                  </Card>
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
