import classNames from "classnames";

const StoryCard = (props: { children?: any, className?: string } | Record<string, any>) => {

    return (
        <>
            <div className={classNames(``,props.className)}>

            </div>
        </>
    )
}
export default StoryCard