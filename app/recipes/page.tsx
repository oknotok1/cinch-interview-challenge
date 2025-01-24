import recipes from "@/data/recipes";

import RecipeCard from "@/app/components/RecipeCard";

const generateRandomRecipeIds = (count: number) => {
  const randomRecipeIds = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * 100000);
    randomRecipeIds.push(randomIndex);
  }
  return randomRecipeIds;
};

export default async function Home() {
  // const baseUrl = "https://api.spoonacular.com";
  // const path = "/recipes/informationBulk";
  // const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  // const recipeIds = [
  //   123456, 111333, 555226, 321556, 234732, 716429, 715538, 715539, 715540,
  // ];
  // const url = `${baseUrl}${path}?ids=${recipeIds.join(",")}&apiKey=${apiKey}`;

  // const randomRecipeIds = generateRandomRecipeIds(9);
  // const url = `${baseUrl}${path}?ids=${randomRecipeIds.join(
  //   ","
  // )}&apiKey=${apiKey}`;

  // const data = await fetch(url);
  // const recipes = await data.json();

  return (
    <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-4">
      <h1 className="text-4xl">Spoonacular Recipes</h1>
      <p>
        Here are some delicious recipes from Spoonacular for you to explore.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        {recipes.map((recipe: any) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
