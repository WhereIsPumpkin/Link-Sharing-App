import smallLogo from '../assets/logo-devlinks-small.svg';
import logoText from '../assets/devlinks-textSmall.svg';
import emailIcon from '../assets/icon-email.svg';
import passwordIcon from '../assets/icon-password.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='p-8 flex flex-col gap-16 font-defaultFont'>
      <header className='flex items-center gap-2'>
        <img src={smallLogo} alt='devlinks logo' />
        <img src={logoText} alt='devlinks logo text' />
      </header>

      <main>
        <h1 className='text-2xl text-dark-grey font-bold mb-2'>Login</h1>
        <p className='text-customGrey leading-6'>
          Add your details below to get back into the app
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

          <button className='bg-customPurple text-white font-semibold rounded-lg py-3'>
            Login
          </button>
        </form>
        <p className='text-center mt-6 leading-6 text-customGrey'>
          Don’t have an account? <br />{' '}
          <span
            onClick={() => {
              navigate('/register');
            }}
            className=' text-customPurple '
          >
            Create account
          </span>
        </p>
      </main>
    </div>
  );
};

export default Login;
