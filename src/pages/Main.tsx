import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import MainCard, {MainCardProps} from "../components/MainCard.tsx";

const Main: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleOpenUrl = (url : string) : void => {
        window.open(url);
    }

    const handleNavigate = (url : string) => {
        navigate(url);
    }

    const mainCardProps : MainCardProps[] = [
        {
            title : "About\nMe", setIsHovered : setIsHovered, handleNavigate : handleNavigate, url : "/aboutme", color : false
        },
        {
            title : "Projects", setIsHovered : setIsHovered, handleNavigate : handleNavigate, url : "/projects", color : true
        },
        {
            title : "Tistory\nBlog", setIsHovered : setIsHovered, handleNavigate : handleOpenUrl, url : "https://g-db.tistory.com", color : false
        },
        {
            title : "Github", setIsHovered : setIsHovered, handleNavigate : handleOpenUrl, url : "https://github.com/changuii", color : true
        }
    ]


    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return (
        <div className={`w-full h-full transition-all duration-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex h-full w-full text-3xl cursor-pointer'>
                {
                    mainCardProps.map((props : MainCardProps) => {
                        return <MainCard props={props} />
                    })
                }
                <div
                    className={`h-full w-6/12 bg-white transition-all duration-500 cursor-default ${isHovered ? 'blur-sm' : ''}`}>
                    <div className='flex flex-col mt-36 justify-start items-center'>
                        <div className='rounded-full w-96 h-96 bg-black mb-10 shadow-2xl'></div>
                        <div className='font-bold'>LEE-GHANGUI<sub className='text-xs font-normal text-gray-400'>이창의</sub></div>
                        <div className='text-xs m-0 text-gray-400'>Backend-Developer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main;