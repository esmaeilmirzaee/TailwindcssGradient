import * as React from 'react'
import Navbar from './components/Navbar'
import { NotificationIcon } from './components/utils/icons'

export default function App() {
  return (
        <main className='min-h-screen px-8 py-16 text-center bg-gray-700 text-gray-50/100'>
            <div className='grid items-start justify-center gap-8'>
                <h1 className='text-3xl font-black text-center'>
                    <span className='text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-600'>
                        Welcome to our website
                    </span>
                </h1>
                <div className='relative group'>
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 animate-tilt'></div>
                    <button className='relative flex items-center py-4 leading-none bg-black divide-x divide-gray-600 rounded-lg px-7'>
                        <span className='flex items-center space-x-5'>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 text-pink-600 animate-bell'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                                    />
                                </svg>
                            </span>
                            <span className='pr-6 text-gray-100'>
                                Labs release 2021.12
                            </span>
                        </span>
                        <span className='pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100'>
                            See what's new &rarr;
                        </span>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 mt-10'>
                <div className='relative max-w-lg'>
                    {/* our background */}
                    <div className='absolute top-0 bg-purple-300 rounded-full opacity-50 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>
                    <div className='absolute top-0 bg-yellow-300 rounded-full opacity-50 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob'></div>
                    <div className='absolute bg-pink-300 rounded-full opacity-50 -bottom-8 left-32 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000'></div>
                    <div className='relative m-8 space-y-4'>
                        <div className='flex flex-row items-center justify-between p-5 space-x-8 bg-white rounded-lg'>
                            <div className='flex-1 '>
                                <div className='h-4 bg-gray-300 rounded max-w-48'></div>
                            </div>
                            <div>
                                <div className='w-24 h-6 bg-purple-300 rounded-lg'></div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between p-5 space-x-8 bg-white rounded-lg hover:animate-pulse'>
                            <div className='flex-1'>
                                <div className='h-4 bg-gray-300 rounded max-w-48'></div>
                            </div>
                            <div>
                                <div className='w-32 h-6 rounded-lg bg-amber-300'></div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between p-5 space-x-8 bg-white rounded-lg'>
                            <div className='flex-1'>
                                <div className='h-4 bg-gray-300 rounded max-w-48'></div>
                            </div>
                            <div>
                                <div className='w-20 h-6 bg-pink-300 rounded-lg'></div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* thumbnails */}
                    <div>
                    <div className='grid p-4 bg-gray-900 min-h-screen place-items-center'>
                        <div className='relative w-[640px] h-[360px] bg-white overflow-hidden'>
                            {/* Top-left circle */}
                            <div
                                aria-hidden='true'
                                className='absolute -top-16 -left-12 w-[200px] h-[200px] bg-purple-200 rounded-full grid place-items-center'
                            >
                                <svg
                                    className='w-[64px] h-[72px] ml-3 mt-3'
                                    viewBox='0 0 64 72'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M60 29.0718C65.3333 32.151 65.3333 39.849 60 42.9282L12 70.641C6.66668 73.7202 1.16801e-05 69.8712 1.19493e-05 63.7128L1.4372e-05 8.28719C1.46412e-05 2.12878 6.66668 -1.72022 12 1.35899L60 29.0718Z'
                                        fill='white'
                                    />
                                </svg>
                            </div>
                            {/* Right big circle */}
                            <div
                                aria-hidden='true'
                                className='absolute w-[512px] h-[512px] bg-purple-200 rounded-full -top-20 -right-56'
                            ></div>
                            {/* Images */}
                            <div className='absolute top-10 right-8'>
                                <img
                                    src='https://www.dropbox.com/s/6lipca71meyf9f2/image-1.jpg?raw=1'
                                    alt='YouTuber cheerfully giving a shaka'
                                    className='object-cover w-64 shadow-2xl h-36 rounded-2xl rotate-3'
                                />
                                <img
                                    src='https://www.dropbox.com/s/sox1969sc1o6my9/image-2.png?raw=1'
                                    alt='Screenshot of Tailwind CSS code'
                                    className='object-cover w-64 translate-x-16 -translate-y-2 shadow-2xl h-36 rounded-2xl -rotate-3'
                                />
                            </div>
                            {/* Play button */}
                            <div className='absolute inset-y-0 grid items-center right-12'>
                                <a
                                    href='#'
                                    className='grid w-12 h-12 transition bg-purple-500 rounded-full ring-4 ring-white place-items-center hover:bg-purple-400 animate-ping'
                                >
                                    <span className='sr-only'>
                                        Watch the video
                                    </span>
                                    <svg
                                        className='w-4 ml-1'
                                        viewBox='0 0 16 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z'
                                            fill='white'
                                        />
                                    </svg>
                                </a>
                            </div>
                            {/* Content */}
                            <div className='relative flex flex-col justify-end w-2/3 h-full p-8 space-y-4'>
                                <p className='text-xs font-semibold tracking-wider text-purple-600 uppercase'>
                                    How we'd build it
                                </p>
                                <h1 className='text-4xl font-extrabold text-gray-900'>
                                    YouTube Thumbnail with Tailwind CSS
                                </h1>
                                <svg
                                    className='w-36'
                                    viewBox='0 0 145 19'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M15.1917 0C11.1406 0 8.60861 2.02555 7.59583 6.07667C9.115 4.05111 10.8874 3.29153 12.9129 3.79792C14.0686 4.08684 14.8946 4.92525 15.809 5.85335C17.2984 7.3652 19.0223 9.115 22.7875 9.115C26.8386 9.115 29.3706 7.08944 30.3833 3.03833C28.8642 5.06389 27.0918 5.82347 25.0662 5.31708C23.9106 5.02816 23.0845 4.18975 22.1702 3.26165C20.6808 1.7498 18.9569 0 15.1917 0ZM7.59583 9.115C3.54472 9.115 1.01278 11.1406 0 15.1917C1.51917 13.1661 3.29153 12.4065 5.31708 12.9129C6.47277 13.2018 7.29881 14.0402 8.21312 14.9683C9.70258 16.4802 11.4264 18.23 15.1917 18.23C19.2428 18.23 21.7747 16.2044 22.7875 12.1533C21.2683 14.1789 19.496 14.9385 17.4704 14.4321C16.3147 14.1432 15.4887 13.3047 14.5744 12.3766C13.0849 10.8648 11.3611 9.115 7.59583 9.115Z'
                                        fill='#06B6D4'
                                    />
                                    <path
                                        d='M44.4694 8.11684V5.93366H41.8664V2.44233L39.5992 3.11408V5.93366H37.668V8.11684H39.5992V13.1549C39.5992 15.8839 40.9847 16.8496 44.4694 16.4297V14.3935C42.7481 14.4774 41.8664 14.4984 41.8664 13.1549V8.11684H44.4694Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M54.408 5.93366V7.4241C53.6103 6.33251 52.3718 5.66076 50.7344 5.66076C47.8795 5.66076 45.5074 8.05386 45.5074 11.1817C45.5074 14.2885 47.8795 16.7026 50.7344 16.7026C52.3718 16.7026 53.6103 16.0309 54.408 14.9183V16.4297H56.6752V5.93366H54.408ZM51.0913 14.5404C49.202 14.5404 47.7745 13.134 47.7745 11.1817C47.7745 9.22942 49.202 7.82295 51.0913 7.82295C52.9806 7.82295 54.408 9.22942 54.408 11.1817C54.408 13.134 52.9806 14.5404 51.0913 14.5404Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M60.4513 4.35925C61.249 4.35925 61.8998 3.6875 61.8998 2.91079C61.8998 2.11309 61.249 1.46233 60.4513 1.46233C59.6536 1.46233 59.0029 2.11309 59.0029 2.91079C59.0029 3.6875 59.6536 4.35925 60.4513 4.35925ZM59.3177 16.4297H61.5849V5.93366H59.3177V16.4297Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M64.2173 16.4297H66.4844V1.10547H64.2173V16.4297Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M81.2083 5.93366L79.151 13.1759L76.9678 5.93366H74.8057L72.6015 13.1759L70.5652 5.93366H68.1721L71.4679 16.4297H73.6931L75.8972 9.35537L78.0804 16.4297H80.3056L83.6014 5.93366H81.2083Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M86.4045 4.35925C87.2022 4.35925 87.8529 3.6875 87.8529 2.91079C87.8529 2.11309 87.2022 1.46233 86.4045 1.46233C85.6068 1.46233 84.956 2.11309 84.956 2.91079C84.956 3.6875 85.6068 4.35925 86.4045 4.35925ZM85.2709 16.4297H87.538V5.93366H85.2709V16.4297Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M95.6913 5.66076C94.2639 5.66076 93.1303 6.18556 92.4376 7.27715V5.93366H90.1704V16.4297H92.4376V10.8038C92.4376 8.66263 93.6131 7.78096 95.1036 7.78096C96.531 7.78096 97.4547 8.62065 97.4547 10.216V16.4297H99.7218V9.98514C99.7218 7.25616 98.0425 5.66076 95.6913 5.66076Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M110.476 1.73523V7.4241C109.678 6.33251 108.44 5.66076 106.802 5.66076C103.947 5.66076 101.575 8.05386 101.575 11.1817C101.575 14.2885 103.947 16.7026 106.802 16.7026C108.44 16.7026 109.678 16.0309 110.476 14.9183V16.4297H112.743V1.73523H110.476ZM107.159 14.5404C105.27 14.5404 103.842 13.134 103.842 11.1817C103.842 9.22942 105.27 7.82295 107.159 7.82295C109.048 7.82295 110.476 9.22942 110.476 11.1817C110.476 13.134 109.048 14.5404 107.159 14.5404Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M120.34 16.7026C122.397 16.7026 124.181 15.632 125.063 13.9736L123.111 12.8611C122.607 13.8267 121.578 14.4774 120.319 14.4774C118.471 14.4774 117.065 13.071 117.065 11.1817C117.065 9.2924 118.471 7.88592 120.319 7.88592C121.578 7.88592 122.607 8.51569 123.069 9.50232L125.021 8.36874C124.181 6.73136 122.397 5.66076 120.34 5.66076C117.17 5.66076 114.798 8.05386 114.798 11.1817C114.798 14.2885 117.17 16.7026 120.34 16.7026Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M128.801 8.83057C128.801 8.07485 129.515 7.71799 130.334 7.71799C131.195 7.71799 131.929 8.09584 132.307 8.91454L134.217 7.84394C133.483 6.45846 132.055 5.66076 130.334 5.66076C128.193 5.66076 126.492 6.89929 126.492 8.87255C126.492 12.6301 132.139 11.5805 132.139 13.4488C132.139 14.2885 131.362 14.6244 130.355 14.6244C129.2 14.6244 128.361 14.0576 128.025 13.113L126.072 14.2465C126.744 15.758 128.256 16.7026 130.355 16.7026C132.622 16.7026 134.448 15.569 134.448 13.4698C134.448 9.58628 128.801 10.7409 128.801 8.83057Z'
                                        fill='#111827'
                                    />
                                    <path
                                        d='M138.48 8.83057C138.48 8.07485 139.194 7.71799 140.012 7.71799C140.873 7.71799 141.608 8.09584 141.986 8.91454L143.896 7.84394C143.161 6.45846 141.734 5.66076 140.012 5.66076C137.871 5.66076 136.171 6.89929 136.171 8.87255C136.171 12.6301 141.818 11.5805 141.818 13.4488C141.818 14.2885 141.041 14.6244 140.033 14.6244C138.879 14.6244 138.039 14.0576 137.703 13.113L135.751 14.2465C136.423 15.758 137.934 16.7026 140.033 16.7026C142.3 16.7026 144.127 15.569 144.127 13.4698C144.127 9.58628 138.48 10.7409 138.48 8.83057Z'
                                        fill='#111827'
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign in */}
            <div className='mt-40 selection:bg-rose-500 selection:text-white'>
                <div className='flex items-center justify-center min-h-screen bg-rose-100'>
                    <div className='flex-1 p-8'>
                        <div className='mx-auto overflow-hidden bg-white shadow-xl w-80 rounded-3xl'>
                            <div className='relative h-48 bg-rose-500 rounded-bl-4xl'>
                                <svg
                                    className='absolute bottom-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 1440 320'
                                >
                                    <path
                                        fill='#ffffff'
                                        fillOpacity='1'
                                        d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                                    ></path>
                                </svg>
                            </div>
                            <div className='px-10 pt-4 pb-8 bg-white rounded-tr-4xl'>
                                <h1 className='text-2xl font-semibold text-gray-900'>
                                    Welcome back!
                                </h1>
                                <form className='mt-12' action='' method='POST'>
                                    <div className='relative'>
                                        <input
                                            id='email'
                                            name='email'
                                            type='text'
                                            className='w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600'
                                            placeholder='john@doe.com'
                                        />
                                        <label
                                            htmlFor='email'
                                            className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                                        >
                                            Email address
                                        </label>
                                    </div>
                                    <div className='relative mt-10'>
                                        <input
                                            id='password'
                                            type='password'
                                            name='password'
                                            className='w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600'
                                            placeholder='Password'
                                        />
                                        <label
                                            htmlFor='password'
                                            className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                                        >
                                            Password
                                        </label>
                                    </div>

                                    <input
                                        type='sumbit'
                                        value='Sign in'
                                        className='block w-full px-4 py-2 mt-20 font-semibold text-center text-white rounded cursor-pointer bg-rose-500 hover:bg-rose-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80'
                                    />
                                </form>
                                <a
                                    href='#'
                                    className='block mt-4 text-sm font-medium text-center text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500'
                                >
                                    {' '}
                                    Forgot your password?{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative mx-16 mt-8 h-96'>
                <div className='absolute w-full h-full py-8'>
                    <img
                        className='object-cover w-full h-80 rounded-2xl'
                        src='https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&h=1000&q=80'
                        alt=''
                    />
                </div>
                <div className='relative flex h-full overflow-x-auto space-x-80'>
                    <div className='flex-shrink-0 w-full rounded-2xl'></div>
                    <div className='flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-hue-rotate-180'></div>
                    <div className='flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-saturate-200'></div>
                    <div className='flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-invert'></div>
                    <div className='flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-sepia'></div>
                    <div className='flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-blur-lg'></div>
                    <div className='flex-shrink-0 w-full rounded-2xl'></div>
                </div>
            </div>
        </main>
  )
}