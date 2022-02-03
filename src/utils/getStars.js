import Decimal from 'decimal.js'
import { Star, StarFilled, StarHalf } from '../assets/icons';

const getNum = (num, frac) => {
   if (frac >= 0.8) {
      return num + 1
   } else if (frac >= 0.2) {
      return num + 0.5
   }

   return num
}

export const getStars = (rate) => {
   let arr = new Array(5).fill(0)
   const x = new Decimal(rate);
   const frc = (x.toFixed(1) % 1).toFixed(1);
   const num = x.floor().toNumber();

   const res = getNum(num, frc)
   const rest = res % 1;

   const arrClone = arr.map((val, i) => {
      const total = Math.floor(res)
      if (i + 1 > total) {
         return 0;
      }

      if (i + 1 <= total) {
         return 1
      }
   })

   if (rest) arrClone.splice(res, 1, rest)

   return arrClone
}