import { intervalToDuration, addBusinessDays, format } from 'date-fns'

export const getInterval = () => {
   const init = addBusinessDays(new Date(), 14)
   const interval = {
      start: format(init, 'd LLLL'),
      end: format(addBusinessDays(init, 14), 'd LLLL')
   };

   return interval;
}