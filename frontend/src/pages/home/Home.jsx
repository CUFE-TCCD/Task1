import Nav from "@/components/Nav";
import GradientBgTop from "../../components/GradientBgTop";
import GradientBgBottom from "../../components/GradientBgBottom";

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <GradientBgTop />
        <div className="mx-auto max-w-2xl py-32 sm:py-40 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-700">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Technical Center for Career Development
            </h1>
            <p className="mt-6 text-lg capitalize leading-8 text-gray-600">
              TCCD - A move to improve
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Upcoming Events
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <GradientBgBottom />
      </div>
    </div>
  );
}
