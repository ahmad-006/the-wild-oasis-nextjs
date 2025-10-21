import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div>
      <Spinner />
      <h1 className="text-xl text-center"> Loading Cabin Data</h1>
    </div>
  );
}
