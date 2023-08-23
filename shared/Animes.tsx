"use client";

import Link from "next/link";
import { useQuery } from "react-query";

type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  genres: {
    name: string;
  }[];

  images: {
    jpg: {
      image_url: string;
    };
  };
};

const Animes = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.jikan.moe/v4/anime").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.data.map((anime: Anime) => (
        <div
          key={anime.mal_id}
          className="flex flex-col
            justify-center items-center
          p-4 border-[1px] border-[#09090B40] rounded-lg gap-4
          drop-shadow-md w-[350px]
        "
        >
          <Link
            href={`/anime/${anime.mal_id}`}
            className="font-semibold text-xl text-[#09090B] 
            self-center justify-self-center text-center
          "
          >
            {anime.title}
          </Link>
          <img
            className="rounded-lg
            w-[300px] h-[400px] self-center justify-self-center
            hover:scale-105 transition-all duration-300 ease-in-out
            
          "
            src={anime.images.jpg.image_url}
          />
          <p className="font-normal text-base text-[#09090B]">
            {anime.synopsis.slice(0, 100)}...
            <Link href={`/anime/${anime.mal_id}`}>
              <span className="font-semibold text-base text-blue-500 cursor-pointer">
                Read More
              </span>
            </Link>
          </p>
          <div
            className="flex gap-2
            flex-wrap
          "
          >
            {anime.genres.map((genre) => (
              <span
                key={genre.name}
                className="font-semibold text-base text-[#09090B] 
                self-center justify-self-center border-[1px] border-[#09090B40] rounded-xl p-2
              "
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animes;
