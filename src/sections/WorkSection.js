import React, { useState, useEffect, useCallback, useContext } from "react";
import { OsamContext } from "../context/Context";
import WorkHeader from "../components/WorkHeader";
import WorkCard from "../components/WorkCard";
import NavigationButtons from "../components/NavigationButtons";
import FeedbackSection from "./FeedbackSection";  // Placeholder for feedback section
// import CompaniesSection from "./CompaniesSection";  // Placeholder for companies section

function WorkSection() {
  const { cardData } = useContext(OsamContext);
  const cardMargin = 2; // Margin between cards (in percentage)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [animateTyping, setAnimateTyping] = useState(true);

  const totalCards = cardData.length;

  const calculateVisibleCards = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => setVisibleCards(calculateVisibleCards());
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [calculateVisibleCards]);

  const nextCard = () => {
    if (totalCards <= visibleCards) return;
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    if (totalCards <= visibleCards) return;
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  useEffect(() => {
    if (totalCards > visibleCards) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= totalCards - visibleCards) {
            return 0;
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [totalCards, visibleCards]);

  const cardOffset = currentIndex * (100 / visibleCards + cardMargin);

  const calculateCardScale = (index) => {
    if (window.innerWidth < 768) return 1;
    const middleIndex = Math.floor(visibleCards / 2);
    return index === currentIndex + middleIndex ? 1.1 : 1;
  };

  const renderCards = () =>
    cardData.map((card, index) => (
      <WorkCard
        key={index}
        card={card}
        index={index}
        currentIndex={currentIndex}
        visibleCards={visibleCards}
        cardMargin={cardMargin}
        calculateCardScale={calculateCardScale}
      />
    ));

  return (
    <section className="bg-[#f4f4f9]">
      <WorkHeader animateTyping={animateTyping} />
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4 mt-8 text-center">
        Websites and Apps
      </h2>
      <div className="relative w-full overflow-hidden pt-8 min-h-[500px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${cardOffset}%)` }}
        >
          {renderCards()}
        </div>
        <NavigationButtons prevCard={prevCard} nextCard={nextCard} />
      </div>
      <FeedbackSection />
      {/* <CompaniesSection /> */}
    </section>
  );
}

export default WorkSection;
