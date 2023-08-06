import smallLogo from '../assets/logo-devlinks-small.svg';
import profIcon from '../assets/icon-profile-details-header.svg';
import linkIcon from '../assets/icon-links-header.svg';
import preview from '../assets/icon-preview-header.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-6 pl-6 pr-4 flex items-center justify-between rounded-b-lg bg-white '>
      <img src={smallLogo} alt='devlinks logo' />
      <div className='flex h-10 items-center'>
        <Link
          to='/'
          className='w-[4.5rem] rounded-lg flex items-center justify-center h-full md:cursor-pointer bg-[#EFEBFF]'
        >
          <img src={linkIcon} alt='link icon' />
        </Link>

        <Link
          to='/profile'
          className='w-[4.5rem] flex items-center justify-center  md:cursor-pointer '
        >
          <img src={profIcon} alt='profile icon' />
        </Link>
      </div>
      <div className='w-[3.3rem] border border-[#633CFF] rounded-lg h-10 flex items-center justify-center md:cursor-pointer '>
        <img src={preview} alt='preview icon' />
      </div>
    </header>
  );
};

export default Header;
