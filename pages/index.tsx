import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Aesthetics in Jewelry</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="home" className="container pb-5 pt-3">
        <Carousel>
          {["1.jpg", "2.png", "3.png"].map((el) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`/carousel-${el}`}
                alt={`Image: carousel-${el}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </article>
    </>
  );
};

export default HomePage;
