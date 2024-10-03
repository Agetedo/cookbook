import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage06() {
  return (
    <>
      <Recipe title={"Pasta with champignons"} />
      <AdviceGallery description={"Pasta with champignons"} />
      <SubscribePortal />
    </>
  );
}