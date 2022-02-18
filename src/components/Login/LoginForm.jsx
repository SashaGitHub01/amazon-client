import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { fetchSignIn, resetError } from '../../store/actionCreators/userAC';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormError from '../FormError';

const LoginForm = ({ error, isSigning }) => {
   const dispatch = useDispatch();

   const validation = Yup.object().shape({
      username: Yup.string().email('Invalid email format').required('Email is required field'),
      password: Yup.string().required('Password is required field'),
   })

   const formik = useFormik({
      validateOnBlur: false,
      validateOnChange: false,
      initialValues: {
         username: '',
         password: ''
      },

      validationSchema: validation,

      onSubmit: async (val, helpers) => {
         helpers.setErrors({})
         await dispatch(fetchSignIn(val));
      }
   })

   useEffect(() => {
      dispatch(resetError())
   }, [])

   useEffect(() => {
      if (error) {
         formik.setErrors({ ...formik.errors, username: error, })
      } else {
         formik.setErrors({})
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
                  title={'Email'}
                  type='text'
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}
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
               Sign In
            </Button>
         </form>
         {Object.values(formik.errors).length > 0
            && <FormError
               errors={Object.values(formik.errors)}
            />}
      </div>
   );
};

export default LoginForm;
