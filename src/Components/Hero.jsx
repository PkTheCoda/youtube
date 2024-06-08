import React, { useState, useEffect } from 'react';
import tailwindbreakpoints from '../assets/tailwindbreakpointspic.png'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-[#fff7e2] h-max pb-40 font-outfit pt-10'>

    
      <div className="py-10 bg-sky-200">
        <p className="text-black text-center three-title">Current screen width: <span className="text-indigo-800">{screenWidth} pixels</span></p>
      </div>

      <img src={tailwindbreakpoints} className='mx-auto w-1/2 shadow-md rounded-md mt-20' />

      

      {/* Responsive Banner */}
      {/* <div className="w-full text-center five-title py-4">
        <div className="block sm:hidden bg-red-500 text-white py-2">This is the small screen banner</div>
        <div className="hidden sm:block md:hidden bg-blue-500 text-white py-2">This is the medium screen banner</div>
        <div className="hidden md:block lg:hidden bg-green-500 text-white py-2">This is the large screen banner</div>
        <div className="hidden lg:block xl:hidden bg-yellow-500 text-white py-2">This is the extra large screen banner</div>
        <div className="hidden xl:block 2xl:hidden bg-purple-500 text-white py-2">This is the 2x extra large screen banner</div>
        <div className="hidden 2xl:block bg-pink-500 text-white py-2">This is the largest screen banner</div>
      </div> */}

      {/* Display screen width */}
      {/* <div className="w-full text-center three-title py-4 bg-gray-200 dark:bg-gray-800 flex flex-col gap-y-8 items-center justify-center">
        <p className="text-gray-800 dark:text-gray-200">Current screen width: <span className="text-blue-600">{screenWidth} pixels</span></p>
        <img src={tailwindbreakpoints} className='w-1/2 shadow-md rounded-md' />
      </div> */}

      {/* Barrier */}
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      {/* Testimonial Practice */}
      <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              We have some fans.
            </h2>
          </div>

          <div className="columns-3 gap-8 space-y-8">

            <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                </div>
              </div>
              <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
                cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                </div>
              </div>
              <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero;
