"use client";
import React, { useState } from "react";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function Slide({Item, data, cardLimit}) {
  const [hovered, setHovered] = useState(null);

  return (
    <CarouselContent className={"mx-6"}>
        {data.map((card, index) => (
          <CarouselItem key={card.id} className={cardLimit}>
            {/* card */}
            <Item
              key={card.id}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          </CarouselItem>
        ))}
    </CarouselContent>
  );
}
