import { useState, useEffect } from "react";
import withNavbar from "../../components/HOC/withNavbar";
import { fetchSponsors } from "../../endpoints/sponsorsEndpoints";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";

const Sponsors = () => {
  const [sponsorsData, setSponsorsData] = useState([
    {
      firstName: "Tech",
      lastName: "Corp",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      email: "Tech@gmail.com",
    },
    {
      firstName: "ahmed",
      lastName: "mansour",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      email: "mansour@gmail.com",
    },
    {
      firstName: "ahmed",
      lastName: "ayman",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      email: "ahmedayman@gmail.com",
    },
    {
      firstName: "omar",
      lastName: "elzeny",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      email: "omarelzeny@gmail.com",
    },
    {
      firstName: "medhat",
      lastName: "tawfee",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      email: "medhattawfee@gmail.com",
    },
    {
      firstName: "hatem",
      lastName: "elghalab",
      logo: "https://stetson.com/cdn/shop/products/sbsnca-4134_silver_sand_1.jpg?v=1591215852",
      email: "elghalabhatem@gmail.com",
    },
  ]);

  useEffect(() => {
    async function fetchSponsorData() {
      try {
        const res = await fetchSponsors();

        const data = await res.json();
        setSponsorsData(data);
        console.log("Sponsor API Response:", data);
      } catch (error) {
        console.error("Error fetching sponsor data:", error);
      }
    }

    fetchSponsorData();
  }, []);

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
                <img
                  src={
                    sponsor.logo ||
                    "https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/457622186_1025691312682889_5724729561336696528_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EL87MxY1-LIQ7kNvgFQ77CQ&_nc_ht=scontent.fcai22-1.fna&_nc_gid=AuumfDocibql9otSEhhSR0i&oh=00_AYD_1hlnvdhINNKeLuvRVKEnqSUKoWwkSUOZlz8xmrS75Q&oe=67011C92"
                  }
                  alt={sponsor.firstName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="mt-4">
                {sponsor.firstName} {sponsor.lastName}
              </p>
              <p className="text-sm mt-2">{sponsor.email}</p>
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
