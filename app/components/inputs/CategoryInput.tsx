'use client'

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
    onClick: (value: string) => void;
    selected?: boolean;
    label: string;
    icon: IconType
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    ...props
}) => {
    return (
        <div
            onClick={() => props.onClick(props.label)}
            className={`
                rounded-xl
                border-2
                p-4
                flex
                flex-col
                gap-3
                hover:border-black
                transition
                cursor-pointer
                ${props.selected ? 'border-black' : 'border-neutral-200' }
            `}
        >
            <Icon size={30} />
            <div className="font-semibold">
                {props.label}
            </div>
        </div>
    )
}

export default CategoryInput;