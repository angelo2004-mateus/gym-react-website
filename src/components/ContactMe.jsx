
import Button from './Button'

const ContactMe = () => {
  return (
    <section className='flex items-center max-lg:flex-col gap-x-[200px] gap-y-[50px] py-10 border-b'>
        <h2 className='text-white font-bold text-[44px] max-sm:text-[30px] whitespace-nowrap max-lg:text-center'>
            <span className='font-light'>READY TO </span> 
            LEVEL UP <br /> YOUR BODY
            <span className='font-light '> WITH US?</span>
        </h2>

        <div className='bg-[#808080] w-[450px] max-sm:w-full py-5 flex justify-around rounded'>
            <input className='outline-none border-none bg-[#808080] text-white' type="text" placeholder='Enter your Email Address here' />
            <Button text={'Contact Us'} className={'bg-gradient-to-br  from-fuchsia-500 to-violet-500 text-white px-5'}/>
        </div>
    </section>
  )
}

export default ContactMe
