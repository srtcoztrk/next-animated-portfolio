import Link from "next/link"

const Navbar = ()=>{
    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="">
                <Link href="/">LOGO</Link>
            </div>
            <div className="">
                <button className="w-10 h-8 flex flex-col justify-between">
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                </button>
            </div>
        </div>
    )
}

export default Navbar