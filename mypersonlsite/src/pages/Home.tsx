import React from "react";
import BannerSection from "../components/PageComponent01/BannerSection";
import HomePageServiseGrid from "../components/PageComponent01/HomePageServiseGrid";
import WhyChooseSection from "../components/PageComponent01/WhyChooseSection";
import FeaturesSection from "../components/PageComponent01/FeaturesSection";
import GridsWithBgImageSection from "../components/PageComponent01/GridsWithBgImageSection";
import ProgressSection from "../components/PageComponent01/ProgressSection";
import TestimonialsSection from "../components/PageComponent01/TestimonialsSection";
import BlogSection from "../components/PageComponent01/BlogSection";

// video time 8:41

function Home() {
  return (
    <div>
      {/* <!-- banner section --> */}
      <BannerSection />
      {/* <!-- //banner section --> */}

      {/* <!-- home page service grids --> */}
      <HomePageServiseGrid />
      {/* <!-- //home page service grids --> */}

      {/* <!-- why choose section --> */}
      <WhyChooseSection />
      {/* <!-- //why choose section --> */}

      {/* <!-- features section --> */}
      <FeaturesSection />
      {/* <!-- //features section --> */}

      {/* <!-- 3grids with bg-image section --> */}
      <GridsWithBgImageSection />
      {/* <!-- //3grids with bg-image section --> */}

      {/* <!-- progress section --> */}
      <ProgressSection />
      {/* <!-- //progress section --> */}

      {/* <!-- testimonials section --> */}
      <TestimonialsSection />
      {/* <!-- //testimonials section --> */}

      {/* <!-- blog section --> */}
      <BlogSection />
      {/* <!-- //blog section --> */}
    </div>
  );
}

export default Home;
