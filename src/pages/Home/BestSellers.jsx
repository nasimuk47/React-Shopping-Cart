import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Sellers");

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold capitalize mb-2">Best Sellers</h2>
        <p className="text-black/75 capitalize font-medium md:w-2/3 mx-auto">
          Check out our best-selling products loved by customers for their
          quality and style!
        </p>
      </div>

      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide
              key={product.id}
              className="flex flex-col items-center"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="mt-4 text-center px-2">
                <h4 className="text-base font-semibold mb-1 truncate">
                  {product.title}
                </h4>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
