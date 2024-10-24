import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";
import Newsletter from "./Newsletter";
import Products from "./Pruducts";
import Footer from "./../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Products></Products>
      <Collections></Collections>
      <BestSellers></BestSellers>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
