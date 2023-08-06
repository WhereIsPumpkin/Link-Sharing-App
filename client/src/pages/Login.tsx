import smallLogo from '../assets/logo-devlinks-small.svg';
import logoText from '../assets/devlinks-textSmall.svg';
import emailIcon from '../assets/icon-email.svg';
import axios from 'axios';
import { useState } from 'react';
import passwordIcon from '../assets/icon-password.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type LoginInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string>('');

  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required(`Can’t be empty`),
    password: yup.string().required('Can’t be empty'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: LoginInputs) => {
    try {
      const res = await axios.post('/api/users/login', data);
      console.log(res.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMsg(error.response.data);
    }
  };

  return (
    <div className='h-screen p-8 flex flex-col gap-16 font-defaultFont md:p-0 md:flex md:justify-center md:items-center md:bg-[#FAFAFA]'>
      <header className='flex items-center gap-2'>
        <img src={smallLogo} alt='devlinks logo' />
        <img src={logoText} alt='devlinks logo text' />
      </header>

      <main className='md:bg-white rounded-xl md:p-10 '>
        <h1 className='text-2xl text-dark-grey font-bold mb-2'>Login</h1>
        <p className='text-customGrey leading-6'>
          Add your details below to get back into the app
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
                autoComplete='email'
                placeholder='e.g. alex@email.com'
                className={`border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:border-2 focus:border-customPurple placeholder-customGrey ${
                  errors.email && 'focus:border-errorRed  '
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
                autoComplete='current-password'
                id='password'
                name='password'
                placeholder='Enter your password'
                className={`border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:border-2 focus:border-customPurple placeholder-customGrey ${
                  errors.password && ' focus:border-errorRed '
                } `}
              />
              {errors.password && (
                <p className='text-errorRed text-sm absolute right-4 top-1/2 -translate-y-1/2'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {errorMsg && <p className='text-errorRed text-sm'>{errorMsg}</p>}

          <button
            disabled={!!errors.email || !!errors.password}
            className='bg-customPurple text-white font-semibold rounded-lg py-3 disabled:bg-gray-400'
          >
            Login
          </button>
        </form>

        <p className='text-center mt-6 leading-6 text-customGrey'>
          Don’t have an account? <br />{' '}
          <span
            onClick={() => {
              navigate('/register');
            }}
            className=' text-customPurple md:cursor-pointer'
          >
            Create account
          </span>
        </p>
      </main>
    </div>
  );
};

export default Login;
