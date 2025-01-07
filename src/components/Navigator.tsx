import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const Navigator: React.FC = () => {
    const [isMain, setIsMain] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    const handleNavigate = (url: string) => {
        setIsVisible(false);
        navigate(url);
    }

    const handleOpenUrl = (url: string) => {
        setIsVisible(false);
        window.open(url);
    }

    useEffect(() => {
        const url = window.location.pathname;
        if(url !== '/'){
            setIsMain(false)
        }
        else{
            setIsMain(true)
        }

    }, [window.location.pathname])


    return (
        <div className={`${isMain ? 'opacity-0' : 'opacity-100'} duration-1000 transition-all`}>
            <div
                className={`${isVisible ? '-bottom-full' : 'bottom-10'} duration-1000 transition-all fixed w-full h-[8%] z-10 `}>
                <div className='flex justify-end h-full items-center'>
                    <div
                        onClick={() => setIsVisible(true)}
                        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-1000 border-4 border-opacity-0 hover:border-slate-500 hover:-translate-y-2 bg-black mr-14 cursor-pointer`}></div>
                </div>
            </div>
            <div
                onClick={() => setIsVisible(false)}
                className={`${isVisible ? ' z-10 opacity-100' : 'opacity-0 z-[-1]'} top-0 left-0 transition-all duration-1000 bg-black fixed w-full h-full z-10`}>
            </div>

            <div
                className={`${isVisible ? 'opacity-100 right-1/2' : 'opacity-0 z-[-1] right-10'} h-[50%] bg-black shadow-2xl rounded-2xl bottom-20 transition-all duration-1000 fixed min-w-72 z-20`}>
                <div className='flex relative justify-end h-full items-center'>
                    <div className='absolute w-full h-full'>
                        <div className='w-full flex flex-col items-start justify-center p-9 gap-10 max-h-full'>
                            <div className='text-white text-4xl font-bold'>What's Next</div>
                            <div className='flex flex-col justify-between items-start gap-8'>
                                <div
                                    onClick={() => handleNavigate('/')}
                                    className='cursor-pointer text-white text-xl font-bold hover:text-3xl underline-offset-2 underline transition-all duration-1000'>
                                    HOME
                                </div>
                                <div
                                    onClick={() => handleNavigate('/aboutme')}
                                    className='cursor-pointer text-white text-xl font-bold hover:text-3xl underline-offset-2 underline transition-all duration-1000'>
                                    ABOUT ME
                                </div>
                                <div
                                    onClick={() => handleNavigate('/projects')}
                                    className='cursor-pointer text-white text-xl font-bold hover:text-3xl underline-offset-2 underline transition-all duration-1000'>
                                    PROJECTS
                                </div>
                                <div
                                    onClick={() => handleOpenUrl('https://g-db.tistory.com')}
                                    className='cursor-pointer text-white text-xl font-bold hover:text-3xl underline-offset-2 underline transition-all duration-1000'>
                                    TISTORY
                                    BLOG
                                </div>
                                <div
                                    onClick={() => handleOpenUrl('https://github.com/changuii')}
                                    className='cursor-pointer text-white text-xl font-bold hover:text-3xl underline-offset-2 underline transition-all duration-1000'>
                                    GITHUB
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigator