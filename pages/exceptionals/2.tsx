import Head from "next/head";
import Image from "next/image";

const title = "Emerald and Diamond Necklace";

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
            src="/exceptional-2.png"
            alt={title}
            height={300}
            width={300}
          />
          <h1 className="pb-4">{title}</h1>
        </div>
        <ul>
          <li>Gold Quality: 18 Carats</li>
          <li>
            Pendant:
            <ul>
              <li>Genuine Emerald: 36.05 Carats</li>
              <li>Diamond: 1.66 Carats</li>
            </ul>
          </li>
          <li>
            Necklace:
            <ul>
              <li>Diamond: 5.00 Carats</li>
            </ul>
          </li>
        </ul>
      </article>
    </>
  );
};

export default ExceptionalsPage;
