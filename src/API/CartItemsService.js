import { instance } from './index'

export class CartService {
   static getCart = async () => {
      const res = await instance.get(`/cart`)

      return res.data?.data;
   }

   static createItem = async (id) => {
      const res = await instance.post(`/cartitem/${id}`)

      return res.data?.data;
   }

   static deleteItem = async (id) => {
      const res = await instance.delete(`/cartitem/${id}`)

      return res.data?.data;
   }

   static addItem = async (id) => {
      const res = await instance.put(`/cartitem/add/${id}`)

      return res.data?.data;
   }

   static subItem = async (id) => {
      const res = await instance.put(`/cartitem/sub/${id}`)

      return res.data?.data;
   }

}