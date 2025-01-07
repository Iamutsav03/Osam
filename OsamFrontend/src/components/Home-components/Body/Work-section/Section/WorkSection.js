import React, { useState } from "react";
import WorkHeader from "./WorkHeader";
import WorkCard from "./WebsiteCardSection";
import Companies from "./Companies";
import FeedbackSection from "./FeedbackSection";

function WorkSection() {
  const [animateTyping, setAnimateTyping] = useState(true);
  return (
    <section className="bg-[#f4f4f9]">
      <WorkHeader animateTyping={animateTyping} />
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4 mt-8 text-center">
        Websites and Apps
      </h2>

      <WorkCard />
      <Companies/>
      <FeedbackSection />
    </section>
  );
}

export default WorkSection;
