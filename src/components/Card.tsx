'use client';

import React from "react";
import Image from "next/image";
import { Breed, BreedImage } from "@/types/breeds";
import { getBreedImage } from "@/api/services/GetBreed";
import { useState, useEffect, useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";

interface CardProps {
    breedDetail: Breed;
}

const Card: React.FC<CardProps> = ({ breedDetail }) => {

    const detail = [
        {
            label: 'Weight (Metric)',
            value: breedDetail.weight.metric
        },
        {
            label: 'Breed',
            value: breedDetail.name
        },
        {
            label: 'Temperament',
            value: breedDetail.temperament
        },
        {
            label: 'Origin',
            value: breedDetail.origin ? breedDetail.origin : 'Not specified'
        },
        {
            label: 'Life Span',
            value: breedDetail.life_span
        }
    ]

    const ref = useRef<HTMLDivElement | null>(null);

    const inViewport: boolean = useOnScreen<HTMLDivElement>({
        ref,
        rootMargin: '-80px',
    });

    const [breedImage, setBreedImage] = useState<BreedImage>();

    useEffect(() => {
        if(!inViewport) return
        const fetchImage = async () => {
            try {
                const breedImageObject = await getBreedImage(breedDetail.reference_image_id);
                setBreedImage(breedImageObject);
            } catch (error) {
                console.error("Error fetching breed image:", error);
            }
        };
        fetchImage();
    }, [inViewport])


    return (
        <div ref={ref} className="max-w-sm bg-cardColor rounded-lg shadow-lg border-[1px] border-borderColor">
            <div className="relative w-full h-60 rounded-t-lg overflow-hidden">
            {breedImage && (
                <Image
                src={breedImage.url}
                alt={`${breedDetail.name} Image`}
                sizes="100 vw"
                fill
                />
                )}
            </div>
            <div className="p-4">
                {
                    detail.map(item => (
                        <div key={`${breedDetail.id} ${item.value}`} className="mb-3">
                            <p className="font-medium">{item.label}</p>
                            <p>{item.value}</p>
                        </div> ))
                }
            </div>
        </div>
    )
}

export default Card;