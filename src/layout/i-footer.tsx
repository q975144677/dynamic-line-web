const IFooter = (props: { children?: any, className?: string } | Record<string, any>) => {

    return (
        <>
        <div {...props}>
            <div className={`border-b `}></div>
            <div
                className={`bg-transparent backdrop-blur-md backdrop-saturate-150 shadow-md flex flex-row justify-between pl-32 pr-32 pt-8 pb-8`}>
                <div className={`footer-logo flex flex-row justify-center items-center`}>
                    Dynamic Line | Copyright ©
                </div>
                <div className={`footer-contact flex flex-row justify-center items-center gap-4`}>
                    <div><a href="#"> Bilibili  </a></div>
                    <div><a href="#"> Concat Us </a></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default IFooter