import Footer1 from "../../components/Nams-Layout/footer";
import Header1 from "../../components/Nams-Layout/header";
import { ScrollToTop } from "../../components/Others/scroll-to-top";
import { FeaturedProducts } from "./featured-products";
import { Faq } from "./frequently-asked-questions";
import { Hero } from "./hero-section";
import { Testimonials } from "./testimonial";
import { useTitle } from "../../hooks/use-title";

function HomePage() {
  useTitle("Home Page");
  return (
    <>
      <ScrollToTop />
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
