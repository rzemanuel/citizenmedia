import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import ContactShape1 from "@/shapes/contact-s-1";
import ContactShape2 from "@/shapes/contact-s-2";
import { RegularPage } from "@/types";
import ContactForm from "./ContactForm";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image, supports } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30">
          <div className="row relative">
            <div className="mx-auto md:col-10">
              <ContactForm />
            </div>

            {/* <!-- Start Bg Shape --> */}
            <div
              data-aos="fade-right-sm"
              className="pointer-events-none absolute bottom-[-8%] left-[5%] -z-10 hidden w-fit lg:block"
            >
              <ContactShape1 className={"text-quaternary"} />
            </div>
            <div
              data-aos="fade-left-sm"
              className="pointer-events-none absolute right-[4%] top-[35%] -z-10 hidden w-fit lg:block"
            >
              <ContactShape2 className={"text-tertiary"} />
            </div>
            {/* <!-- End Bg Shape --> */}
          </div>
          <div className="row gy-4 pt-12 text-center md:justify-between md:pt-24 lg:justify-around">
            {supports.map((support, i) => (
              <div key={i} data-aos="fade-up-sm" className="md:col-auto">
                <h2 className="sm:3xl mb-5 text-2xl font-semibold text-dark md:text-4xl">
                  {support.type}
                </h2>
                <p className="mb-2 text-lg sm:text-xl">
                  <a
                    className="hover:underline hover:underline-offset-2"
                    href={`mailto:${support.email}`}
                  >
                    {support.email}
                  </a>
                </p>
                <p className="text-lg sm:text-xl">
                  <a
                    className="hover:underline hover:underline-offset-2"
                    href={`tel:${support.mobile}`}
                  >
                    {support.mobile}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
