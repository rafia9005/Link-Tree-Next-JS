import Link from "next/link";
import Image from "next/image";

export default function NavbarLayout() {
    return (
        <nav className="flex flex-wrap lg:justify-evenly items-center p-3 justify-between bg-gray-800 text-white">
            <div className="logo flex gap-3 items-center">
                <Image src="/github.png" width={40} height={40} alt="Github Logo" className="hidden lg:block" />
                <h1 className="text-4xl font-semibold">ラフィ</h1>
            </div>
            <button className="block lg:hidden">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            <ul className="hidden lg:flex lg:gap-10 items-center">
                <li><Link href="">Home</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Skills</Link></li>
                <li><Link href="">Contact</Link></li>
                <li className="border rounded-md hover:bg-white hover:text-black transition-all duration-100 ease-linear hover:transition-all hover:duration-100 hover:ease-linear" style={{ padding: "10px 20px" }}><Link href="">Github</Link></li>
            </ul>
        </nav>
    );
}
