import manboxe from '../assets/img/manboxe.mp4'

import Button from './Button'
const Header = () => {
  return (
    <header className='relative flex items-center justify-center text-white overflow-hidden'>
        
        <video src={manboxe} autoPlay loop muted playsInline className='absolute z-0 w-full max-md:hidden'></video>

        <div className='flex flex-col justify-center items-center gap-y-5 py-20 z-50 md:bg-black md:bg-opacity-70 w-full'>
            <h2 className='text-[56px] max-sm:text-[40px] font-bold text-center'><span className='font-light'>SHAPE</span> YOUR <br /> <span className='italic'>IDEAL BODY</span></h2> 
            <p className='text-[20px] text-center'>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
            <div className='flex gap-5 max-sm:flex-col w-[90%] justify-center'>
                <Button text={'Get Started'} className={'bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white px-5 '}/>
                <Button text={'Learn More'} className={'bg-gradient-to-br bg-white text-black px-5'}/>
            </div>
        </div>
        <div className='w-full h-[2px] absolute bottom-0 bg-gradient-to-l from-fuchsia-500 to-violet-500'></div>
    </header>
  )
}

export default Header
