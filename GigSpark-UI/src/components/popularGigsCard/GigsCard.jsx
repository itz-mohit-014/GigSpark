import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const GigsCard = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full aspect-[4/5] transition-all duration-300 ease-out snap-start cursor-pointer",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card?.coverPicture?.url}
      alt={card?.name}
      className="object-cover h-full w-full"
    />

    {hovered !== index && (
      <p className="absolute bottom-0 left-0 w-full p-2 font-normal text-base text-gray-200 bg-gradient-to-b from-gray-700/0 to-gray-950/90">
        {card?.name}
      </p>
    )}
    <Link
      to={`/gigs/${card?.name.split(" ").join("-").toLowerCase()}?source=${
        card._id
      }`}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text absolute top-2 left-4 z-10">
          {" "}
          <p className="font-normal text-xs text-gray-200">{card?.description}</p>
          <h1 className="font-semibold text-xl md:text-2xl text-gray-100">
            {card?.name}
          </h1>
        </div>
      </div>
    </Link>
  </div>
));

GigsCard.displayName = "Gigs Card";
export default GigsCard;
