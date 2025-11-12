"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity");
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex cursor-pointer">
      <Button
        filter={"all"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cabins
      </Button>
      <Button
        filter={"small"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1 - 3 Guests
      </Button>
      <Button
        filter={"medium"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4 - 7 Guests
      </Button>
      <Button
        filter={"large"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8 - 12 Guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 cursor-pointer ${filter === activeFilter && "bg-primary-700"}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
