import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-4 items-start">
      <h1 className="text-4xl">Cinch Simple Project</h1>
      <p>There are three pages in this project.</p>
      <Link
        href="/recipes"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        View Recipes
      </Link>
      <Link
        href="/artworks"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        View Artworks
      </Link>
      <Link
        href="/employees-of-the-month"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        View People
      </Link>
    </div>
  );
}
