'use client';

import Link from 'next/link';
import ReservationCard from '@/app/_components/ReservationCard';
import { useOptimistic } from 'react';
import { deleteBooking } from '@/app/_lib/actions';

export default function ReservationList({ bookings: initialBookings }) {
  const [optimisticBookings, addOptimisticDelete] = useOptimistic(
    initialBookings,
    (curBookings, bookingId) => curBookings.filter((b) => b.id !== bookingId)
  );

  async function handleDelete(bookingId) {
    addOptimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {optimisticBookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{' '}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {optimisticBookings.map((booking) => (
            <ReservationCard 
              booking={booking} 
              key={booking.id} 
              onDelete={handleDelete} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}
