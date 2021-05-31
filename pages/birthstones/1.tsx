import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Garnet | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Garnet Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">January Birthstone: Garnet</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-1.jpg"
                alt="January Birthstone"
                height={300}
                width={300}
              />
            </div>
          </div>
          <p>
            Garnet, the birthstone for January is also the traditional gift for
            second wedding anniversaries. Garnet is often thought of as red,
            however they are available in almost every color.
          </p>
          <p>
            Garnet is a group of complex silicate minerals exhibiting similar
            crystal structure and physical properties but differing in chemical
            makeup.
          </p>
          <p>
            The major species are Almandine, Andradite Grossular (Tsavorite and
            Hessionite) Pyrope and Uvarovite. There are many more varieties
            which are combinations of two or more of the six major varieties.
          </p>
          <ol>
            <li>
              Pyrope is usually vivid red to deep red. Rhodolite, a combination
              of Pyrope and Almandine, is light to dark purplish pink.
            </li>
            <li>Almandine is dark red to brownish red.</li>
            <li>
              Andradite is yellow to brown. The green variety is called
              Demantoid.
            </li>
            <li>
              Grossular is yellow orange to brown. The green variety is
              Tsavorite.
            </li>
            <li>Spessartite is reddish brown to orange.</li>
            <li>Uvarovite is green.</li>
          </ol>
          <p>
            Phenomena may occur as four ray and six ray stars and color change
            garnets.
          </p>
          <p>
            <strong>Properties:</strong>
          </p>
          <p>
            Garnets have a scratch hardness of 6.5 to 7.5 and require no
            treatment to enhance them other than polishing.
          </p>
          <p>
            <strong>Care Tips:</strong>
          </p>
          <p>Do not steam or ultrasonic Demantoid, Andradite or Star Stones.</p>
          <p>
            <strong>Purchasing Tips:</strong>
          </p>
          <p>
            When purchasing choose stones with the most appealing overall
            appearance to the unaided eye. Then examine under 10x magnification
            to look for any durability issues.
          </p>
          <p>
            <strong>Significance:</strong>
          </p>
          <p>
            Garnet has traditionally signified faith, truth and loyalty and are
            believed to brighten the disposition of those who wear them.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
