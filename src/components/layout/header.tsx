
const Header = (props:{children?:any, className?:string}) => {
    return (
        <>
            {/*<div className={classNames(``,props.className)}>*/}
                {props.children}
            {/*</div>*/}
        </>
    )
}

export default Header;