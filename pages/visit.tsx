import Head from "next/head";
import Image from "next/image";

const VisitUsPage = () => {
  return (
    <>
      <Head>
        <title>Visit Us | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="visit" className="container py-5">
        <h1 className="text-center pb-5">Visit Us!</h1>
        <Image
          src="/map.jpg"
          alt="Location of Aesthetics in Jewelry business"
          height={768}
          width={1072}
        />
      </article>
    </>
  );
};

export default VisitUsPage;
