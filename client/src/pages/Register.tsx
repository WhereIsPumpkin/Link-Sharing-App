import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import smallLogo from '../assets/logo-devlinks-small.svg';
import logoText from '../assets/devlinks-textSmall.svg';
import emailIcon from '../assets/icon-email.svg';
import passwordIcon from '../assets/icon-password.svg';

type RegisterInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  // i want that state to wait string i use TS
  const [errorMsg, setErrorMsg] = useState<string>('');

  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match.')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: RegisterInputs) => {
    try {
      const response = await axios.post('/api/users/register', data);
      console.log(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <div className='h-screen p-8 flex flex-col gap-16 font-defaultFont md:p-0 md:flex md:justify-center md:items-center md:bg-[#FAFAFA]'>
      <header className='flex items-center gap-2'>
        <img src={smallLogo} alt='devlinks logo' />
        <img src={logoText} alt='devlinks logo text' />
      </header>

      <main className='md:bg-white rounded-xl md:p-10 '>
        <h1 className='text-2xl text-dark-grey font-bold mb-2'>
          Create new account
        </h1>
        <p className='text-customGrey leading-6'>
          Add your details below to create a new account
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-10 flex flex-col gap-6'
        >
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-xs text-black'>
              Email address
            </label>
            <div className='relative'>
              <img
                src={emailIcon}
                alt='Email icon'
                className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5'
              />
              <input
                {...register('email')}
                type='email'
                id='email'
                name='email'
                placeholder='e.g. alex@email.com'
                className={`border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:border-2 focus:border-blue-500 placeholder-customGrey ${
                  errors.email && 'focus:border-errorRed'
                } `}
              />
              {errors.email && (
                <p className='text-errorRed text-sm absolute right-4 top-1/2 -translate-y-1/2'>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password' className='text-xs text-black'>
              Password
            </label>
            <div className='relative'>
              <img
                src={passwordIcon}
                alt='password'
                className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5'
              />
              <input
                {...register('password')}
                type='password'
                id='password'
                name='password'
                placeholder='Enter password'
                className={`border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:border-2 focus:border-blue-500 placeholder-customGrey ${
                  errors.password && 'focus:border-errorRed'
                } `}
              />
              {errors.password && (
                <p className='text-errorRed text-sm absolute right-4 top-1/2 -translate-y-1/2'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='confirmPassword' className='text-xs text-black'>
              Confirm Password
            </label>
            <div className='relative'>
              <img
                src={passwordIcon}
                alt='confirm password'
                className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5'
              />
              <input
                {...register('confirmPassword')}
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm password'
                className={`border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:border-2 focus:border-blue-500 placeholder-customGrey ${
                  errors.confirmPassword && 'focus:border-errorRed'
                } `}
              />
              {errors.confirmPassword && (
                <p className='text-errorRed text-sm absolute right-4 top-1/2 -translate-y-1/2'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {errorMsg && <p className='text-errorRed text-sm'>{errorMsg}</p>}

          <button
            disabled={
              !!errors.email || !!errors.password || !!errors.confirmPassword
            }
            className='bg-customPurple text-white font-semibold rounded-lg py-3 disabled:bg-gray-400'
          >
            Create new account
          </button>
        </form>
        <p className='text-center mt-6 leading-6 text-customGrey'>
          Already have an account?{' '}
          <span
            onClick={() => {
              navigate('/login');
            }}
            className=' text-customPurple md:cursor-pointer'
          >
            Login
          </span>
        </p>
      </main>
    </div>
  );
};

export default Register;
