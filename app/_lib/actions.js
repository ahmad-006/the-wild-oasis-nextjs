'use server';

import { auth, signIn, signOut } from '@/app/_lib/auth';
import { supabase } from './supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  const nationalId = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId))
    throw new Error('Invalid national ID');

  const updateData = {
    nationalId,
    nationality,
    countryFlag,
  };

  console.log('Updating Guest with:', updateData);

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) {
    console.error('Supabase Error:', error);
    throw new Error('Guest could not be updated');
  }

  revalidatePath('/account/profile');
}

export async function deleteBooking(id) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  // We should only delete the booking if it belongs to the authenticated guest
  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id)
    .eq('guestId', session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }

  revalidatePath('/account/reservations');
}
export async function updateBooking(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const bookingId = Number(formData.get('id'));

  const updatedFields = {
    numOfGuests: Number(formData.get('numOfGuests')),
    observations: formData.get('observations').slice(0, 1000),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', bookingId)
    .eq('guestId', session.user.guestId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath('/account/reservations');

  redirect('/account/reservations');
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numOfGuests: Number(formData.get("numOfGuests")),
    observations: formData.get("observations").slice(0, 1000),
    miscPrice: 0,
    totalPrice: bookingData.cabinPrice,
    hasPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from('bookings').insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }

  revalidatePath(`/cabins/${newBooking.cabinId}`);
  revalidatePath('/account/reservations');

  redirect('/cabins/thankyou');
}

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
