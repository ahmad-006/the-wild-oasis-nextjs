import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
export const metadata = {
  title: "Profile",
};

export default function Page() {
  // CHANGE
  const nationality = "portugal";

  return (
    <div>
      <h2 className="font-semibold md:text-2xl text-xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="md:text-lg text-base mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
