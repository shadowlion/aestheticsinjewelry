import Head from "next/head";
import Image from "next/image";

const title = "Large Open Sapphire and Diamond Ring";

const ExceptionalsPage = () => {
  return (
    <>
      <Head>
        <title>{title} | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Exceptionals Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="exceptionals" className="container py-5">
        <div className="text-center">
          <Image
            src="/exceptional-1.png"
            alt={title}
            height={300}
            width={300}
          />
          <h1 className="pb-4">{title}</h1>
        </div>
        <ul>
          <li>Gold Quality: 18 Karats</li>
          <li>Sapphire: 10.99 Carats</li>
          <li>Diamonds: 3.31 Carats (174)</li>
        </ul>
      </article>
    </>
  );
};

export default ExceptionalsPage;
