
interface ButtonProps{
    text: string,
    handleClick: ()=> void
}

export default function Button({text, handleClick}: ButtonProps){
    return(
        <button className="p-5 border-[#18301E] border-2 font-bold cursor-pointer active-color tertiary-color-bg rounded-4xl w-full max-w-[250px] lg:w-[250px]" onClick={handleClick}>{text}</button>
    )
}