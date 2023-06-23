import classNames from "classnames";
import Masonry from "react-masonry-css";
import * as DummyTemp from 'dummyjs';
import {createRef, useRef, useState} from "react";
import InfiniteScroller from 'react-infinite-scroller'
import {Card, Loader} from "@mantine/core";
import './index.less';
import {CSSTransition} from "react-transition-group";

const IWaterfall = (props: { children?: any, className?: string } | Record<string, any>) => {
    const Dummy = DummyTemp.default;

    const mock = (() => {
        const result = [];
        for (let i = 0; i < 40; i++) {
            const tempData: Record<string, any> = {};
            tempData.title = Dummy.text(20);
            tempData.text = (
                <div>
                    {
                        Dummy.text(parseInt(String(5 + Math.random() * 40)))
                    }
                </div>
            )
            tempData.image = Dummy.src(500, 400);
            tempData.ref = createRef() ;
            result.push(tempData);
        }
        return result;
    })();
    const mockData = (
        mock.map((data, index) => {
            return (
                // <div key={`data.title_${index}`} className={`i-waterfall-card inline-block transition-all `}>
                //     <div>{data.title}_{index}</div>
                //     <img src={data.image} style={{width: `100%`}} alt=""/>
                //     <div>{data.text}</div>
                // </div>
                <CSSTransition nodeRef={data.ref} key={`data_transition_${index}`}  in={true} appear={true} timeout={1000} classNames={`i-waterfall-card`}>
                    <Card ref={data.ref} key={`data_title_${index}`} className={`shadow-md ml-2 mr-2 mt-8 mb-8`}>
                        <Card.Section>
                            <img src={data.image}/>
                        </Card.Section>
                        <div>
                            {data.text}
                        </div>
                    </Card>
                </CSSTransition>

            );
        })
    )
    const [loadPages, setLoadPages] = useState<number[]>([]);
    const [dataTemp, setDataTemp] = useState<any[]>([]);
    const fetchData = (pageIndex: number, pageSize: number, hasNextPage?: boolean) => {
        setTimeout(() => {
            if (loadPages.indexOf(pageIndex) !== -1) {
                return;
            }
            const offset = (pageIndex - 1) * pageSize
            //TODO 改为后端请求
            const temp = mockData.slice(offset, offset + pageSize);
            if (hasNextPage ?? true) {
                loadPages.push(pageIndex);
                setLoadPages(loadPages)
                setPageIndex(pageIndex + 1);
                dataTemp.push(...temp)
            }
            setDataTemp(hasNextPage ?? true ? dataTemp : temp);
        }, 1000)
    }


    const hasMore = (pageIndex: number, pageSize: number) => {
        return ((pageIndex - 1) * pageSize) < mockData.length;
    }
    const waterFallConfig = {
        default: 5,
        1400: 4,
        1100: 3,
        700: 2,
        500: 1
    };


    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize] = useState(10);

    return (
        <>
            <div {...props} className={classNames(` overflow-auto `, props.className)}>
                <InfiniteScroller
                    className={`w-full`}
                    pageStart={1}
                    loadMore={() => fetchData(pageIndex, pageSize)}
                    hasMore={hasMore(pageIndex, pageSize)}
                    loader={<div key={0} className={`flex flex-row items-center justify-center pt-8 pb-8`}><Loader/>loading...
                    </div>}
                    useWindow={false}
                >
                    <div>
                        <Masonry breakpointCols={waterFallConfig} className={`i-card-water-fall w-full flex gap-4`}
                                 columnClassName={`i-card-water-fall-column`}>
                            {dataTemp}
                        </Masonry>
                        {hasMore(pageIndex, pageSize) ||
                            <div className={`flex flex-row justify-center items-center mb-4 opacity-60`}>
                                - 没有更多了 -
                            </div>
                        }
                    </div>
                </InfiniteScroller>
            </div>
        </>
    )
}
export default IWaterfall;