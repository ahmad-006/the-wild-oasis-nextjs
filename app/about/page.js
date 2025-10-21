import Image1 from "@/public//about-1.jpg";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* Introduction Section */}
      <h1 className="md:text-4xl text-3xl mb-10 text-accent-400 font-medium">
        Welcome to The Wild Oasis
      </h1>
      <div className="space-y-8 mb-12 md:text-lg text-base">
        <p>
          Where nature's beauty and comfortable living blend seamlessly.
          Hidden away in the heart of the Italian Dolomites, this is your
          paradise away from home. But it's not just about the luxury cabins.
          It's about the experience of reconnecting with nature and enjoying
          simple pleasures with family.
        </p>
        <p>
          Our 8 luxury cabins provide a cozy base, but the real freedom and
          peace you'll find in the surrounding mountains. Wander through lush
          forests, breathe in the fresh air, and watch the stars twinkle above
          from the warmth of a campfire or your hot tub.
        </p>
        <p>
          This is where memorable moments are made, surrounded by nature's
          splendor. It's a place to slow down, relax, and feel the joy of
          being together in a beautiful setting.
        </p>
      </div>

      {/* First Image and Text Section */}
      <div className="mb-12">
        <Image
          src={Image1}
          alt="Family sitting around a fire pit in front of cabin"
          className="mb-8 w-full h-auto object-cover"
        />
        <div className="space-y-8 md:text-lg text-base">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>
          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 sm:px-8 px-6 sm:py-5 py-3 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>

      {/* Second Image and Text Section */}
      <div className="mb-12">
        <div className="relative aspect-square mb-8">
          <Image
            src="/about-2.jpg"
            className="object-cover"
            fill
            alt="Family that manages The Wild Oasis"
          />
        </div>
        <h1 className="md:text-4xl text-3xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>
        <div className="space-y-8 md:text-lg text-base">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>
          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 sm:px-8 px-6 sm:py-5 py-3 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
