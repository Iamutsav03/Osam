import React from "react";
import WebsiteCard from "../components/WebsiteCard";

function WorkCard({ card, index, currentIndex, visibleCards, cardMargin, calculateCardScale }) {
  return (
    <div
      key={index}
      className="flex-shrink-0"
      style={{
        width: `${(100 / visibleCards) - 2}%`, // Adjust card width based on visible cards
        marginRight: `${cardMargin + 1}%`,
        transform: `scale(${calculateCardScale(index)})`, // Apply scaling
        transition: "transform 0.3s ease-in-out", // Smooth scale transition
      }}
    >
      <WebsiteCard
        title={card.title}
        description={card.description}
        link={card.link}
        image={card.image}
      />
    </div>
  );
}

export default WorkCard;
