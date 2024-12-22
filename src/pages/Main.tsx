import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Main: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();
    const github : string = "https://github.com/changuii";
    const tistory : string = "https://g-db.tistory.com";
    const aboutme : string = "/aboutme";
    const projects : string = "/projects";

    const handleOpenUrl = (url : string) : void => {
        window.open(url);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return (
        <div className={`w-full h-full transition-all duration-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex h-full w-full text-3xl cursor-pointer'>
                <div
                    onMouseEnter={() => setIsHovered(true)} // Hover 시작
                    onMouseLeave={() => setIsHovered(false)} // Hover 종료
                    onClick={() => navigate(aboutme)}
                    className="h-full w-2/12 blur-sm hover:blur-none hover:w-6/12 bg-white transition-all duration-500">
                    <div className='flex h-full flex-col justify-center'>
                        <div className='ml-5 font-bold '>About</div>
                        <div className='ml-5 font-bold '>Me</div>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setIsHovered(true)} // Hover 시작
                    onMouseLeave={() => setIsHovered(false)} // Hover 종료
                    onClick={() => navigate(projects)}
                    className="h-full w-2/12 blur-sm hover:blur-none hover:w-6/12 bg-black  transition-all duration-500">
                    <div className='flex h-full flex-col justify-center'>
                        <div className='ml-5 font-bold text-white'>Projects</div>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setIsHovered(true)} // Hover 시작
                    onMouseLeave={() => setIsHovered(false)} // Hover 종료
                    onClick={() => handleOpenUrl(tistory)}
                    className="h-full w-2/12 blur-sm hover:blur-none hover:w-6/12 bg-white transition-all duration-500">
                    <div className='flex h-full flex-col justify-center'>
                        <div className='ml-5  font-bold'>Tistory</div>
                        <div className='ml-5  font-bold'>Blog</div>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setIsHovered(true)} // Hover 시작
                    onMouseLeave={() => setIsHovered(false)} // Hover 종료
                    onClick={() => handleOpenUrl(github)}
                    className="h-full w-2/12 blur-sm hover:blur-none hover:w-6/12 bg-black  transition-all duration-500">
                    <div className='flex h-full flex-col justify-center'>
                        <div className='ml-5 text-white font-bold'>Github</div>
                    </div>
                </div>
                <div
                    className={`h-full w-6/12 bg-white transition-all duration-500 cursor-default ${isHovered ? 'blur-sm' : ''}`}>
                    <div className='flex h-full flex-col mt-36 justify-start items-center'>
                        <div className='rounded-full w-96 h-96 bg-black mb-10 shadow-2xl'></div>
                        <div className='font-bold'>LEE-GHANGUI<sub className='text-xs font-normal text-gray-400'>이창의</sub></div>
                        <div className='text-xs m-0 text-gray-400'>Backend-Developer</div>
                    </div>
                </div>
                {/*<div*/}
                {/*    className="h-full w-3/12 blur-sm  bg-black text-white transition-all duration-500 cursor-default">*/}
                {/*    <div className='flex h-full flex-col justify-center'>*/}
                {/*        <div className='ml-5 font-bold'>None</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}


export default Main;