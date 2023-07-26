import smallLogo from '../assets/logo-devlinks-small.svg';
import logoText from '../assets/devlinks-textSmall.svg';
import emailIcon from '../assets/icon-email.svg';
import passwordIcon from '../assets/icon-password.svg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
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
        <form className='mt-10 flex flex-col gap-6'>
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
                type='email'
                id='email'
                name='email'
                placeholder='e.g. alex@email.com'
                className='border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-customGrey '
              />
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
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                className='border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-customGrey '
              />
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
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm your password'
                className='border border-gray-300 rounded-lg px-11 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-customGrey '
              />
            </div>
          </div>

          <button className='bg-customPurple text-white font-semibold rounded-lg py-3'>
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
