import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/images/company/brand1.png" },
  { id: 2, img: "/images/company/brand2.png" },
  { id: 3, img: "/images/company/brand3.png" },
  { id: 4, img: "/images/company/brand4.png" },
  { id: 5, img: "/images/company/brand5.png" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
      <div className="flex items-center justify-around flex-wrap gap-4 py-4 border-b-2 border-gray-200">
        {companyLogo.map(({ id, img }) => (
          <div
            key={id}
            className="w-[140px] h-28 p-2 flex items-center justify-center bg-white border rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Company logo ${id}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Category grid */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
        {/* Side label */}
        <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-2 p-3 rounded-sm inline-flex shadow-lg">
          Explore new and popular styles
        </p>

        {/* Main category image */}
        <div className="w-full md:w-1/2">
          <Link to="/">
            <img
              src="/images/category/category-1.jpg"
              alt="Category 1"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {[
              "/images/category/category-2.jpg",
              "/images/category/category-3.jpg",
              "/images/category/category-4.jpg",
              "/images/category/category-5.jpg",
            ].map((src, index) => (
              <Link to="/" key={index}>
                <img
                  src={src}
                  alt={`Category ${index + 2}`}
                  className="w-full h-[200px] object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
