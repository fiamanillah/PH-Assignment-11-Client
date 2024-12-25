import HeroSection from "@/Sections/HeroSection.jsx";
import Page from "@/components/Page.jsx";
import Categories from "@/Sections/Categories.jsx";
export default function HomePage() {
  return (
    <div>
      <Page>
        <HeroSection />
        <Categories />
      </Page>
    </div>
  );
}
