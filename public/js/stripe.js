/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51J03cQSG53LP0FHORXCWBx0eMcrjreG53l2dqTrOds4cB2HBHFtgjuoT1i32ZNMTtO8rBIwrKQ0GGrXY00W44CCB00OsXPjnaE'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-sessions/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err.reponse.data.message);
  }
};
