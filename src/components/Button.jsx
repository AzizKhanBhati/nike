const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button 
        className=
          { 
            `flex 
            justify-center items-center gap-2
            px-7 py-4 border font-montserrat
            text-lg leading-none rounded-full
            
            ${backgroundColor 
              ? `${backgroundColor} ${textColor} ${borderColor}` 
              : "bg-coral-red text-white border-coral-red"
            }  ${fullWidth && "w-full"}`

          } >

        {label}

        {/* here in curly braces we provided the condition 
        that if icon is provided than show the img else not */}
        
        {iconURL && <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />}

    </button>
  )
}

export default Button