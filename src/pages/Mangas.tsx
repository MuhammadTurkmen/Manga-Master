import CardSlider from "@/components/CardSlider";
import OurMangas from "@/components/OurMangas";

function Mangas() {
  return (
    <div className="bg-black">
      <OurMangas />
      <CardSlider title="Explore Our Popular Mangas" direction="left" />
      <CardSlider direction="right" />
      <CardSlider direction="left" />
      <div className="h-32"></div>
    </div>
  );
}

export default Mangas;
