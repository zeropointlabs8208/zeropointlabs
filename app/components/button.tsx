import { HTMLProps } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

interface ButtonProps {
    className?: HTMLProps<HTMLElement>["className"];
    rightArrow?: boolean
    text: string
}

export function Button({ className, rightArrow, text }: ButtonProps) {
    return (
        <button
            className={`flex items-center justify-center md:gap-2 outline-none ${className} `}>
            {text}
            {rightArrow && <BiRightArrowAlt className="mt-[2px]"/>}
        </button>
    )
}