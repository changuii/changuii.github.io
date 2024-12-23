import {useEffect, useState} from "react";

const AboutMe: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const boxes = document.querySelectorAll(".box");
        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 화면 안으로 들어오면 요소를 나타나게 함
                        entry.target.classList.remove("opacity-0", "translate-y-4");
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    } else {
                        // 화면 밖으로 나가면 요소를 다시 숨김
                        entry.target.classList.remove("opacity-100", "translate-y-0");
                        entry.target.classList.add("opacity-0", "translate-y-4");
                    }
                });
            },
            {
                root: null, // 뷰포트 기준
                rootMargin: "0px", // 추가 여백 없음
                threshold: 0.5, // 50% 이상 보이면 isIntersecting이 true
            }
        );

        boxes.forEach((box) => observer.observe(box));
        // 클린업 함수로 observer 해제
        return () => {
            boxes.forEach((box) => observer.unobserve(box));
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return (
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                className={`box w-full bg-white transition-all duration-500 cursor-default mb-5`}>
                <div className='flex h-full flex-col mt-36 justify-center items-center'>
                    <div className='rounded-full w-96 h-96 bg-black mb-10 shadow-2xl'></div>
                    <div className='font-bold'>LEE-GHANGUI<sub className='text-xs font-normal text-gray-400'>이창의</sub>
                    </div>
                    <div className='text-xs m-0 text-gray-400'>Backend-Developer</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='w-1/2 flex mb-44 flex-col h-max items-center'>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-white rounded-2xl shadow-2xl ml-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-black rounded-2xl shadow-2xl ml-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-white rounded-2xl shadow-2xl ml-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-black rounded-2xl shadow-2xl ml-36">
                    </div>
                </div>
                <div className='w-0.5 bg-black opacity-20 shadow-2xl'>
                </div>
                <div className='w-1/2 mt-36 mb-44 flex flex-col h-max items-center'>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-black rounded-2xl shadow-2xl mr-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-white rounded-2xl shadow-2xl mr-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-black rounded-2xl shadow-2xl mr-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-white rounded-2xl shadow-2xl mr-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-black rounded-2xl shadow-2xl mr-36">
                    </div>
                    <div
                        className="box opacity-0 w-96 h-96 mt-20 translate-y-4 transition duration-1000 bg-white rounded-2xl shadow-2xl mr-36">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
