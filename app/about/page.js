import Image1 from "@/public/about-1.jpg";
import Image from "next/image";
import { getCabins } from "../_lib/data-service";

export const revalidate = 3600;
export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  const cabinsLength = cabins.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Hero Image */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-xl order-1">
            <Image
              src={Image1}
              alt="Family sitting around a fire pit in front of cabin"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw, 600px"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-6 order-2 lg:pt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-accent-400 leading-tight">
              Welcome to The Wild Oasis
            </h1>
            <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                Where nature's beauty and comfortable living blend seamlessly.
                Hidden away in the heart of the Italian Dolomites, this is your
                paradise away from home.
              </p>
              <p className="text-justify">
                Our <span className="font-semibold">{cabinsLength}</span> luxury
                cabins provide a cozy base, but the real freedom and peace
                you'll find in the surrounding mountains.
              </p>
              <p className="text-justify">
                Wander through lush forests, breathe in the fresh air, and watch
                the stars twinkle above from the warmth of a campfire or your
                hot tub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-24">
        <div className="bg-primary-700 p-4 sm:p-6 rounded-lg shadow-md text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {cabinsLength}
          </div>
          <div className="text-gray-400 text-sm">Luxury Cabins</div>
        </div>
        <div className="bg-primary-700 p-4 sm:p-6 rounded-lg shadow-md text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            1962
          </div>
          <div className="text-gray-400 text-sm">Founded</div>
        </div>
        <div className="bg-primary-700 p-4 sm:p-6 rounded-lg shadow-md text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            3
          </div>
          <div className="text-gray-400 text-sm">Generations</div>
        </div>
        <div className="bg-primary-700 p-4 sm:p-6 rounded-lg shadow-md text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            100%
          </div>
          <div className="text-gray-400 text-sm">Satisfaction</div>
        </div>
      </div>

      {/* History Section */}
      <section className="mb-12 sm:mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* History Content */}
          <div className="space-y-6 order-2 lg:order-1 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-accent-400 leading-tight">
              Managed by our family since 1962
            </h2>
            <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-justify">
                Since 1962, The Wild Oasis has been a cherished family-run
                retreat. Started by our grandparents, this haven has been
                nurtured with love and care.
              </p>
              <p className="text-justify">
                Over the years, we've maintained the essence of The Wild Oasis,
                blending the timeless beauty of the mountains with the personal
                touch only a family business can offer.
              </p>
              <p className="text-justify">
                Here, you're not just a guest; you're part of our extended
                family.
              </p>
            </div>
          </div>

          {/* History Image */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-xl order-1">
            <Image
              src="/about-2.jpg"
              fill
              alt="Family that manages The Wild Oasis"
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 rounded-lg p-6 sm:p-8 lg:p-12 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-accent-400 mb-4 sm:mb-6 leading-tight">
          Ready for your next adventure?
        </h3>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join us at The Wild Oasis soon, where tradition meets tranquility, and
          every visit is like coming home.
        </p>
        <a
          href="/cabins"
          className="inline-block bg-accent-500 hover:bg-accent-600 text-primary-800 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
        >
          Explore our luxury cabins
        </a>
      </section>
    </div>
  );
}
