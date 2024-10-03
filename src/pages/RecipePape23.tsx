import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage23() {
  return (
    <>
      <Recipe title={"Mint lemonade"} />
      <AdviceGallery description={"Mint lemonade"} />
      <SubscribePortal />
    </>
  );
}