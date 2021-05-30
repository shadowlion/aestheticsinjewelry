import Head from "next/head";
import Image from "next/image";

const title = "Yellow and White Diamond Ring";

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
            src="/exceptional-3.png"
            alt={title}
            height={300}
            width={300}
          />
          <h1 className="pb-4">{title}</h1>
        </div>
        <ul>
          <li>
            Gold Quality:
            <ul>
              <li>22 Karats (Yellow)</li>
              <li>18 Karats (White Gold)</li>
            </ul>
          </li>
          <li>Yellow Diamond: 4.54 Carats</li>
          <li>White Gold Diamonds: 1.99 Carats</li>
        </ul>
      </article>
    </>
  );
};

export default ExceptionalsPage;
