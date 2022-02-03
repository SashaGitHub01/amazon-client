import { instance } from './index'

export class ItemsService {
   static getAll = async (category, query) => {
      const res = await instance.get(
         `/items?${category ? `category=${category}` : ''}&${query ? `query=${query}` : ''}`
      )

      return res.data?.data;
   }

   static getOne = async (id) => {
      const res = await instance.get(`/items/${id}`)

      return res.data?.data;
   }

   static rateItem = async (data) => {

      const res = await instance.post(`/rate/${data.id}`, { rate: data.rate })

      return res.data?.data;
   }

}