import { useState, useEffect } from "react";
import withNavbar from "../../components/HOC/withNavbar";
import { fetchSponsors } from "../../endpoints/sponsorsEndpoints"; // Mocked endpoint
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";

const Sponsors = () => {
  // State to hold sponsors data
  const [sponsorsData, setSponsorsData] = useState([
    {
      name: "Tech Corp",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      info: "Leading tech solutions provider for over 20 years.",
    },
    {
      name: "Innovate Inc.",
      logo: "https://via.placeholder.com/150",
      info: "Driving innovation in the education sector.",
    },
    {
      name: "Green Energy",
      logo: "https://via.placeholder.com/150",
      info: "Pioneering sustainable energy solutions worldwide.",
    },
    {
      name: "Tech Corp",
      logo: "https://via.placeholder.com/150",
      info: "Leading tech solutions provider for over 20 years.",
    },
    {
      name: "Innovate Inc.",
      logo: "https://via.placeholder.com/150",
      info: "Driving innovation in the education sector.",
    },
    {
      name: "Green Energy",
      logo: "https://via.placeholder.com/150",
      info: "Pioneering sustainable energy solutions worldwide.",
    },
    {
      name: "Green Energy",
      logo: "https://via.placeholder.com/150",
      info: "Pioneering sustainable energy solutions worldwide.",
    },
    {
      name: "Tech Corp",
      logo: "https://via.placeholder.com/150",
      info: "Leading tech solutions provider for over 20 years.",
    },
    {
      name: "Innovate Inc.",
      logo: "https://via.placeholder.com/150",
      info: "Driving innovation in the education sector.",
    },
    {
      name: "Green Energy",
      logo: "https://via.placeholder.com/150",
      info: "Pioneering sustainable energy solutions worldwide.",
    },
  ]);

  // useEffect(() => {
  //   async function fetchSponsorData() {
  //     console.log("Fetching sponsors");
  //     try {
  //       const res = await fetchSponsors();
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }

  //       const data = await res.json();
  //       console.log("Sponsor API Response:", data);
  //       setSponsorsData(data);
  //     } catch (error) {
  //       console.error("Error fetching sponsor data:", error);
  //     }
  //   }

  //   fetchSponsorData();
  // }, []);

  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-gray-100/0 via-gray-200/50 to-gray-300/0 py-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          TCCD Sponsors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sponsorsData.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105"
            >
              <div className="w-32 h-32 bg-gray-300 mx-auto rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-500">{sponsor.image}</span>
              </div>
              <p className="mt-4">{sponsor.name}</p>
              <p className="text-sm mt-2">{sponsor.info}</p>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-gray-600 font-light text-lg">
            A Big Thanks to All Our Sponsors!
          </p>
          <p className="text-gray-500 mt-2">
            We are grateful for the ongoing support from our sponsors, who help
            us make TCCD events successful year after year.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default withNavbar(Sponsors);
