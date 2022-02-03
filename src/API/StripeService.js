import { instance } from './index'

export class StripeService {
   static createSession = async (items) => {
      const res = await instance.post(`/stripe/create-checkout-session`, { items })

      return res.data?.data;
   }
}