import HeroSection from "@/Sections/HeroSection.jsx";
import Page from "@/components/Page.jsx";
import Categories from "@/Sections/Categories.jsx";
import Stats from "@/components/Stats.jsx";
import SuccessStory from "@/components/SuccessStory.jsx";
export default function HomePage() {
  return (
    <div>
      <Page>
        <HeroSection />
        <Stats />
        <Categories />
        <SuccessStory />
      </Page>
    </div>
  );
}
