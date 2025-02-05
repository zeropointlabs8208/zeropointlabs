'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isHamOpen, setIsHamOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Company", href: "/company" },
        { label: "Pages", href: "/pages" },
        { label: "Blog", href: "/blog" },
        { label: "Shop", href: "/shop" }
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="lg:container lg:mx-auto px-4 py-4 hidden md:flex justify-between items-center">
                <div className="text-xl font-bold"></div>
                <div className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center justify-center font-semibold gap-2 transition-colors duration-200 ${pathname === link.href && "text-green-600 font-medium"}`}
                        >
                            {link.label}
                            <FaAngleDown />
                        </Link>
                    ))}
                </div>
                <Link className="flex items-center space-x-4 rounded-md" href="/contact">
                    <Button
                        className="px-4 py-2 bg-[#bee0e6] rounded-lg font-semibold shadow-[0px_5px_6px_-1px_#c5c3c39e] hover:bg-[#93dce9] transition"
                        text="Get Started"
                        rightArrow
                    />
                </Link>

                <div className="w-5">
                    <IoMenu className='w-6 h-6' />
                </div>
            </div>

            <div className="md:hidden container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="w-5" onClick={() => setIsHamOpen(true)}>
                    <IoMenu className='w-6 h-6' />
                </div>
                <Link className="flex items-center space-x-4 rounded-md" href="#">
                    <Button
                        className="px-4 py-2 bg-[#bee0e6] rounded-lg font-semibold shadow-[0px_5px_6px_-1px_#c5c3c39e] hover:bg-[#93dce9] transition"
                        text="Get Started"
                        rightArrow
                    />
                </Link>
            </div>

            <div className={`md:hidden fixed top-0 left-0 right-0 bg-white flex flex-col items-start p-8 gap-2 text-xl transition-transform duration-300 ${isHamOpen ? "translate-y-0" : "-translate-y-full"}`}>
                    <IoMdClose className="self-end p-1 text-[35px] bg-[#bee0e6] rounded-full hover:bg-[#93dce9] transition" 
                onClick={() => setIsHamOpen(false)}
                    />
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center justify-center font-semibold gap-2 transition-colors duration-200 ${pathname === link.href && "text-green-600 font-medium"}`}
                        onClick={() => setIsHamOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
