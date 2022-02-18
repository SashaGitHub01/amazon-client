import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { fetchSignUp, resetError } from '../../store/actionCreators/userAC';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import FormError from '../FormError';

const RegForm = ({ error, isSigning }) => {
   const dispatch = useDispatch();
   const nav = useNavigate();

   const validation = Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().email('Invalid email format').required(),
      password: Yup.string().min(3).max(20).required(),
   })

   const formik = useFormik({
      validateOnBlur: false,
      validateOnChange: false,
      initialValues: {
         username: '',
         password: '',
         email: ''
      },

      validationSchema: validation,

      onSubmit: async (val, helpers) => {
         helpers.setErrors({})
         await dispatch(fetchSignUp(val));
      }
   })

   useEffect(() => {
      dispatch(resetError())
   }, [])

   useEffect(() => {
      if (error) {
         formik.setErrors({ ...formik.errors, email: error })
      }
   }, [error])

   return (
      <div className="">
         <form
            onSubmit={formik.handleSubmit}
            className='py-4'
         >
            <div className="flex flex-col gap-3 mb-4">
               <Input
                  title={'Your name'}
                  type='text'
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}
               />
               <Input
                  title={'Email'}
                  type='text'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
               />
               <Input
                  title={'Password'}
                  type='password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
               />
            </div>
            <Button type={'submit'} disabled={isSigning}>
               Create
            </Button>
         </form>
         {Object.values(formik.errors).length > 0
            && <FormError
               errors={Object.values(formik.errors)}
            />}
      </div>
   );
};

export default RegForm;
