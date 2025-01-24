import RecipeCard from "@/app/recipes/components/RecipeCard";
import type { Recipe } from "@/types/Recipe";

export default async function Recipes() {
  return (
    <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-4">
      <h1 className="text-4xl">Spoonacular Recipes</h1>
      <p>
        Here are some delicious recipes from Spoonacular for you to explore.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        {/* Iterate through the objects and render the RecipeCard component here */}
      </div>
    </div>
  );
}
