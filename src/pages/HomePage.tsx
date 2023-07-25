import Cgv from "../component/CGV/Cgv";
import Footer from "../component/Footer/Footer";
import ProductsCategories from "../component/productCtegories/ProductsCategories";

const HomePage = () => {
  const categories = ["entrées", "plats", "grillades", "desserts", "boissons"];
  return (
    <>
      <main>
        {categories.map((cate) => (
          <ProductsCategories category={cate}></ProductsCategories>
        ))}
      </main>
      <Footer />
      <Cgv />
    </>
  );
};
export default HomePage;
