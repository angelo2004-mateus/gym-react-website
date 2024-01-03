
const Button = ({text, className, onClick, ...props}) => {
  return (
    <button onClick={onClick} className={`${className} font-semibold py-2 rounded flex justify-center items-center`}>
        {text}
    </button>
  )
}

export default Button
