import { FaArrowRight } from "react-icons/fa";

const CardProgramming = ({icon, title, text}) => {
  return (
    <div className="m-auto hover:bg-gradient-to-br  from-fuchsia-500 to-violet-500 cursor-pointer  h-full
    p-[32px] flex flex-col gap-y-3 bg-[#808080] text-white rounded">
      <p className="text-[30px]">{icon}</p>
      <p className="font-bold text-[18px]">{title}</p>
      <p>{text}</p>

      <p className="flex items-center gap-x-5 hover:gap-x-10 transition-all">
        <span className="text-[18px]">Join Now</span>
        <FaArrowRight /></p>

    </div>
  )
}

export default CardProgramming
