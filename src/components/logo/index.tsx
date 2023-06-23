import {PencilIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";

const Logo = (props: { children?: any, className?: string } | Record<string, any>) => {

    return (
        <>
            <div {...props} className={classNames(`flex flex-row justify-center items-center gap-2`, props.className)}>
                <div className={`logo relative flex flex-row justify-center items-center`}>
                    <PencilIcon className={`w-5 stroke-2 stroke-error rotate-180 absolute ` }></PencilIcon>
                    <PencilIcon className={`w-5 stroke-2 stroke-error rotate-90`}></PencilIcon>
                </div>
                <div className={`name`}>DYNAMIC-LINE</div>
            </div>
        </>
    )
}
export default Logo