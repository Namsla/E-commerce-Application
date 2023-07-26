import Footer1 from "../../components/Nams-Layout/footer";
import Header1 from "../../components/Nams-Layout/header";
import ProductDetails from "../product-details-page/product-detail";
import ProductListing from "../product-listing-page/product-listing";

function HomePage() {
  return (
    <>
      <Header1 />
      <ProductListing />
      <ProductDetails />
      <Footer1 />
    </>
  );
}

export default HomePage;
