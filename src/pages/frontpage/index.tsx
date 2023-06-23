import classNames from "classnames";
import Sort from "@/pages/frontpage/sort/Sort.tsx";
import Tags from "@/pages/frontpage/tags";
import IHeroHeader from "@/pages/frontpage/heroheader";
import {useEffect, useRef, useState} from "react";
import IWaterfall from "@/pages/frontpage/waterfall";
import lottie, {AnimationItem} from 'lottie-web'
import backgroundLottieJson from "@/components/lottie/backgroundLottieJson.ts";

const FrontPage = (props: { children?: any, className?: string }) => {
    const sortTypes = [{name: '综合排序', value: 1}, {name: '热度排序', value: 2}];
    const [currentSortType, setCurrentSortType] = useState(sortTypes[0].value);
    const tags = [{name: "DND", id: "1"}, {name: "冒险", id: "2"}, {name: "科幻", id: "3"}, {
        name: "悬疑",
        id: "4"
    }];
    const [currentTagValue, setCurrentTagValue] = useState(tags?.[0]?.id);
    const backgroundRef = useRef(null as any);
    useEffect(() => {
        const animation: AnimationItem = lottie.loadAnimation({
            container: backgroundRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: backgroundLottieJson,
            rendererSettings: {
                preserveAspectRatio: 'none',
            }
        })
        return () => {
            animation.destroy();
        }
    }, [backgroundRef])
    return (
        <>
            <div {...props} className={classNames(``, props.className)}>
                <div className={`bg-white relative `}>
                    <div className={`rotate-180 absolute top-1/2 left-0 bottom-0 right-0 z-10 w-full `}
                         ref={backgroundRef}>
                    </div>
                    <IHeroHeader className={`relative`}/>
                </div>
                <div className={`flex flex-row relative pt-4 pb-4 pl-8 pr-8`}>
                    <div><Sort sortTypeItems={sortTypes} value={currentSortType} onChange={(v) => {
                        setCurrentSortType(v)
                    }}/></div>
                    <div><Tags tags={tags} onChange={(v) => setCurrentTagValue(v)} value={currentTagValue}/></div>
                </div>
                <div className={`i-waterfall`}>
                    <IWaterfall/>
                </div>
            </div>
        </>
    )
}
export default FrontPage