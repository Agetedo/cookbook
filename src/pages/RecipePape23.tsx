import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage23() {
  return (
    <>
      <AdviceGallery description={"Mint lemonade"} />
      <Recipe title={"Mint lemonade"} />
      <SubscribePortal />
    </>
  );
}