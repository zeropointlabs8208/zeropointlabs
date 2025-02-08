import Link from "next/link";
import { Button } from "../button";

import vector from '@/public/Vector.png'
import heroImg from '@/public/heroImg.png'


export function Hero() {
    return <>
        <section className="bg-[#BEE1E6] py-20">
            <div className="mx-auto px-4 flex justify-center lg:gap-36 gap-20 flex-col md:flex-row items-center">
                <div className="md:max-w-[44%] flex flex-col gap-10 text-center md:text-start items-center md:items-start ">
                    <span className="bg-green-700 w-fit text-white px-4 py-2 rounded-full font-medium">
                        Digital Marketing Agency
                    </span>
                    <h1 className="text-4xl lg:text-[53px] font-semibold md:leading-[61px] ">
                        Advanced analytics to grow your business
                    </h1>
                    <p className="text-gray-700 ">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div className="flex gap-4 md:gap-14">
                        <Link className="flex items-center space-x-4 rounded-md" href="/contact">
                            <Button
                                className="px-2 md:px-6 py-1 md:py-3 bg-black text-white rounded-md hover:bg-gray-700 transition"
                                text="Get Started"
                                rightArrow
                            />
                        </Link>
                        <Link className="flex items-center space-x-4 rounded-md" href="#">
                            <Button
                                className="px-2 md:px-6 py-1 md:py-3 border border-gray-700 text-gray-700 rounded-md hover:text-black transition"
                                text=" How it works"
                                rightArrow
                            />
                        </Link>
                    </div>
                </div>
                <div className="relative border-2 border-green-600 rounded-[42px] h-[301px] md:h-[398px] w-[246px] md:w-[246px] ">
                    <img
                        alt="Team working on analytics"
                        className="absolute shadow-lg rounded-[35px] bottom-[13px] left-[20px] h-full"
                        height="300"
                        src={heroImg.src}
                        width="400" />
                    <div
                     className="absolute flex flex-col justify-end rounded-[18px] bg-white h-[111px] md:h-[191px] md:w-[184px] w-[111px] bottom-[24px] -left-[26px] ">
                        <img src={vector.src} className="rounded-b-[18px]" />
                     </div>
                </div>
            </div>
        </section>
    </>
}