import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Ruby | Aesthetics in Jewelry</title>
        <meta name="description" content="Aesthetics in Jewelry - Ruby Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">July Birthstone: Ruby</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-7.jpg"
                alt="July Birthstone"
                height={300}
                width={400}
              />
            </div>
          </div>
          <p>
            Ruby, the birthstone for July, is also the traditional gift for the
            fifteenth and fortieth anniversaries.
          </p>
          <p>
            Ruby is the red variety of corundum (Sapphire). The red in Ruby is
            caused by chromium in the crystal lattice structure of otherwise
            colorless Sapphire. It is third in hardness with a nine on the Moh
            scale (only Diamond (10) and Moissanite (9.5) are harder).
          </p>
          <p>
            Rubies are routinely heat treated to improve overall appearance of
            color, clarity, transparency and even stability. The treatment
            method of any gem should be disclosed along with any special
            handling requirements prior to purchase.
          </p>
          <p>
            Purity, and intensity of color along with clarity, size and quality
            of cut determine the value of the Ruby. One should examine and
            compare overall appearance with the unaided eye to pick the most
            attractive stone and then examine it under 10x magnification to
            ensure against durability issues.
          </p>
          <p>
            Ruby has long been symbolic of passion, courage, devotion, wealth
            and royalty.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
