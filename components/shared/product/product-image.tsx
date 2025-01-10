"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ProductImage({ image }: { image: string[] }) {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Image
        src={image[current]}
        alt="Product Image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />

      <div className="flex">
        {image.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === index && "border-orange-600"
            )}
          >
            <Image src={img} alt="Preview" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
