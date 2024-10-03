import Recipe from "../components/Recipe";
import AdviceGallery from "../components/AdviceGallery";
import SubscribePortal from "../components/SubscribePortal";

export default function RecipePage11() {
  return (
    <>
      <AdviceGallery description={"Guacamole and Tuna Toast"} />
      <Recipe title={"Guacamole and Tuna Toast"} />
      <SubscribePortal />
    </>
  );
}