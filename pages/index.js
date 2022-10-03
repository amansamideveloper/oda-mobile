import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ArrowDownRightIcon, ArrowRightIcon, Bars3Icon, CheckCircleIcon, TicketIcon } from '@heroicons/react/24/solid'
export default function Home() {
  return (
    <div className='bg-gradient-to-b from-slate-200 p-5'>
      <div className='header'>
        <div className='flex justify-between'>
          <div className=''>
            <h1 className='text-2xl text-green-700 font-bold'>ODA<span className='text-black'>bus</span></h1>
          </div>
          <div className='hidden'>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Home</a>
              </li>
            </ul>
          </div>
          <div className=''>
            <button type=''>

              <Bars3Icon className='text-green-700 w-8 h-8' />
            </button>
          </div>
        </div>
      </div>
      <div className='mx-1 my-4'>
        <div className='flex justify-center'>
          <div className=''>
            <h1 className='text-3xl font-bold'>We love helping you to save the earth </h1>
            <p className='text-slate-500 my-2'>Lorem ipsum dolor sit amet, risus non velit cursus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non laoreet quam, eget scelerisque</p>
            <div className='flex justify-between my-5'>
              <button className='bg-green-400 text-white p-2 rounded-xl shadow-md'>
                Book now
              </button>
              <div className='flex justify-center'>
                <button className=''>
                  See how it works
                </button>
                <ArrowRightIcon className='w-4 h-4 m-3' />
              </div>

            </div>
          </div>
          <div className='align-middle mt-10'>
            <img src='/img/oda.png' className='w-full h-fit' />
          </div>
        </div>
      </div>
      <div className='my-4'>
        <h1 className='flex justify-center text-2xl leading-6 font-bold'> Steps to start your plants off Right</h1>
        <h6 className='flex justify-center my-2 font-bold text-slate-400'>Follow instruction for more</h6>
        <div className='flex justify-between py-2'>
          <div className=''>
            <img src='img/oda.png' />
            <h3 className='text-black text-lg py-2 flex font-semibold justify-center'>Inoculate</h3>
            <p className='text-slate-400 text-sm '>velit cursus Lorem ipsum dolor sit amet, consectetur a</p>
          </div>
          <div className=''>
            <img src='img/oda.png' />
            <h3 className='text-black text-lg py-2 flex font-semibold justify-center'>Inoculate</h3>
            <p className='text-slate-400 text-sm '>cursus Lorem ipsum dolor sit amet, consectetur a</p>
          </div>
          <div>
            <img src='img/oda.png' />
            <h3 className='text-black text-lg py-2 flex font-semibold justify-center'>Inoculate</h3>
            <p className='text-slate-500 text-sm '>Lorem ipsum dolor sit  sit amet, consectetur a</p>
          </div>
        </div>
      </div>
      <div className='my-8 '>
        <div >
          <img src='/img/oda.png' className='w-fit' />
        </div>
        <div className=''>
          <h1 className='block my-2  text-2xl leading-6 font-bold'>Make your garden good nutrition</h1>
          <div className='flex my-1  align-bottom'>
            <CheckCircleIcon className='w-5 h-5 mt-1 mx-1  text-green-400' />
            <p className='text-slate-500'>cing elit. Integer ultricies cing elit. Integer ultricies</p>
          </div>
          <div className='flex my-1 align-bottom'>
            <CheckCircleIcon className='w-5 h-5 mt-1 mx-1  text-green-400' />
            <p className='text-slate-500'>cing elit. Integer ultricies cing elit. Integer ultricies</p>
          </div>
          <div className='flex my-1 align-bottom'>
            <CheckCircleIcon className='w-5 h-5 mt-1 mx-1  text-green-400' />
            <p className='text-slate-500'>cing elit. Integer ultricies cing elit. Integer ultricies</p>
          </div>
        </div>
      </div>
      <div className='my-8'>
        <div className=''>
          <div className=''>
            <h1 className='text-2xl leading-6 font-bold my-4'>Come with us grow up your plant</h1>
            <p className=' text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin eleifend ante, a facilisis enim lacinia vitae. Maecenas porttitor libero venenatis placerat egestas.</p>

          </div>
          <div className=''>
            <img src='/img/oda1.png' className='w-full' />
          </div>
        </div>

        <div className='my-5 flex justify-between'>

          <div className='flex m-3 w-48 flex-none p-2 shadow-md font-semibold text-slate-600'>

            <button className='mr-3 text-base font-semibold text-slate-500'>See how it works </button>
            <ArrowRightIcon className='w-4 h-4 mt-6' />
          </div>
          <div className=' my-5  '>
            <h2 className='text-green-400 text-lg font-semibold'> Smoothly</h2>
            <p className=' text-slate-500 text-sm'>egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla </p>
          </div>

        </div>
      </div>
      <div className='my-8 flex justify-between bg-green-800 rounded-md p-4'>
        <div className='  h-64 '>
          <h1 className='text-white text-2xl'>What are we doing in the plate earth</h1>

          <p className='text-slate-300 '>Nulla sollicitudin eleifend ante, a facilisis enim lacinia vitae. Maecenas porttitor libero venenatis placerat egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
          <button className='text-white float-right bg-lime-500 py-1 px-2 rounded-md drop-shadow-md'>Proofment</button>
          <div className='flex mt-10'>
            <div className='w-3 h-3 mx-2 bg-white rounded-full'></div>
            <div className='w-3 h-3 mx-2 bg-slate-300 rounded-full'></div>
            <div className='w-3 h-3 mx-2 bg-slate-300 rounded-full'></div>
            <div className='w-3 h-3 mx-2 bg-slate-300 rounded-full'></div>
          </div>
        </div>
        <div className='py-20'>
          <img src='/img/oda5.png' className='w-96' />
        </div>
      </div>
      <div className='my-8'>
        <div className=''>
          <h1 className='flex justify-center text-black font-bold text-2xl'>Partners who work with us</h1>
          <h4 className='flex justify-center text-slate-400 text-base font-bold '> Follow inscrunction for more</h4>
        </div>
        <div className='my-5 '>
          <div className='flex justify-between'>
            <div className='w-32 mx-2 mt-2'>
              <img src='/img/cbe.png' className='' />
            </div>
            <div className='w-48 mx-2'>
              <img src='/img/awash.png' className='' />
            </div>
            <div className='w-48'>
              <img src='/img/coop.png' />
            </div>


          </div>
          <div className='flex my-5 justify-center'>

            <div className='w-32'>
              <img src='/img/o-international.png' />
            </div>
            <div className='w-32'>
              <img src='/img/mela.png' />
            </div>
          </div>

        </div>
      </div>
      <div className='my-8'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl text-green-700 font-bold'>ODA<span className='text-black'>bus</span></h1>
            <p className='text-sm text-slate-400'>Copy right 2002</p>
          </div>
          <div>
            <h1 className=' text-slate-600 font-bold text-lg'> location</h1>
            <p className='text-sm text-slate-500'>Bole, Addis abeba</p>
            <p className='text-sm text-slate-500'>09-21-19-28-13</p>
          </div>
          <div>
            <h1 className=' text-slate-600 font-bold text-lg'>

              Helpful
            </h1>
            <p className='text-sm text-slate-500'>About us</p>
            <p className='text-sm text-slate-500'>Help</p>
            <p className='text-sm text-slate-500'>Service</p>
            <p className='text-sm text-slate-500'>Privacy</p>

          </div>


        </div>
      </div>
    </div>
  )
}
