'use client'

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currrentUser?: SafeUser | null;
}

const ListingHead:React.FC<ListingHeadProps> = (props) => {
    const { getByValue } = useCountries();
    const location = getByValue(props.locationValue);

    return (
        <>
            <Heading 
                title={props.title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div 
                className="
                    w-full
                    h-[60vh]
                    overflow-hidden
                    rounded-xl
                    relative
                ">
                <Image 
                    alt="Image"
                    src={props.imageSrc}
                    fill
                    className="object-cover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={props.id}
                        currentUser={props.currrentUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ListingHead;