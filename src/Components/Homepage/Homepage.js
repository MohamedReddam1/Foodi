import React, { useState } from 'react'
import FoodiLogo from '../assets/FoodiLogo.png'



//imported images
import HeroImg from '../assets/HeroImg.png'
import Burger from '../assets/burger.png'
import Breakfast from '../assets/breakfast.png'
import IceCream from '../assets/icecream.png'
import Juices from '../assets/juices.png'
import Chef from '../assets/Chef.png'





// imported icons
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaStopwatch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoGiftSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";










export default function Homepage() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        {/* nav section */}
        <nav className='bg-gray-50 w-full fixed top-0 z-50'>
      <div className=' flex justify-between items-center p-7'>
        {/* Logo */}
        <div>
          <img src={FoodiLogo} alt="Foodi Logo" className='w-[75px] lg:w-[100px]'/>
        </div>

        <div className='hidden lg:flex justify-between items-center'>
          <li className='list-none my-2 lg:my-0 hover:text-green-500 duration-200 ease-in-out text-lg mx-5'>
            <a href="#">Home</a>
          </li>
          <li className='list-none my-2 lg:my-0 hover:text-green-500 duration-200 ease-in-out text-lg mx-5'>
            <a href="#">Menu</a>
          </li>
          <li className='list-none my-2 lg:my-0 hover:text-green-500 duration-200 ease-in-out text-lg mx-5'>
            <a href="#">Services</a>
          </li>
        </div>

        <div className='hidden lg:block'>
            <a href="#" className='bg-green-500 py-3 px-10 font-semibold text-white rounded-full'>
              Contact
            </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Sliding Nav Links */}
      <div 
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-50 p-7 transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        } lg:relative lg:transform-none lg:flex lg:justify-between lg:items-center lg:w-full lg:p-0 p-5`}
      >
        <div className='p-10'>
          <img src={FoodiLogo} alt="Foodi Logo" className='w-[75px] lg:w-[100px]'/>
        </div>
        <ul className='px-10 py-3 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center w-full lg:w-auto lg:space-x-5'>
          <li className='list-none my-2 lg:my-0 hover:text-green-500 duration-200 ease-in-out text-lg'>
            <a href="#">Home</a>
          </li>
          <li className='list-none my-2 lg:my-0 hover:text-green-500 duration-200 ease-in-out text-lg '>
            <a href="#">Menu</a>
          </li>
          <li className='list-none my-2 lg:my-0 hover:text-green-500 duration-200 ease-in-out text-lg '>
            <a href="#">Services</a>
          </li>
          <li className='my-4 lg:my-0'>
            <a href="#" className='bg-green-500 py-3 px-10 font-semibold text-white rounded-full'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>

    {/* hero section */}
    <div className='flex flex-col lg:flex-row justify-center jlg:ustify-around items-center p-5 pt-28 lg:p-15 xl:p-28 bg-gray-50'>
        <div className='flex flex-col items-start justify-center text-center lg:text-left'>
            <div className='lg:py-10 lg:px-10 xl:px-20 p-5'>
                <h1 className='font-bold text-nowrap text-2xl md:text-4xl xl:text-5xl'>Dive into Delights</h1>
                <h1 className='font-bold text-nowrap text-2xl md:text-4xl xl:text-5xl mt-3'>
                    Of Delectable <span className='text-green-500'>Food</span>
                </h1>
                <p className='text-xs md:text-lg md:px-5 lg:px-0 mt-5 lg:mt-10 xl:mt-20 text-gray-600'>
                    Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                </p>
            </div>
            <div className='w-full lg:px-10 xl:px-20 px-3 flex flex-row justify-center lg:justify-between items-center mt-3 lg:mt-0'>
                <a
                    href=""
                    className='bg-green-500 text-white text-xs md:text-lg text-nowrap lg:text-lg font-bold py-2 px-7 lg:py-5 lg:px-12 rounded-full mx-1 lg:mb-0'
                >
                    Order now
                </a>
                <a
                    href=""
                    className='font-bold text-xs md:text-lg text-nowrap lg:text-lg py-3 px-7 lg:py-5 lg:px-12 rounded-full mx-1 lg:mx-2 flex justify-between items-center'
                >
                    Watch Video <FaRegCirclePlay className='text-3xl lg:text-5xl ml-2 lg:ml-7 text-gray-700' />
                </a>
            </div>
        </div>
        <div className='hidden lg:block mt-10 lg:mt-0'>
            <img src={HeroImg} alt="Hero" className='w-full' />
        </div>
    </div>


    {/* Categories */}
    <div className='flex flex-col items-center justify-center px-5 lg:px-28 py-10 bg-gray-50'>
        <div className='text-center'>
            <p className='text-red-500 uppercase tracking-widest font-semibold'>Customer Favorites</p>
            <h1 className='text-3xl lg:text-5xl font-bold tracking-wide mt-5 lg:mt-10'>Popular Categories</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20'>
            
            <div className='p-7 px-10 lg:p-5 lg:px-5 rounded-3xl shadow-lg bg-white mx-4 flex flex-col items-center'>
            <img src={Burger} className='p-5 py-7 lg:p-5 lg:py-7 rounded-full w-[100px] h-[100px] lg:w-[120px] xl:w-[120px] xl:h-[120px] bg-green-200' />
            <h3 className='mt-5 font-semibold text-lg lg:text-md xl:text-lg text-center'>Main Dishes</h3>
            </div>

            <div className='p-7 px-10 lg:p-5 lg:px-5 rounded-3xl shadow-lg bg-white mx-4 flex flex-col items-center'>
            <img src={Breakfast} className='p-5 py-7 lg:p-2 lg:py-7 rounded-full w-[100px] h-[100px] lg:w-[350px] xl:w-[120px] xl:h-[120px] bg-green-200' />
            <h3 className='mt-5 font-semibold text-lg text-center'>Breakfast</h3>
            </div>

            <div className='p-7 px-10 lg:p-5 lg:px-5 rounded-3xl shadow-lg bg-white mx-4 flex flex-col items-center'>
            <img src={IceCream} className='p-5 py-7 lg:p-6 lg:py-7 rounded-full w-[100px] h-[100px] lg:w-[120px] xl:w-[120px] xl:h-[120px] bg-green-200' />
            <h3 className='mt-5 font-semibold text-lg text-center'>Dessert</h3>
            </div>

            <div className='p-7 px-10 lg:p-5 lg:px-5 rounded-3xl shadow-lg bg-white mx-4 flex flex-col items-center'>
            <img src={Juices} className='p-5 py-7 lg:p-5 lg:py-7 rounded-full w-[100px] h-[100px] lg:w-[250px] xl:w-[120px] xl:h-[120px] bg-green-200' />
            <h3 className='mt-5 font-semibold text-lg text-center'>Juices</h3>
            </div>

        </div>
    </div>

    
    {/* Special Dishes */}
    <div className='p-5 lg:p-28 bg-gray-50'>
        <div className='text-start md:px-5'>
            <p className='text-red-500 tracking-widest font-semibold'>SPECIAL DISHES</p>
            <h1 className='text-3xl lg:text-5xl font-bold tracking-wider mt-5 lg:mt-10'>Standout Dishes</h1>
            <h1 className='text-3xl lg:text-5xl font-bold tracking-wider mt-3'>From Our Menu</h1>
        </div>
        <div className='mt-10 lg:mt-20 p-5 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>

            <div className='bg-white p-5 lg:p-10 rounded-[20px] lg:rounded-[40px] shadow-xl'>
                <div className='flex justify-center items-center'>
                    <img src={Burger} alt="" className='w-[150px] lg:w-[250px]'/>
                </div>
                <div className='text-start'>
                    <h1 className='text-xl lg:text-2xl font-semibold tracking-wider mt-3'>American Burger</h1>
                    <p className='text-gray-600 font-medium mt-2'>Description of item</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <h3 className='text-lg lg:text-xl font-semibold'><span className='text-red-600 text-md'>$</span>24.00</h3>
                    <p className='flex items-center text-lg lg:text-xl font-semibold'><FaStar className='mx-2 text-yellow-400'/>4.2</p>
                </div>
            </div>

            <div className='bg-white p-5 lg:p-10 rounded-[20px] lg:rounded-[40px] shadow-xl'>
                <div className='flex justify-center items-center'>
                    <img src={Burger} alt="" className='w-[150px] lg:w-[250px]'/>
                </div>
                <div className='text-start'>
                    <h1 className='text-xl lg:text-2xl font-semibold tracking-wider mt-3'>American Burger</h1>
                    <p className='text-gray-600 font-medium mt-2'>Description of item</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <h3 className='text-lg lg:text-xl font-semibold'><span className='text-red-600 text-md'>$</span>24.00</h3>
                    <p className='flex items-center text-lg lg:text-xl font-semibold'><FaStar className='mx-2 text-yellow-400'/>4.2</p>
                </div>
            </div>

            <div className='bg-white p-5 lg:p-10 rounded-[20px] lg:rounded-[40px] shadow-xl'>
                <div className='flex justify-center items-center'>
                    <img src={Burger} alt="" className='w-[150px] lg:w-[250px]'/>
                </div>
                <div className='text-start'>
                    <h1 className='text-xl lg:text-2xl font-semibold tracking-wider mt-3'>American Burger</h1>
                    <p className='text-gray-600 font-medium mt-2'>Description of item</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <h3 className='text-lg lg:text-xl font-semibold'><span className='text-red-600 text-md'>$</span>24.00</h3>
                    <p className='flex items-center text-lg lg:text-xl font-semibold'><FaStar className='mx-2 text-yellow-400'/>4.2</p>
                </div>
            </div>

        </div>
    </div>


    {/* testmonial */}
    <div className='bg-gray-50 p-8 md:p-16 lg:p-28 flex flex-col lg:flex-row justify-around items-center'>
        <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={Chef} alt="" className='w-full max-w-md lg:max-w-lg' />
        </div>
        <div className='text-start mt-10 lg:mt-0 lg:w-1/2 px-5'>
            <p className='uppercase text-red-500 font-bold tracking-widest'>Testimonials</p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-5'>What Our Customers Say About Us</h1>
            <p className='text-base md:text-lg lg:text-xl text-gray-600 mt-7'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        </div>
    </div>


    {/* Our story */}
    <div className='flex flex-col lg:flex-row justify-between items-center p-8 md:p-16 lg:p-20 xl:p-28 bg-gray-50'>
        <div className='text-start lg:px-5'>
            <p className='uppercase text-red-500 tracking-widest font-bold'>Our Story & Services</p>
            <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mt-5'>Our Culinary Journey And Services</h1>
            <p className='text-base md:text-md xl:text-xl font-medium mt-7 mb-10'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <a href="" className='py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-full bg-green-500 text-white text-base md:text-lg lg:text-xl mt-5 lg:mt-10'>Explore more</a>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0'>
            <div className='flex flex-col justify-center items-center bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg'>
                <PiBowlFoodBold className='text-green-500 text-6xl md:text-7xl lg:text-8xl'/>
                <h1 className='text-green-500 font-semibold text-2xl md:text-3xl lg:text-2xl uppercase mt-5'>Catering</h1>
                <p className='text-green-500 text-sm md:text-lg mt-5 text-center'>Delight your guests with our flavors and presentation</p>
            </div>

            <div className='flex flex-col justify-center items-center bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg'>
                <FaStopwatch className='text-green-500 text-6xl md:text-7xl lg:text-8xl'/>
                <h1 className='text-green-500 font-semibold text-2xl md:text-3xl lg:text-2xl uppercase mt-5'>Fast delivery</h1>
                <p className='text-green-500 text-sm md:text-lg mt-5 text-center'>We deliver your order promptly to your door</p>
            </div>

            <div className='flex flex-col justify-center items-center bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg'>
                <TiShoppingCart className='text-green-500 text-6xl md:text-7xl lg:text-8xl'/>
                <h1 className='text-green-500 font-semibold text-2xl md:text-3xl lg:text-2xl uppercase mt-5'>Online Ordering</h1>
                <p className='text-green-500 text-sm md:text-lg mt-5 text-center'>Explore menu & order with ease using our Online Ordering</p>
            </div>

            <div className='flex flex-col justify-center items-center bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg'>
                <IoGiftSharp className='text-green-500 text-6xl md:text-7xl lg:text-8xl'/>
                <h1 className='text-green-500 font-semibold text-2xl md:text-3xl lg:text-2xl uppercase mt-5'>Gift Cards</h1>
                <p className='text-green-500 text-sm md:text-lg mt-5 text-center'>Give the gift of exceptional dining with Foodi Gift Cards</p>
            </div>
        </div>
    </div>


    {/* footer */}
    <div className='px-8 md:px-16 lg:px-28 py-10 bg-gray-50'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='text-start'>
            <img src={FoodiLogo} alt="" className='w-[80px] md:w-[100px]'/>
            <p className='mt-4 text-sm md:text-base'>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className='flex flex-col text-start'>
            <h1 className='font-bold text-lg md:text-xl'>Useful links</h1>
            <a href="" className='text-gray-600 font-medium mt-3'>About us</a>
            <a href="" className='text-gray-600 font-medium mt-3'>Events</a>
            <a href="" className='text-gray-600 font-medium mt-3'>Blogs</a>
            <a href="" className='text-gray-600 font-medium mt-3'>FAQ</a>
        </div>
        <div className='flex flex-col text-start'>
            <h1 className='font-bold text-lg md:text-xl'>Main Menu</h1>
            <a href="" className='text-gray-600 font-medium mt-3'>Home</a>
            <a href="" className='text-gray-600 font-medium mt-3'>Menus</a>
            <a href="" className='text-gray-600 font-medium mt-3'>Services</a>
        </div>
        <div className='flex flex-col text-start'>
            <h1 className='font-bold text-lg md:text-xl'>Contact Us</h1>
            <a href="" className='text-gray-600 font-medium mt-3'>example@email.com</a>
            <a href="" className='text-gray-600 font-medium mt-3'>+64 958 248 966</a>
            <a href="" className='text-gray-600 font-medium mt-3'>Social media</a>
        </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-between items-center mt-10'>
        <div className='flex justify-start items-center mb-6 lg:mb-0'>
            <FaFacebookF className='p-3 bg-green-300 text-gray-700 text-4xl md:text-5xl rounded-full hover:bg-green-600 hover:text-white duration-200 ease-in-out mx-2'/>
            <FiInstagram className='p-3 bg-green-300 text-gray-700 text-4xl md:text-5xl rounded-full hover:bg-green-600 hover:text-white duration-200 ease-in-out mx-2'/>
            <FaXTwitter className='p-3 bg-green-300 text-gray-700 text-4xl md:text-5xl rounded-full hover:bg-green-600 hover:text-white duration-200 ease-in-out mx-2'/>
            <CiYoutube className='p-3 bg-green-300 text-gray-700 text-4xl md:text-5xl rounded-full hover:bg-green-600 hover:text-white duration-200 ease-in-out mx-2'/>
        </div>
        <div className='text-center lg:text-left'>
            <p className='text-sm md:text-base'>Copyright 2024 Mohamed Reddam | All rights reserved</p>
        </div>
    </div>
</div>

    </div>
  )
}