import React from "react";

export interface MainCardProps {
    title: string;
    setIsHovered : (isHovered: boolean) => void;
    handleNavigate : (url : string) => void;
    url : string;
    color : boolean;
}

const MainCard : React.FC<{ props: MainCardProps }> = ({props}) => {
    const { title, setIsHovered, handleNavigate, url, color} = props;
    const bgColor = color ? 'bg-black' : 'bg-white';
    const textColor = color ? 'text-white' : 'text-black';

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleNavigate(url)}
            className={`h-full w-2/12 blur-[3px] hover:blur-none hover:w-6/12 ${bgColor} transition-all duration-500`}>
            <div className='flex h-full flex-col justify-center whitespace-pre-wrap'>
                <div className={`ml-5 font-bold text-2xl ${textColor}`}>{title}</div>
            </div>
        </div>
    )
}

export default MainCard