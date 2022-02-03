import React from 'react';
import { Modal, Rate, Tooltip } from 'antd';
import Button from '../Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateRate } from '../../store/actionCreators/itemAC';

const Rating = ({ stars, count, item, isRated, setIsRated, isAuth }) => {
   const dispatch = useDispatch()
   const [visible, setVisible] = useState(false);
   const [rate, setRate] = useState(1)

   const { isCreatingRate } = useSelector(state => state.item)

   const handleClose = () => {
      setVisible(false)
      setRate(1)
   }

   const handleOpen = () => {
      if (isRated || !isAuth) return;

      setVisible(true)
   }

   const handleOk = async () => {
      await dispatch(fetchCreateRate({ id: item._id, rate }))
      setVisible(false)
      setIsRated(true)
   }

   const handleChange = (val) => {
      setRate(val)
   }

   const Title = () => {
      return (
         <div className="">
            Rate <span className='font-semibold'>{item.title}</span>
         </div>
      )
   }

   const Footer = () => {
      return (
         <div className="flex justify-end">
            <div className="flex items-center gap-5">
               <Button
                  disabled={isCreatingRate}
                  onClick={handleOk}>
                  Confirm
               </Button>
               <Button
                  variant={'secondary'}
                  onClick={handleClose}
               >
                  Cancel
               </Button>
            </div>
         </div>
      )
   }

   return <div className="flex items-center gap-1 py-2">
      <Tooltip
         overlayClassName={`${isRated || !isAuth ? '' : 'hidden'}`}
         placement="right"
         color='var(--color-dark_gray)'
         title={isAuth ? 'You have already rated this item' : 'You must login to make a rate'}
      >
         <div className="flex items-center gap-1">
            <div
               onClick={handleOpen}
               className={`flex text-orange-400 text-[1.315rem] cursor-pointer hover:outline rounded-md
            outline-text_blue outline-1`}
            >
               {stars.map((Star) => Star)}
            </div>
            <div className="text-text_blue text">
               {count}
            </div>
         </div>
      </Tooltip>
      <Modal
         confirmLoading={isCreatingRate}
         title={<Title />}
         visible={visible}
         onOk={handleOk}
         onCancel={handleClose}
         footer={<Footer />}
      >
         <div className='flex justify-center'>
            <Rate
               value={rate}
               allowClear={false}
               onChange={handleChange}
               className='text-orange-400 text-xl'
            />
         </div>
      </Modal>
   </div>;
};

export default Rating;
