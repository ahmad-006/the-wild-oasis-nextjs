import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);

  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = await params;

  const cabin = await getCabin(cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid md:grid-cols-[3fr_4fr] grid-cols-1 md:gap-20 gap-8 border border-primary-800 py-3 md:px-10 px-5 md:mb-24 mb-12">
        <div className="relative h-64 md:h-auto md:scale-[1.15] md:-translate-x-3 overflow-hidden">
          <Image
            src={image}
            fill
            className="object-cover block z-10"
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="bg-primary-950 mb-5 text-accent-100 font-black text-5xl p-4 w-full md:text-7xl md:translate-x-[-254px] md:p-6 md:pb-1 md:w-[150%]">
            Cabin {name}
          </h3>

          <p className="md:text-lg text-base text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="md:text-lg text-base">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="md:text-lg text-base">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="md:text-lg text-base">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="md:text-5xl text-3xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
