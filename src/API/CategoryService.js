import { instance } from './index'

export class CategoryService {
   static getOne = async (id) => {
      const res = await instance.get(`/category/${id}`)

      return res.data?.data;
   }

   static getAll = async () => {
      const res = await instance.get(`/category/`)

      return res.data?.data;
   }

}