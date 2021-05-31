import Head from "next/head";
import Image from "next/image";

const title = "Tri-Color Gold and Diamond Ring";

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
            src="/exceptional-6.png"
            alt={title}
            height={300}
            width={300}
          />
          <h1 className="pb-4">{title}</h1>
        </div>
        <ul>
          <li>Gold Quality: 18 Karats</li>
          <li>White Diamonds: 1.16 Carats</li>
          <li>Red-Yellow Diamonds: 1.17 Carats</li>
          <li>Pink Diamonds: 1.14 Carats</li>
        </ul>
      </article>
    </>
  );
};

export default ExceptionalsPage;
