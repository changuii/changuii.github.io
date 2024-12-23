import {useEffect, useState} from "react";


const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSliderVisible, setIsSliderVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return (
        <>

            {(
                <div
                    className={`z-10 fixed rounded-tl-2xl w-2/5 h-full bg-black top-0 right-0 transition-all duration-[1500ms] ${
                        isSliderVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                >
                    <div className='flex w-full bg-gray-300 rounded-tl-2xl'>
                        <div className='flex mt-0.5 ml-1 justify-between h-6 w-1/12'>
                            <div className='aspect-square m-1 bg-red-600 rounded-full'></div>
                            <div className='aspect-square m-1 bg-yellow-400 rounded-full'></div>
                            <div className='aspect-square m-1 bg-green-500 rounded-full'></div>
                        </div>
                    </div>
                    <div className='h-full w-full mt-20 mr-20 ml-20'>
                        <div className=' justify-center text-white text-3xl font-bold'>Project Title</div>
                        <div className=' justify-start text-white text-xl'>Project content</div>
                    </div>
                </div>
            )}
            <div
                onClick={() => setIsSliderVisible(false)}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full h-full`}>
                <div></div>
                <div
                    className={`box w-full bg-white transition-all duration-500 cursor-default mb-5`}>
                    <div className='flex h-full flex-col mt-36 justify-center items-center'>
                        <div className='rounded-full w-96 h-96 bg-black mb-10 shadow-2xl'></div>
                        <div className='font-bold text-5xl text-black'>Projects</div>
                        <div className='w-0.5 h-96 mt-5 bg-black'></div>
                    </div>
                </div>
                <div className='m-10 ml-32 mr-32  pb-32'>
                    <div className='grid grid-cols-3 gap-16'>
                        <div
                            onClick={(e) => {
                                e.stopPropagation(); // 부모로 이벤트 전파 방지
                                setIsSliderVisible(!isSliderVisible); // 슬라이더 토글
                            }}
                            className='bg-white border-2 border-black m-2 rounded-3xl aspect-square transition-all cursor-pointer hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2'></div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation(); // 부모로 이벤트 전파 방지
                                setIsSliderVisible(!isSliderVisible); // 슬라이더 토글
                            }}
                            className='bg-white border-2 border-black m-2 rounded-3xl aspect-square transition-all cursor-pointer hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2'></div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation(); // 부모로 이벤트 전파 방지
                                setIsSliderVisible(!isSliderVisible); // 슬라이더 토글
                            }}
                            className='bg-white border-2 border-black m-2 rounded-3xl aspect-square transition-all cursor-pointer hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2'></div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation(); // 부모로 이벤트 전파 방지
                                setIsSliderVisible(!isSliderVisible); // 슬라이더 토글
                            }}
                            className='bg-white border-2 border-black m-2 rounded-3xl aspect-square transition-all cursor-pointer hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2'></div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation(); // 부모로 이벤트 전파 방지
                                setIsSliderVisible(!isSliderVisible); // 슬라이더 토글
                            }}
                            className='bg-white border-2 border-black m-2 rounded-3xl aspect-square transition-all cursor-pointer hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2'></div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation(); // 부모로 이벤트 전파 방지
                                setIsSliderVisible(!isSliderVisible); // 슬라이더 토글
                            }}
                            className='bg-white border-2 border-black m-2 rounded-3xl aspect-square transition-all cursor-pointer hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2'></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Projects;