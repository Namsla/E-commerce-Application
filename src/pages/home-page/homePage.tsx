import Footer1 from "../../components/Nams-Layout/footer";
import Header1 from "../../components/Nams-Layout/header";
import { FeaturedProducts } from "./featured-products";
import { Faq } from "./frequently-asked-questions";
import { Hero } from "./hero-section";
import { Testimonials } from "./testimonial";

function HomePage() {
  return (
    <>
      <Header1 />
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
      </main>
      <Footer1 />
    </>
  );
}

export default HomePage;
