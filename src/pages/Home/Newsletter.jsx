import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your email address.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    Swal.fire({
      title: "Thank you for subscribing!",
      text: `You subscribed with email: ${email}`,
      icon: "success",
      confirmButtonText: "Okay",
    });

    setEmail("");
  };

  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="text-3xl font-semibold text-center capitalize mb-8">
        Follow products and discounts on Instagram
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
        <Link>
          <img src="/images/instagram/img1.png" alt="" />
        </Link>
        <Link>
          <img src="/images/instagram/img2.png" alt="" />
        </Link>
        <Link>
          <img src="/images/instagram/img3.png" alt="" />
        </Link>
        <Link>
          <img src="/images/instagram/img4.png" alt="" />
        </Link>
        <Link>
          <img src="/images/instagram/img5.png" alt="" />
        </Link>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center capitalize mb-8">
          Or subscribe to the newsletter
        </h2>
        <form className="md:w-1/2 mx-auto text-center" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="bg-black text-white px-6 py-1 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
