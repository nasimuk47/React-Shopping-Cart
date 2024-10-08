import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Collections></Collections>
      <BestSellers></BestSellers>
    </div>
  );
};

export default Home;
