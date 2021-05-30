import Image from "next/image";

const BirthstonePage = () => {
  return (
    <article className="container py-5">
      <h3 className="text-center">November Birthstone: Citrine</h3>
      <section className="pb-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <Image
              src="/stone-11.jpg"
              alt="November Birthstone"
              height={300}
              width={400}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default BirthstonePage;
