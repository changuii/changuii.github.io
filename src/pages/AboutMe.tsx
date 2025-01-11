import {useEffect, useState} from "react";
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import NotionPage from "../components/NotionPage.tsx";
import {getData} from "../components/notion.ts";

const AboutMe: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [recordMap, setRecordMap] = useState(null);

    const pageId = 'ABOUT-ME-178d564285c580b3b69fe7ecb8279abe';

    useEffect(() => {
        // 비동기 함수 정의 후 호출
        const fetchData = async () => {
            const data = await getData(pageId);
            // @ts-ignore
            setRecordMap(data);
        };

        fetchData();
        console.log(recordMap)
    }, []);



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
                <div className='flex h-full flex-col pt-36 justify-center items-center'>
                    <div className='rounded-full w-80 h-80 bg-black mb-10 shadow-2xl'></div>
                    <div className='font-bold'>LEE-GHANGUI<sub className='text-xs font-normal text-gray-400'>이창의</sub>
                    </div>
                    <div className='text-xs m-0 text-gray-400'>Backend-Developer</div>
                </div>
            </div>

            {
                recordMap ?
                <NotionPage rootPageId={pageId} recordMap={recordMap}/> : null}
        </div>
    );
};

export default AboutMe;
