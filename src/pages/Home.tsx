import CardSlider from "@/components/CardSlider";
import Hero from "@/components/Hero";
import HotManga from "@/components/HotManga";
import JoinComunity from "@/components/JoinComunity";

function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <CardSlider title={"Featured Mangas"} direction="left" />
      <HotManga />
      <JoinComunity />
    </div>
  );
}

export default Home;
