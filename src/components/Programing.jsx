import CardProgramming from "./CardProgramming"
import { LuDumbbell } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";

const Programing = () => {
 

  return (
    <section className="flex flex-col gap-y-10 py-20">
        <div className="flex text-[44px] max-lg:flex-col items-center font-bold justify-center text-white italic gap-x-24">
            <h2 className="whitespace-nowrap font-light">EXPLORE OUR</h2>
            <h2 className="whitespace-nowrap">PROGRAMS</h2>
            <h2 className="whitespace-nowrap font-light">TO SHAPE YOU</h2>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">

            <CardProgramming icon={<LuDumbbell />} title={'Strength Training'}
            text={'In this program, you are trained to improve your strength through many exercises.'}/>

            <CardProgramming icon={<FaRunning />} title={'Cardio Training'}
            text={'In this program, you are trained to do sequential moves in range of 20 until 30 minutes.'}/>

            <CardProgramming icon={<AiFillFire />} title={'Fat Burning'}
            text={'This program is suitable for you who wants to get rid of your fat and lose their weight.'}/>

            <CardProgramming icon={<FaHeartbeat />} title={'Health Fitness'}
            text={'This programs is designed for those who exercises only for their body fitness not body building.'}/>  
        
        </div>
    </section>
  )
}

export default Programing
