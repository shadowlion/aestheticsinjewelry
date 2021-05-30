import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Diamond | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Diamond Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">April Birthstone: Diamond</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-4.jpg"
                alt="April Birthstone"
                height={300}
                width={300}
              />
            </div>
          </div>
          <p>
            Diamond, the birthstone of April, is also the traditional tenth and
            sixtieth anniversary gift. The name diamond refers to its hardness
            (Greek - adamas: unconquerable, unbreakable). Diamonds have the
            highest scratch hardness (10) and thermal conductivity of any known
            material. It has an extremely rigid lattice structure that can only
            be contaminated by very few trace elements like boron causing blue
            or nitrogen causing yellow. Other colors (such as brown, red, pink,
            orange and purple) can be cause by patterns of interstitial
            vacancies (vacuoles) or lattice defects changing the light
            absorption and therefore the color. Green colors are cause by
            irradiation.
          </p>
          <p>
            Colors can be changed in some types of diamonds by irradiation
            and/or heat either naturally or or color coating by man. Diamonds
            also can be lab coated in colorless or fancy colors by Chemical
            Vapor Deposition (CVD) or High Pressure/High Temperature (HPHT)
            methods.
          </p>
          <p>
            Any time someone purchases a diamond or any gemstone, any treatments
            or special handling requires meats or whether its natural or created
            should be disclosed before it's sold.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
