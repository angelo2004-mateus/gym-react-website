import { TbHeartPlus } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";

import CardPlan from './CardPlan'
import { LuDumbbell } from "react-icons/lu";
import { RiVipCrownFill } from "react-icons/ri";

const Plans = () => {
  return (
    <section className='mt-10'>
        <div className="flex text-[44px] max-xl:flex-col items-center font-bold justify-center text-white italic gap-x-24">
            <h2 className="whitespace-nowrap font-light">READY TO START</h2>
            <h2 className="whitespace-nowrap">YOUR JOURNEY</h2>
            <h2 className="whitespace-nowrap font-light">NOW WITHUS</h2>
        </div>

        <div className="flex gap-5 flex-wrap justify-center items-center py-10">
            <CardPlan icon={<TbHeartPlus />} 
            name={'BASIC PLAN'}
            price={'$ 25'}
            className={'h-[480px]'}
            list={
            <ul className="flex flex-col gap-y-3">
                <li><FiCheckCircle /> hours of excercises</li>
                <li><FiCheckCircle />Free consultaion to coaches</li>
                <li><FiCheckCircle />Access to The Community</li>
            </ul>}/>

            <CardPlan icon={<RiVipCrownFill color="white"/>} 
            name={'PREMIUM PLAN'}
            price={'$ 30'}
            className={'h-[550px] bg-gradient-to-br  from-fuchsia-500 to-violet-500'}
            list={
            <ul className="flex flex-col gap-y-3">
                <li><FiCheckCircle /> 5 hours of excercises</li>
                <li className="whitespace-nowrap"><FiCheckCircle /> Free consultaion to coaches</li>
                <li><FiCheckCircle /> Accessto minibar</li>
            </ul>}/>
           
            <CardPlan icon={<LuDumbbell />} 
            name={'PRO PLAN'}
            price={'$ 45'}
            className={'h-[480px]'}
            list={
            <ul className="flex flex-col gap-y-3">
                <li><FiCheckCircle /> 8 hours of excercises</li>
                <li className="whitespace-nowrap"><FiCheckCircle /> Consultation of Private Coach</li>
                <li><FiCheckCircle />Free Fitness Merchandises</li>
            </ul>}/>

        </div>
    </section>
  )
}

export default Plans
