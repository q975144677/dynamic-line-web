import classNames from "classnames";

const Content = (props: { className?: string, children?: any }) => {

    return (
        <>
            <div className={classNames(`flex-1 flex flex-col relative`, props.className)}>
                {props.children}
            </div>
        </>
    )
}
export default Content