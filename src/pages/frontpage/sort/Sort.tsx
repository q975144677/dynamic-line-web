import classNames from "classnames";
import {MutableRefObject, useCallback, useEffect, useRef, useState} from "react";
import {Button} from "@mantine/core";

const Sort = (props: {
    children?: any,
    className?: string,
    sortTypeItems?: [{ name: string, value: number }],
    value?: number,
    onChange?: (v: number) => void
} | Record<string, any>) => {
    // const sortTypes = [{name: '综合排序', value: 1}, {name: '热度排序', value: 2}];
    const {sortTypeItems,value,onChange,...otherProps} =props ;
    const sortTypes = sortTypeItems as [{ name: string, value: number }];
    const defaultSortType = value || sortTypes?.[0]?.value;
    const [currentSortType, setCurrentSortType] = useState(defaultSortType);
    const [show, setShow] = useState(false);
    const selectItemRef: MutableRefObject<any> = useRef(null);
    const buttonRef: MutableRefObject<any> = useRef(null);
    const handleSortButtonClickListener = (e: Event) => {
        if (!selectItemRef?.current?.contains?.(e?.target) && !buttonRef?.current?.contains(e?.target)) {
            setShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener(`click`, handleSortButtonClickListener)
        return () => {
            document.removeEventListener(`click`, handleSortButtonClickListener);
        }
    }, [])
    useEffect(() => {
        onChange?.(currentSortType);
    }, [currentSortType]);
    const toggle = useCallback(() => {
        setShow(!show);
    }, [show]);
    return (
        <>
            <div {...otherProps} className={classNames(``, props.className)}>
                <div>
                    <Button variant="subtle" onClick={toggle} ref={buttonRef}>
                        {sortTypes.find((typeJson) => typeJson?.value === currentSortType)?.name}
                    </Button>
                </div>
                <div className={`relative z-50`} ref={selectItemRef}>
                    <div
                        className={`transition-all bg-white shadow inline-block absolute rounded overflow-hidden w-48 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        {
                            sortTypes.map(type => (
                                <div key={`sort-type-${type.value}`}
                                     className={`hover:bg-gray-200 rounded cursor-pointer p-2 m-1 `}
                                     onClick={() => {
                                         setShow(false);
                                         setCurrentSortType(type?.value)
                                     }}>
                                    {type.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sort