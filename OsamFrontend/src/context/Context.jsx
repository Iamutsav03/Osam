import { createContext } from "react";
import assets from "../assets/assets";

export const OsamContext = createContext(null);

const OsamProvider = ({ children }) => {
  const cardData = [
    {
      title: "Website 1",
      description: "Description 1",
      link: "https://example1.com",
      image: "image1.jpg",
    },
    {
      title: "Website 2",
      description: "Description 2",
      link: "https://example2.com",
      image: "image2.jpg",
    },
    {
      title: "Website 3",
      description: "Description 1",
      link: "https://example1.com",
      image: "image1.jpg",
    },
    {
      title: "Website 4",
      description: "Description 2",
      link: "https://example2.com",
      image: "image2.jpg",
    },
    {
      title: "Website 5",
      description: "Description 1",
      link: "https://example1.com",
      image: "image1.jpg",
    },
    {
      title: "Website 6",
      description: "Description 2",
      link: "https://example2.com",
      image: "image2.jpg",
    },
  ];

  const services = [
    {
      name: "Web Development",
      description:
        "Building responsive, user-friendly websites tailored to your needs.",
      icon: assets.web,
      link: "/services/web-development",
    },
    {
      name: "SEO Optimization",
      description:
        "Improving your website's visibility on search engines with cutting-edge techniques.",
      icon: assets.seo,
      link: "/services/seo-optimization",
    },
    {
      name: "Mobile App Development",
      description:
        "Creating high-performance mobile apps to grow your business.",
      icon: assets.mobile,
      link: "/services/mobile-app-development",
    },
    {
      name: "Digital Marketing",
      description:
        "Boosting your brand with effective online marketing strategies.",
      icon: assets.digital,
      link: "/services/digital-marketing",
    },
    {
      name: "App Reviews",
      description:
        "Boost your app's credibility on Play Store and App Store with positive reviews, helping you attract more users and build trust.",
      icon: assets.appreviews,
      link: "/services/app-reviews",
    },
    {
      name: "App Registrations",
      description:
        "Drive real signups and expand your user base with our targeted app registration campaigns.",
      icon: assets.cloud,
      link: "/services/app-registrations",
    },
    {
      name: "Map Reviews",
      description:
        "Enhance the visibility and reputation of your business locations with strategically placed positive reviews.",
      icon: assets.cloud,
      link: "/services/map-reviews",
    },
    {
      name: "Advertisement Services",
      description:
        "We offer: Ad Production, Influencer Marketing, and Ad Management to help grow your brand's reach effectively.",
      icon: assets.cloud,
      link: "/services/advertisement-services",
    },
    {
      name: "App Testing",
      description:
        "Real-User Testing: Identify potential issues with real-time user feedback. Technical Support: Expert teams for code and server optimization.",
      icon: assets.cloud,
      link: "/services/app-testing",
    },
    {
      name: "Video Editing",
      description:
        "Bring your video content to life with our professional editing services, catering to both short reels and long-form videos.",
      icon: assets.cloud,
      link: "/services/video-editing",
    },
    {
      name: "Graphic Designing",
      description:
        "Create captivating visuals, from professional logo designs to stunning graphics, to make your brand stand out.",
      icon: assets.cloud,
      link: "/services/photoshop-logo-design",
    },
  ];

  const feedbacks = [
    {
      profilePic: "https://example.com/profile1.jpg",
      name: "Alice Johnson",
      story:
        "Using this platform has significantly boosted our team's productivity!",
    },
    {
      profilePic: "https://example.com/profile2.jpg",
      name: "Bob Smith",
      story:
        "The features and support provided are unmatched. Highly recommended!",
    },
    {
      profilePic: "https://example.com/profile1.jpg",
      name: "Alice Johnson",
      story:
        "Using this platform has significantly boosted our team's productivity!",
    },
    {
      profilePic: "https://example.com/profile2.jpg",
      name: "Bob Smith",
      story:
        "The features and support provided are unmatched. Highly recommended!",
    },
    {
      profilePic: "https://example.com/profile1.jpg",
      name: "Alice Johnson",
      story:
        "Using this platform has significantly boosted our team's productivity!",
    },
    {
      profilePic: "https://example.com/profile2.jpg",
      name: "Bob Smith",
      story:
        "The features and support provided are unmatched. Highly recommended!",
    },
  ];
  const companiesData = [
    {
      id: 1,
      name: "Company 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Company 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Company 3",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Company 4",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Company 5",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Company 6",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Company 7",
      image: "https://via.placeholder.com/150",
    }
  ];

  const OsamData = {
    cardData,
    services,
    feedbacks,
    companiesData
  };
  return (
    <OsamContext.Provider value={OsamData}>{children}</OsamContext.Provider>
  );
};

export default OsamProvider;
