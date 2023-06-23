import classNames from "classnames";
import {Button, Overlay, Paper} from "@mantine/core";

//TODO 测试图片，待删除
import test from '@/assets/jpjpjp.jpeg'
import {useEffect, useState} from "react";
import {useHover} from "react-use";

const IHeroHeader = (props: { children?: any, className?: string } | Record<string, any>) => {
    const [isVisible, setVisible] = useState(false);
    const [storyImageInHeroHeader, hovered] = useHover(
        <div className={`w-full  lg:w-4/5 h-auto cursor-pointer relative  transition-all`}>
            <img src={test} alt="" className={`w-full z-30 relative`}/>
            <Overlay blur={2} center
                     className={`select-none z-40 bg-transparent transition-all opacity-0 ${isVisible && 'opacity-100'}`}>
                <div className={` w-full h-full overflow-auto `}>
                    前情提要：
                    这里是一些关于这个剧本的前情提要 <br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                    这里是一些关于这个剧本的前情提要<br/>
                </div>
            </Overlay>
        </div>
    );
    useEffect(() => {
        setVisible(hovered);
    }, [hovered])
    return (
        <>
            <div className={classNames(`h-full border-b flex `, props.className)} {...props}>
                <Paper shadow="xs" p="md" className={`flex flex-col md:flex-row ` }>
                    <div className={`i-hero-title-left p-8 flex flex-col gap-4 w-full md:w-1/2 z-30`}>
                        <div
                            className={`i-hero-header-title text-3xl font-bold pl-8 pr-8 md:pr-16 flex flex-row justify-end`}>
                            <div className={``}>
                                大家来
                                <span className={`bg-hover bg-opacity-10 pl-4 pr-4`}>投票</span>
                                玩
                                文字冒险吧
                            </div>
                        </div>
                        <div className={`i-hero-header-description flex flex-row justify-end z-30`}>
                            <div>
                                <div
                                    className={`i-hero-header-description1 text-gray-400 pt-2`}>由AI生成的若干剧情脚本，每过一段剧情都会生成选项交由玩家来选择。
                                </div>
                                <div
                                    className={`i-hero-header-description2 text-gray-400 pb-2`}>系统将在选项生成后的两个小时内，汇总各选项投票票数，推进后续剧情发展
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-end items-center`}>
                            <Button className={`shadow-button shadow-primary bg-primary hover:bg-hover`}>
                                <span className={`hidden md:inline`}>试试看右边这个？Get Started !</span>
                                <span className={`md:hidden`}>试试看下边这个？Get Started !</span>
                            </Button>
                        </div>
                    </div>
                    <div className={`i-hero-title-right w-full md:w-1/2 flex flex-row justify-center items-center`}>
                        {storyImageInHeroHeader}
                    </div>
                </Paper>


            </div>
        </>
    )
}
export default IHeroHeader