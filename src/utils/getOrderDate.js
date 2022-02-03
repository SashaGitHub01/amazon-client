import { format } from 'date-fns'

export const getOrderDate = (date) => {
   return format(date, 'PPP')
}