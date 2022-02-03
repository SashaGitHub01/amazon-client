import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { fetchSignUp } from '../../store/actionCreators/userAC';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const RegForm = ({ error }) => {
   const dispatch = useDispatch();
   const nav = useNavigate();

   const validation = Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
   })

   const formik = useFormik({
      initialValues: {
         username: '',
         password: '',
         email: ''
      },

      validationSchema: validation,

      onSubmit: async (val, helpers) => {
         await dispatch(fetchSignUp(val));

         if (!error) {
            helpers.resetForm()
            nav('/')
         }
      }
   })

   return (
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
         <Button type={'submit'}>
            Create
         </Button>
      </form>
   );
};

export default RegForm;
