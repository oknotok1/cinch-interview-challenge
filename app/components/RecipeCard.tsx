import Image from "next/image";
import { Button, Card, Chip, Tooltip } from "@mui/material";
import { Recipe } from "@/types/Recipe";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const {
    title,
    sourceName,
    readyInMinutes,
    servings,
    summary,
    sourceUrl,
    image,
    dishTypes,
  } = recipe;

  return (
    <Card className="p-4 rounded-md flex flex-col gap-4 max-h-[45rem]">
      <div className="-mx-4 -mt-6">
        {image && (
          <Image
            src={image}
            alt={title}
            width={600}
            height={300}
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">{title}</h3>
        <p className="font-medium text-gray-700">{sourceName}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {dishTypes.map((dishType, index) => (
          <Chip key={index} label={dishType} size="small" />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-600">
          Ready in {readyInMinutes} minutes • Serves {servings}
        </p>
        <Tooltip
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            />
          }
          className="w-min-content"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
            className="text-gray-500 line-clamp-4"
          />
        </Tooltip>
      </div>
      <div className="mt-auto flex justify-end">
        <Button variant="contained" href={sourceUrl} target="_blank">
          View Recipe
        </Button>
      </div>
    </Card>
  );
};

export default RecipeCard;
