import classNames from "classnames";

const INavBrand = (props: { children?: any, className?: string }) => {

    return (
        <>
            <div {...props} className={classNames(`h-full flex flex-row justify-center items-center gap-2 `,props.className)}>
                {props.children}
            </div>
        </>
    )
}
export default INavBrand