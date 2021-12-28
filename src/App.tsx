import * as React from 'react'
import Navbar from './components/Navbar'
import { NotificationIcon } from './components/utils/icons'

export default function App() {
  return (
    <main className='bg-gray-700 text-gray-50/100 text-center min-h-screen px-8 py-16'>
      <div className='grid gap-8 items-start justify-center'>
        <h1 className='text-3xl text-center font-black'>
          <span className='bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-pink-600'>Welcome to our website</span>
        </h1>
        <div className='relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 animate-tilt'></div>
          <button className='relative flex px-7 py-4 bg-black rounded-lg leading-none items-center divide-x divide-gray-600'>
            <span className='flex items-center space-x-5'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 -rotate-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </span>
              <span className='pr-6 text-gray-100'>Labs release 2021.12</span>
            </span>
            <span className='pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200'>See what's new &rarr;</span>
          </button>
        </div>
      </div>


      <div className='relative w-full max-w-lg'>
        {/* our background */}
        <div className='absolute top-0 -left-4 w-72 h-72 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000'></div>
        <div className='absolute top-0 -right-4 w-72 h-72 rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl opacity-50 animate-blob'></div>
        <div className='absolute -bottom-8 left-32 w-72 h-72 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000'></div>
        <div className='m-8 relative space-y-4'>
          <div className='p-5 bg-white rounded-lg flex flex-row items-center justify-between space-x-8'>
            <div className='flex-1 '>
              <div className='h-4 max-w-48 bg-gray-300 rounded'></div>
            </div>
            <div>
              <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div className='p-5 bg-white rounded-lg flex flex-row items-center justify-between space-x-8'>
            <div className='flex-1'>
              <div className='h-4 max-w-48 bg-gray-300 rounded'></div>
            </div>
            <div>
              <div className="w-32 h-6 rounded-lg bg-amber-300"></div>
            </div>
          </div>
          <div className='p-5 bg-white rounded-lg flex flex-row items-center justify-between space-x-8'>
            <div className='flex-1'>
              <div className='h-4 max-w-48 bg-gray-300 rounded'></div>
            </div>
            <div>
              <div className="w-20 h-6 rounded-lg bg-pink-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign in */}
      <div class="selection:bg-rose-500 selection:text-white mt-40">
  <div class="min-h-screen bg-rose-100 flex justify-center items-center">
    <div class="p-8 flex-1">
      <div class="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
        <div class="relative h-48 bg-rose-500 rounded-bl-4xl">
          <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div class="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
          <h1 class="text-2xl font-semibold text-gray-900">Welcome back!</h1>
          <form class="mt-12" action="" method="POST">
            <div class="relative">
              <input id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
              <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
            </div>
            <div class="mt-10 relative">
              <input id="password" type="password" name="password" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" />
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>

            <input type="sumbit" value="Sign in" class="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
          </form>
          <a href="#" class="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Forgot your password? </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}