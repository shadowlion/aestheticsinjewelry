import Head from "next/head";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import AdModal from "../components/AdModal";

const carousel = [
  {
    src: "/carousel-1.jpg",
    altText: "Carousel 1 image",
  },
  {
    src: "/carousel-2.png",
    altText: "Carousel 3 image",
  },
  {
    src: "/carousel-3.png",
    altText: "Carousel 3 image",
  },
];

const services = [
  {
    img: "service-1.png",
    title: "Jewelry",
    text: "Life's special moments last forever when celebrated with a beautiful piece of jewelry.",
    linkUrl: "/exceptionals",
    linkText: "Shop Collections",
  },
  {
    img: "service-2.png",
    title: "Jewelry Repairs",
    text: "We are dedicated to maintaining the value of your prized possessions by keeping them in pristine condition.",
    linkUrl: "/services",
    linkText: "Find Your Repair",
  },
  {
    img: "service-3.png",
    title: "Visit Us!",
    text: "Serving the area's top clientele, we welcome you to come and try on your favorite pieces in a relaxed, friendly environment, with local hospitality.",
    linkUrl: "/visit",
    linkText: "Find Our Location",
  },
];

const sale = (datestring: string): boolean => {
  return Date.parse(new Date().toString()) - Date.parse(datestring) <= 0;
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Aesthetics in Jewelry</title>
        <meta name="description" content="Aesthetics in Jewelry - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="home" className="pb-5">
        <Carousel className="container mb-5">
          {carousel.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                className="d-block w-100"
                src={image.src}
                alt={image.altText}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <section className="bg-light">
          <div className="container py-5">
            Jewelry is a beautiful way to tell someone special that you love
            them. Show Mom you’re thinking of her with an exquisite set of pearl
            earrings. Watch your best friend’s face light up when you present
            her with a trendy trendy fashion bracelet. Design your own gemstone
            ring from premium amethyst, blue topaz, emerald, opal, ruby, citrine
            and other precious stones. At Aesthetics in Jewelry, we offer
            one-of-a-kind jewelry that is high quality and unparalleled when it
            comes to style and affordability. Our intricate designs are unlike
            any showcased in other boutiques, and we feature everything from
            vintage pieces to classic jewelry. Luxury awaits you when you browse
            our collection. Take pride in owning an exquisite piece that’s made
            to last for a lifetime. Shopping for high quality jewelry has never
            been so simple or so rewarding. Contact us at{" "}
            <a href="tel:502-589-2728">(502) 589-2728</a> and we&apos;ll be
            happy to answer any questions or comments about our superior
            collection. Make the investment today.
          </div>
        </section>
        <section className="container pt-5">
          <div className="row">
            {services.map((service) => (
              <div className="col-12 col-md-4 mb-3" key={service.linkUrl}>
                <Card>
                  <Card.Img src={`/${service.img}`} alt={service.linkText} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Card.Text>
                      <Card.Link
                        href={service.linkUrl}
                        className="stretched-link"
                      >
                        {service.linkText}
                      </Card.Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </article>
      {sale("2021-11-28") && <AdModal />}
    </>
  );
};

export default HomePage;
