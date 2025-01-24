import Image from "next/image";
import { Button, Card, Chip, Tooltip } from "@mui/material";
import type { Artwork, Config } from "@/types/Artwork";

const ArtworkCard = ({
  artwork,
  config,
}: {
  artwork: Artwork;
  config: Config;
}) => {
  const {
    id,
    title,
    artist_display,
    artist_title,
    date_display,
    thumbnail,
    description,
    image_id,
    medium_display,
    is_on_view,
  } = artwork;

  const iiifUrl = (identifier: string) =>
    `${config.iiif_url}/${identifier}/full/843,/0/default.jpg`;

  return (
    <Card className="px-4 py-5 rounded-3xl flex flex-col gap-4 max-h-[45rem] relative">
      <Chip
        label={is_on_view ? "On View" : "Not On View"}
        color={is_on_view ? "success" : "default"}
        className="absolute top-4 end-4 text-xs"
        size="small"
      />
      {thumbnail && (
        <div className="-mx-4 -mt-6 h-[15rem] overflow-hidden">
          <Image
            src={thumbnail.lqip}
            alt={thumbnail.alt_text}
            width={thumbnail.width}
            height={thumbnail.height}
            objectFit="cover"
            className="h-[15rem]"
          />
          {/* <Image src={iiifUrl(image_id)} alt={title} width={843} height={843} /> */}
        </div>
      )}
      <div className="flex flex-col gap-2 items-start">
        <h3 className="text-2xl">{title}</h3>
        {artist_title && (
          <Tooltip title={artist_display} className="w-min-content">
            <p className="font-light text-gray-600">{artist_title}</p>
          </Tooltip>
        )}
      </div>
      <div className="flex flex-col gap-2 items-start">
        <Tooltip title={medium_display} className="w-min-content">
          <p className="text-xs font-thin text-gray-600 line-clamp-1">
            {medium_display}
          </p>
        </Tooltip>
        <p className="text-xs font-thin text-gray-600">{date_display}</p>
      </div>
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          className="text-sm text-gray-500 line-clamp-4"
        />
      )}
      <div className="mt-auto flex justify-end">
        <Button
          variant="contained"
          href={`${config.website_url}/artworks/${id}`}
          target="_blank"
          className="mt-auto"
        >
          View Artwork
        </Button>
      </div>
    </Card>
  );
};

export default ArtworkCard;
