import classNames from "classnames";
import {SegmentedControl} from "@mantine/core";

const Tags = (props: {
    children?: any,
    className?: string,
    tags?: [{ name: string, id: string }],
    onChange?: (v: string) => void,
    value?:number
} | Record<string, any>) => {
    const {tags, onChange,value, ...otherProps} = props;
    // const dataForTags = [{name: "DND", id: "1"}, {name: "冒险", id: "2"}, {name: "科幻", id: "3"}, {
    //     name: "悬疑",
    //     id: "4"
    // }];
    const dataForTags = tags.map((tag: { name: string, id: string }) => ({label: tag.name, value: tag.id}));
    return (
        <>

            <div className={classNames(``, props.className)} {...otherProps}>
                <SegmentedControl
                    data={dataForTags}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </>
    )
}
export default Tags