import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Carousel1Img from "../../public/carousel-1.jpg";
import Carousel2Img from "../../public/carousel-2.png";
import Carousel3Img from "../../public/carousel-3.png";
import Service1Img from "../../public/service-1.png";
import Service2Img from "../../public/service-2.png";
import Service3Img from "../../public/service-3.png";
import AdImg from "../../public/ad.jpg";
import AdModal from "../components/ModalAd";

const HomePage = () => {
  const sale = (datestring: string): boolean => {
    return Date.parse(new Date().toString()) - Date.parse(datestring) <= 0;
  };

  const [modalState, setModalState] = useState<boolean>(true);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const handlePrev = (): void => {
    setCarouselIndex((prevIndex: number): number =>
      prevIndex > 0 ? prevIndex - 1 : 2
    );
  };

  const handleNext = (): void => {
    setCarouselIndex((prevIndex: number): number =>
      prevIndex < 2 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <Head>
        <title>Home | Aesthetics in Jewelry</title>
        <meta name="description" content="Aesthetics in Jewelry - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="home" className="pb-5">
        <div className="container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className={`carousel-item${
                  0 === carouselIndex ? " active" : ""
                }`}
              >
                <Image
                  className="d-block w-100"
                  src={Carousel1Img}
                  alt="Carousel 1 Image"
                  layout="responsive"
                />
              </div>
              <div
                className={`carousel-item${
                  1 === carouselIndex ? " active" : ""
                }`}
              >
                <Image
                  className="d-block w-100"
                  src={Carousel2Img}
                  alt="Carousel 2 Image"
                  layout="responsive"
                />
              </div>
              <div
                className={`carousel-item${
                  2 === carouselIndex ? " active" : ""
                }`}
              >
                <Image
                  className="d-block w-100"
                  src={Carousel3Img}
                  alt="Carousel 3 Image"
                  layout="responsive"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              onClick={handlePrev}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              onClick={handleNext}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <section className="bg-light">
          <div className="container py-5">
            Jewelry is a beautiful way to tell someone special that you love
            them. Show Mom you&apos;re thinking of her with an exquisite set of
            pearl earrings. Watch your best friend&apos;s face light up when you
            present her with a trendy trendy fashion bracelet. Design your own
            gemstone ring from premium amethyst, blue topaz, emerald, opal,
            ruby, citrine and other precious stones. At Aesthetics in Jewelry,
            we offer one-of-a-kind jewelry that is high quality and unparalleled
            when it comes to style and affordability. Our intricate designs are
            unlike any showcased in other boutiques, and we feature everything
            from vintage pieces to classic jewelry. Luxury awaits you when you
            browse our collection. Take pride in owning an exquisite piece
            that&apos;s made to last for a lifetime. Shopping for high quality
            jewelry has never been so simple or so rewarding. Contact us at{" "}
            <a href="tel:502-589-2728">(502) 589-2728</a> and we&apos;ll be
            happy to answer any questions or comments about our superior
            collection. Make the investment today.
          </div>
        </section>
        <section className="container pt-5">
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <Image
                  className="card-img-top"
                  src={Service1Img}
                  alt="Jewelry Services"
                />
                <div className="card-body">
                  <h5 className="card-title">Jewelry</h5>
                  <div className="card-text">
                    Life&apos;s special moments last forever when celebrated
                    with a beautiful piece of jewelry.
                  </div>
                  <div className="card-text">
                    <Link href="/exceptionals">
                      <a className="stretched-link">Shop Collection</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <Image
                  className="card-img-top"
                  src={Service2Img}
                  alt="Jewelry Repair Image"
                />
                <div className="card-body">
                  <h5 className="card-title">Jewelry Repairs</h5>
                  <div className="card-text">
                    We are dedicated to maintaining the value of your prized
                    possessions by keeping them in pristine condition.
                  </div>
                  <div className="card-text">
                    <Link href="/services">
                      <a className="stretched-link">Find Your Repair</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="card">
                <Image
                  className="card-img-top"
                  src={Service3Img}
                  alt="Image of location"
                />
                <div className="card-body">
                  <h5 className="card-title">Visit Us!</h5>
                  <div className="card-text">
                    Serving the area&apos;s top clientele, we welcome you to
                    come and try on your favorite pieces in a relaxed, friendly
                    environment, with local hospitality.
                  </div>
                  <div className="card-text">
                    <Link href="/visit">
                      <a className="stretched-link">Find Our Location</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      {sale("2022-02-12 15:00:00") && <AdModal image={AdImg} />}
    </>
  );
};

export default HomePage;
