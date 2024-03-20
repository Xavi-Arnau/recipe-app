import { GlobalContext } from "../context";
import { useContext } from "react";
import RecipeItem from "../components/RecipeItem";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing was added to favorites yet.
          </p>
        </div>
      )}
    </div>
  );
}
