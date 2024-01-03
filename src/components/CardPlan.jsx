import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const CardPlan = ({icon, name, price, list, className}) => {
  return (
<div className={`${className} hover:p-3 transition-all -skew-x-2
      flex flex-col p-5 w-[300px] bg-[#656565] text-white rounded justify-between`}>
      <p className="text-[30px] text-[#d946ef]">{icon}</p>
      <p className="font-bold text-[20px]">{name}</p>
      <p className="font-bold text-[44px]">{price}</p>
      <div className="text-[18px]">{list}</div>

      <p className="flex gap-x-3 items-center text-[14px]">See more benefits <FaArrowRight size={10}/></p>
      <Button className={'w-full bg-white text-black rounded'} text={'Join now'}/>
    </div>
  )
}

export default CardPlan
