import '../index.css'

import gymimage1 from '../assets/img/gymimage1.jpg';
import gymimage2 from '../assets/img/gymimage2.jpg';
import gymimage3 from '../assets/img/gymimage3.jpg';
import gymimage4 from '../assets/img/gymimage4.jpg';

import nblogo from '../assets/img/nblogo.png'
import addidaslogo from '../assets/img/addidaslogo.png'
import nikelogo from '../assets/img/nikelogo.png'

import { FiCheckCircle } from "react-icons/fi";


const SomeReasons = () => {
  return (
    <section className="flex flex-wrap gap-5">
        <div className=' h-[450px] grid grid-rows-2 grid-cols-3 gap-3 flex-1 min-w-[400px] max-md:min-w-[100%]'>
            <div className='rounded row-start-1 row-end-3' style={{backgroundImage: `url("${gymimage1}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className='rounded row-end-2 col-start-2 col-end-4' style={{backgroundImage: `url("${gymimage2}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className='rounded col-end-3' style={{backgroundImage: `url("${gymimage3}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className='rounded col-end-4' style={{backgroundImage: `url("${gymimage4}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>

        <div className='flex flex-col gap-y-5 flex-1 text-white min-w-[550px] max-md:min-w-[100%] max-lg:text-center'>
            <p className='text-fuchsia-500 font-bold'>SOME REASONS</p>
            <h2 className='text-[44px] font-bold'><span className='font-light'>WHY</span> CHOOSE US?</h2>
            <ul className='flex flex-col gap-y-5 max-lg:items-center'>
                <li className='font-semibold md:text-[20px] whitespace-nowrap'><FiCheckCircle color='#d946ef'/> OVER 140+ EXPERT COACHS</li>
                <li className='font-semibold md:text-[20px] whitespace-nowrap'><FiCheckCircle color='#d946ef'/> TRAIN SMARTER AND FASTER THAN BEFORE</li>
                <li className='font-semibold md:text-[20px] whitespace-nowrap'><FiCheckCircle color='#d946ef'/> 1 FREE PROGRAM FOR NEW MEMBER</li>
                <li className='font-semibold md:text-[20px] whitespace-nowrap'><FiCheckCircle color='#d946ef'/> RELIABLE PARTNERS</li>
            </ul>
            <p className='opacity-50'>OUR PARTNERS</p>
            <div className='flex gap-x-3 max-lg:justify-center'>
                <img className='w-[2.5rem]' src={nblogo} alt="nb logo" />
                <img className='w-[2.5rem]' src={addidaslogo} alt="addidas logo" />
                <img className='w-[2.5rem]' src={nikelogo} alt="nike logo" />
            </div>
        </div>
    </section>
  )
}

export default SomeReasons
