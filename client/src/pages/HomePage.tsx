import Header from '../components/Header';
import emptyImg from '../assets/illustration-empty.svg';

const HomePage = () => {
  return (
    <div className='bg-[#FAFAFA] h-screen font-defaultFont'>
      <Header />
      <main className='p-4'>
        <div className='rounded-t-lg p-6 bg-white flex flex-col gap-6 border-b border-[#D9D9D9] '>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[#333] font-bold text-2xl'>
                Customize your links
              </h1>
              <p className='text-[#737373]'>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
            <button className='w-full border border-[#633CFF] py-3 rounded-lg font-semibold text-[#633CFF] md-c'>
              + Add new link
            </button>
          </div>

          <div className='flex flex-col justify-center p-5 gap-6'>
            <img src={emptyImg} alt='empty' className='w-[124px] mx-auto' />
            <h1 className='text-[#333] font-bold text-2xl'>
              Let's get you started
            </h1>
            <p className='text-[#737373]'>
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-b-lg'>
          <button className='w-full h-11 bg-[#633CFF] rounded-lg text-white font-semibold'>
            Save
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
