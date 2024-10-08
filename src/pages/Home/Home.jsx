import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Collections></Collections>
      <BestSellers></BestSellers>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
