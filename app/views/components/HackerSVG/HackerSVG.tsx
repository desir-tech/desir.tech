import type { ComponentType } from "@typings/Component"
import { memo } from "react"

export type SVGProps = {
    props?: any
}

const HackerSVG: ComponentType<SVGProps | any> = (props) => {

    const ComputerScreenText = () => {
        return (
            <path
                d="M413.28 201.64c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-11.52c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h11.52c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92zm-3.84 7.68c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-5.76c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h5.76c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h1.92zm23.251-5.76c0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-10.08c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h8.16c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-9.6c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-2.4c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-1.44c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h1.44c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h2.4c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h9.6c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92zm-4.032 1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-6.24c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h6.24zm22.291 5.76c0 .736-.064 1.376-.192 1.92h-1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-10.56c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h8.64c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-7.68c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h10.56c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-8.64c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h7.68c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92zm10.386-17.28c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h3.84c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-3.84zm7.68 19.2c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-11.52c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h3.84c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-2.88c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h6.72c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h3.84zm21.139-11.52c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-3.84c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-3.36c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-1.44c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h2.88c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-9.6c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h2.88c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-2.88c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h4.8c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h7.2c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.44zm38.63-9.6c0 .736-.064 1.376-.192 1.92h-5.76c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-3.84c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-5.76c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h15.36c.128.512.192 1.152.192 1.92zm19.218 11.52c0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-10.08c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h8.16c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-9.6c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-2.4c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-1.44c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h1.44c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h2.4c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h9.6c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92zm-4.032 1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-6.24c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h6.24zm23.059 3.84c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-9.6c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h1.92c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h9.6c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-3.84c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-5.76c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h1.92c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h5.76c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h3.84zm7.891-9.6c0 .736-.064 1.376-.192 1.92h1.44c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-1.44c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-3.84c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h3.84c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92zm11.328 5.76c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h-3.84c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h-6.24c-.128-.544-.192-1.184-.192-1.92 0-.768.064-1.408.192-1.92h7.68c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92h2.4c.128.512.192 1.152.192 1.92 0 .736-.064 1.376-.192 1.92z"
                fill="#008000"
                className="group-hover:animate-pulse repeat-infinite"
                id={'computer-screen-text'}
            />
        )
    }

    const ComputerScreenSkeleton = () => {

        return (
            <path
                d="M458.714 148h-30.857v14.608h30.857V148zM565.571 148h-10.857v14.608h10.857V148zM587.286 148h-10.857v14.608h10.857V148zM543.286 148h-73.715v14.608h73.715V148zM419.857 242.392H389V257h30.857v-14.608zM526.714 242.392h-10.857V257h10.857v-14.608zM548.429 242.392h-10.858V257h10.858v-14.608zM504.429 242.392h-73.715V257h73.715v-14.608zM547.286 180.588h-30.857v14.608h30.857v-14.608zM589 180.588h-30.857v14.608H589v-14.608zM399.857 180.588H389v14.608h10.857v-14.608zM421.571 180.588h-10.857v14.608h10.857v-14.608zM506.143 180.588h-73.714v14.608h73.714v-14.608zM483.286 212.052h-30.857v14.608h30.857v-14.608zM441.571 212.052h-30.857v14.608h30.857v-14.608zM399.857 212.052H389v14.608h10.857v-14.608zM589 212.052h-10.857v14.608H589v-14.608zM567.286 212.052h-73.715v14.608h73.715v-14.608z"
                fill="#C5C5C5"
                strokeDasharray={1000}
                strokeDashoffset={3}
                strokeWidth={2}
                stroke={"#FFC5FFAA"}
                className="drawPath animate-pulse"
                id={'computer-screen-skeleton'}
                fillOpacity={0.25}
            />
        )
    }

    const RightArmSleve = () => {
        return (
            <path
                d="M34.365 124.98l-9.209-2.303s-18.418 5.756-23.022 29.93c-4.605 24.174-1.151 120.869 4.604 122.02 5.756 1.151 28.428-16.836 32.056-13.023 3.63 3.814-7.882-15.755-4.428-26.115 3.453-10.361 0-110.509 0-110.509z"
                fill="#fff"
                id={`right-arm-sleve`}
                className={`fill-white duration-500 ease-in-out group-hover:fill-black`}
            />
        )
    }

    const LeftArmSleve = () => {
        return (
            <path
                d="M162.142 122.677l10.725 2.847s24.96 63.919 19.204 107.662c-5.755 43.744-9.209 34.535-9.209 34.535s-9.209-20.721-29.929-16.116l9.209-128.928z"
                fill="#fff"
                id={'left-arm-sleve'}
                className={`fill-white duration-500 ease-in-out group-hover:fill-black`}
            />
        )
    }

    const ShirtOuter = () => {
        return (
            <path
                d="M80.298 98.786s-12.55-7.19-16.003-.282c-3.453 6.906-35.685 24.173-39.139 24.173-3.453 0 6.907 95.545 2.303 107.056-4.605 11.511-26.476 95.544-13.814 102.451 12.663 6.907 3.454-6.907 16.116 10.36 12.662 17.267 74.824 17.267 78.277 10.361 3.454-6.907-27.627-58.708-21.871-107.056 5.755-48.348 14.964-115.114 6.906-124.323-8.057-9.209-12.775-22.74-12.775-22.74zM121.852 106.561l1.603-5.518s47.896 15.879 50.198 26.239c2.302 10.36 1.151 82.882-6.907 88.637-8.058 5.756-19.569 14.965-11.511 28.779 8.058 13.813 17.267 28.778 24.174 29.929 6.907 1.151 19.569 9.209 16.116 17.267-3.454 8.058-44.895-6.906-44.895-6.906s-27.627-20.721-26.476-52.953c1.151-32.232-2.302-125.474-2.302-125.474z"
                fill="#fff"
                id={`shirt-outer`}
                className={`fill-white duration-500 ease-in-out group-hover:fill-black`}
            />
        )
    }

    const ShirtInner = () => {
        return (
            <path
                d="M63.144 120.375s56.406 11.511 70.219-6.907c13.814-18.418 19.57 51.801 19.57 51.801l6.906 73.673-10.36 40.29s-54.103 43.743-71.37 47.196c-17.267 3.454-43.743 5.756-43.743 5.756s8.058-127.776 8.058-130.078c0-2.303 20.72-81.731 20.72-81.731z"
                fill="#fff"
                id={'shirt-inner'}
                className={`fill-white duration-500 ease-in-out group-hover:fill-black`}
            />
        )
    }

    const DeskDrawerHandles = () => {
        return (
            <path
                d="M142.635 426.883h-29.6l-12.333-8.633h55.499l-13.566 8.633zM142.635 462.649h-29.6l-12.333-8.633h55.499l-13.566 8.633zM142.635 513.215h-29.6l-12.333-8.634h55.499l-13.566 8.634zM142.635 563.78h-29.6l-12.333-8.633h55.499l-13.566 8.633zM595.257 431.816h29.6l12.333-8.633h-55.499l13.566 8.633zM595.257 467.582h29.6l12.333-8.633h-55.499l13.566 8.633zM595.257 518.148h29.6l12.333-8.633h-55.499l13.566 8.633zM595.257 568.713h29.6l12.333-8.633h-55.499l13.566 8.633z"
                fill="#3F3D56"
            />
        )
    }

    const DeskDrawerRight = () => {
        return (
            <>
                <path
                    d="M516.326 380.018v184.995l30.944 50.43 2.355 3.836h122.097l2.467-239.261H516.326z"
                    fill="#E6E6E6"
                />
                <path
                    opacity={0.1}
                    d="M516.326 380.018v184.995l30.944 50.43 1.899-235.425h-32.843z"
                    fill="#000"

                />
            </>
        )
    }

    const DeskDrawerLeft = () => {

        return (
            <>
                <path
                    d="M221.566 375.084V560.08l-30.944 50.43-2.355 3.835H66.17l-2.467-239.261h157.863z"
                    fill="#E6E6E6"
                />
                <path
                    opacity={0.1}
                    d="M221.566 375.084V560.08l-30.944 50.43-1.899-235.426h32.843z"
                    fill="#000"

                />
            </>
        )
    }

    const DeskSurface = () => {
        return (
            <>
                <path
                    d="M711.188 371.385v11.099H47.67v-16.033l61.665-32.066h547.588l54.265 37z"
                    fill="#E6E6E6"
                />
                <path
                    opacity={0.1}
                    d="M711.188 371.385v11.099H47.67v-16.033l663.518 4.934z"
                    fill="#000"
                />
            </>
        )
    }

    const ComputerMonitor = () => {
        return (
            <>
                <path
                    d="M615.414 120.456H366.228a9.434 9.434 0 00-6.664 2.76 9.409 9.409 0 00-2.042 3.058 9.396 9.396 0 00-.717 3.606v167.858a9.396 9.396 0 00.717 3.606 9.409 9.409 0 005.1 5.101 9.434 9.434 0 003.606.717h94.593l-3.544 22.626s-20.252 10.759-6.012 11.076c14.24.316 81.328 0 81.328 0s12.974 0-7.595-11.392l-3.334-22.31h93.75a9.434 9.434 0 006.664-2.76 9.427 9.427 0 002.76-6.664V129.88a9.434 9.434 0 00-2.76-6.664 9.427 9.427 0 00-6.664-2.76z"
                    fill="#F2F2F2"
                />
                <path
                    d="M615.819 130.424H365.823v139.871h249.996V130.424z"
                    fill="#000"
                />
                <path
                    d="M490.821 127.576a1.582 1.582 0 100-3.163 1.582 1.582 0 000 3.163zM490.821 300.358a6.013 6.013 0 100-12.025 6.013 6.013 0 000 12.025z"
                    fill="#F2F2F2"
                />
            </>
        )
    }

    const KeyboardAndMouse = () => {

        return (
            <>
                <path
                    d="M481.452 357.952v3.165h-170.25v-2.532l.234-.633 4.196-11.392h162.339l3.481 11.392zM546.97 354.854c-.311 1.326-1.481 2.725-4.127 4.047-9.493 4.747-28.797-1.265-28.797-1.265s-14.873-2.532-14.873-9.177c.417-.286.853-.545 1.304-.776 3.991-2.111 17.225-7.322 40.69.221a9.788 9.788 0 014.461 2.923 4.662 4.662 0 011.342 4.027z"
                    fill="#3F3D56"
                    className="duration-500 ease-in-out hover:translate-x-4"
                />
                <path
                    opacity={0.1}
                    d="M546.97 354.854c-11.62 4.452-21.978 4.785-32.607-2.598a23.342 23.342 0 00-13.886-4.573c3.991-2.111 17.225-7.322 40.69.221a9.788 9.788 0 014.461 2.923 4.662 4.662 0 011.342 4.027z"
                    fill="#000"
                    className="duration-500 ease-in-out hover:translate-x-4"

                    fillOpacity={0.6}
                />
                <path
                    d="M532.4 352.256c2.272 0 4.114-.567 4.114-1.266 0-.699-1.842-1.266-4.114-1.266s-4.114.567-4.114 1.266c0 .699 1.842 1.266 4.114 1.266z"
                    fill="#F2F2F2"
                    className="duration-500 ease-in-out hover:translate-x-4"

                />
                <path
                    opacity={0.1}
                    d="M481.452 357.952v3.165h-170.25v-2.532l.234-.633h170.016z"
                    fill="#000"
                    className="duration-500 ease-in-out hover:translate-x-4"

                />

            </>
        )
    }

    const LeftShoe = () => {
        return (
            <path
                d="M254.233 481.832s-17.267-5.756-25.325 11.511-4.605 21.872-4.605 21.872 26.476 9.209 31.081 4.604c2.003-2.003 8.364-2.699 14.912-2.846 9.973-.224 12.627-14.333 3.208-17.619a9.821 9.821 0 00-.853-.255c-9.209-2.302-18.418-17.267-18.418-17.267z"
                fill="#121212"
            />
        )
    }

    const Pants = () => {

        return (

            <path
                d="M29.761 327.58s1.151 66.765 8.058 88.637 5.756 23.023 4.605 26.476c-1.152 3.454-2.303 1.151-2.303 6.907s-2.302 96.695 0 104.753c2.302 8.058-6.907 21.872 0 23.023 6.907 1.151 39.139 0 40.29-6.907 1.151-6.907-9.209-9.209-4.605-13.813 4.605-4.605 11.512-98.998 11.512-98.998l16.116-65.615 29.929-34.534h63.313l19.569 75.975s-8.058 21.872-2.302 21.872 40.29 6.907 40.29-18.418-11.512-100.149-13.814-102.452c-2.302-2.302 1.151-10.36-2.302-13.813-3.454-3.454-43.743-27.627-58.708-32.232-14.965-4.605-35.958-10.085-35.958-10.085L29.761 327.58z"
                fill="#000"
            />
        )
    }

    const LegsAndNeckSkin = () => {

        return (
            <path
                d="M82.138 74.905s3.453 28.779-9.21 31.081c-12.662 2.302 11.512 41.441 11.512 41.441l57.557 6.907-13.814-46.046s-9.209-3.453-3.453-26.476c5.755-23.023-42.592-6.907-42.592-6.907zM47.028 569.318l4.605 63.313h24.173L68.9 569.318H47.028zM224.303 449.6l3.453 52.952 26.477-11.511-10.361-43.743-19.569 2.302z"
                fill="#422413"
            />
        )
    }

    const FaceSkin = () => {
        return (
            <path
                d="M108.038 93.899c19.073 0 34.534-15.462 34.534-34.534 0-19.073-15.461-34.534-34.534-34.534-19.072 0-34.534 15.461-34.534 34.534 0 19.072 15.462 34.534 34.534 34.534z"
                fill="#422413"
            />

        )
    }

    const LeftArmSkin = () => {

        return (
            <path
                d="M162.142 242.396l-27.628 51.801s-40.29 41.441-17.267 46.045c23.023 4.605 35.686-37.987 35.686-37.987l29.929-42.592-20.72-17.267z"
                fill="#422413"
            />
        )
    }

    const RightArmSkin = () => {

        return (
            <path
                d="M10.192 265.418l48.347 74.824s29.93 37.988 39.139 20.721c9.209-17.267-32.232-46.046-32.232-46.046l-31.08-57.557-24.174 8.058z"
                fill="#422413"
            />
        )
    }

    const RightShoe = () => {

        return (
            <path
                d="M48.623 624.263c-2.776 3.773-2.22 9.165-4.678 13.151-2.132 3.455-6.149 5.267-8.815 8.329a22.306 22.306 0 00-2.266 3.26c-2.473 4.142-4.483 9.451-2.047 13.616 1.959 3.35 6.077 4.66 9.855 5.552 4.774 1.128 9.734 2.031 14.563 1.169 4.83-.862 9.549-3.819 11.27-8.413.34-1.155.741-2.29 1.206-3.4 2.617-5.153 10.827-5.209 13.506-10.33 1.875-3.584.151-7.917-1.571-11.576l-5.261-11.177c-1.746-3.709-8.824-1.576-12.514-2.465-4.812-1.159-9.786-2.436-13.248 2.284z"
                fill="#121212"
            />
        )
    }

    const Hair = () => {
        return (
            <path
                d="M95.374 9.02a8.712 8.712 0 00-4.112.72 8.996 8.996 0 00-2.78 2.882c-3.126 4.25-7.2 7.863-11.962 10.606-3.554 2.044-8.073 4.592-7.465 8.36a9.99 9.99 0 001.733 3.53c3.29 5.247 4.6 11.321 3.73 17.302l9.774-12.842c1.55-2.039 4.246-4.34 6.588-3.06.784.429 1.3 1.198 2.116 1.574 1.948.898 4.02-.818 5.746-2.034 5.947-4.19 14.404-3.093 21.805-1.787 3.494.617 7.332 1.425 9.397 4.047 3.432 4.356-.152 10.65 1.852 15.682a4.863 4.863 0 001.4-1.332c.364-.525.607-1.11.716-1.72 2.793.077 6.217-.171 7.414-2.455a7.75 7.75 0 00.574-2.792c.439-3.836 2.513-7.336 3.887-10.987s1.972-7.93-.347-11.167a14.19 14.19 0 00-3.038-2.898c-13.158-9.996-30.459-11.644-47.028-11.63z"
                fill="#000"
            />
        )
    }



    return (
        <svg
            width={712}
            height={670}
            viewBox="0 0 712 670"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g className="transition-all group animate-in" clipPath="url(#clip0_1_2)">
                <DeskDrawerRight />
                <DeskDrawerLeft />
                <DeskSurface />
                <DeskDrawerHandles />
                <ComputerMonitor />
                <KeyboardAndMouse />
                <Pants />
                <LeftShoe />
                <FaceSkin />
                <LegsAndNeckSkin />
                <ShirtOuter />
                <ShirtInner />
                <LeftArmSkin />
                <LeftArmSleve />
                <RightShoe />
                <Hair />
                <RightArmSkin />
                <RightArmSleve />
                <ComputerScreenSkeleton />
                <ComputerScreenText />
            </g>


            <defs>
                <clipPath id="clip0_1_2">
                    <path fill="#fff" d="M0 0H711.188V669.683H0z" />
                </clipPath>

                <style>
                    {
                        `


                        .drawPath {
                            stroke-dasharray: 100;
                            animation-direction: alternate-reverse;
                            animation: dash 20s ease-in-out infinite;
                          }

                        @keyframes dash {
                            to {
                              stroke-dashoffset: 1000;
                            }
                          }
`
                    }
                </style>


            </defs>

        </svg>
    )
}

export default memo(HackerSVG)
