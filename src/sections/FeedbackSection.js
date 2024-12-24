import { useContext } from "react";
import FeedbackCard from "../components/FeedbackCard";
import { OsamContext } from "../context/Context";

function FeedbackSection() {
    const {feedbacks} = useContext(OsamContext)
  return (
    <section className="py-10 bg-[#f9fafa]">
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8 text-center">Why Users Love Us</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard
            key={index}
            profilePic={feedback.profilePic}
            name={feedback.name}
            story={feedback.story}
          />
        ))}
      </div>
    </section>
  );
}

export default FeedbackSection;
