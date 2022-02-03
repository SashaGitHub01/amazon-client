import { instance } from './index'

export class UsersService {
   static auth = async () => {
      const res = await instance.get('/user/auth');

      return res.data?.data
   }

   static login = async (body) => {
      const res = await instance.post('/user/login', body);

      return res.data?.data
   }

   static register = async (body) => {
      const res = await instance.post('/user/register', body);

      return res.data?.data
   }

   static logout = async (body) => {
      const res = await instance.delete('/user/logout');

      return res.data?.data
   }
}