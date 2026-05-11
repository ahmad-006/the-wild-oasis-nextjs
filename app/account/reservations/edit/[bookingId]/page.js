import UpdateBookingForm from '@/app/_components/updateBookingForm';
import { getBooking } from '@/app/_lib/data-service';

export default async function Page({ params }) {
  const { bookingId } = await params;
  const booking = await getBooking(bookingId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

     <UpdateBookingForm booking={booking} />
    </div>
  );
}

