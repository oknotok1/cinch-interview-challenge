import ArtworkCard from "@/app/components/ArtworkCard";
import BasicPagination from "@/app/components/Pagination";
import { ArticResponse, Artwork } from "@/types/Artwork";

export default async function Artworks() {
  const url = "https://api.artic.edu/api/v1/artworks";
  const response = await fetch(url);
  const data: ArticResponse = await response.json();

  const { data: artworks, pagination, config } = data;

  return (
    <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-4">
      <h1 className="text-4xl">Art Institute of Chicago Artworks</h1>
      <p>Here are some artworks from the Art Institute of Chicago.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        {artworks.map((artwork: Artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} config={config} />
        ))}
      </div>
      <div className="flex items-center justify-center p-4">
        <BasicPagination count={pagination.total} />
      </div>
    </div>
  );
}
