"use client";

import { useQuery } from "react-query";
import Link from "next/link";

const page = ({ params }: { params: { id: string } }) => {
  const { isLoading, data } = useQuery("Data", () =>
    fetch(`https://api.jikan.moe/v4/anime/${params.id}`).then((res) =>
      res.json()
    )
  );

  const { data: animeRelations } = useQuery("Data", () =>
    fetch(`https://api.jikan.moe/v4/anime/${params.id}/relations`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  console.log(animeRelations);

  return (
    <div className="container flex flex-wrap items-center mx-auto p-4">
      <div className="flex gap-6">
        <img
          className="rounded-lg
          w-[300px] h-[400px] self-center justify-self-center
          
          "
          src={data?.data.images.jpg.image_url}
        />
        <div
          className="flex flex-col
            justify-start items-start gap-4
        "
        >
          <Link
            href={`/anime/${data?.data.mal_id}`}
            className="font-semibold text-xl text-[#09090B] 
           w-full
          "
          >
            {data?.data.title} ({data?.data.title_japanese})
          </Link>
          <p>{data?.data.synopsis}</p>
          <div className="flex gap-4">
            <p className="font-semibold text-base text-[#09090B]">Genres:</p>
            {data?.data.genres.map((genre: { name: string }) => (
              <p className="font-normal text-base text-[#09090B]">
                {genre.name}
              </p>
            ))}
          </div>
          <div className="flex gap-4">
            <p className="font-semibold text-base text-[#09090B]">Episodes:</p>
            <p className="font-normal text-base text-[#09090B]">
              {data?.data.episodes}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="font-semibold text-base text-[#09090B]">Score:</p>
            <p className="font-normal text-base text-[#09090B]">
              {data?.data.score}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="font-semibold text-base text-[#09090B]">Rating:</p>
            <p className="font-normal text-base text-[#09090B]">
              {data?.data.rating}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="font-semibold text-base text-[#09090B]">Aired:</p>
            <p className="font-normal text-base text-[#09090B]">
              {data?.data.aired.string}
            </p>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-2xl text-[#09090B]">Relations</h1>
      <div className="flex flex-row">
        {animeRelations?.data.map((relation) => (
          <div className="flex flex-col gap-4">{relation.relation}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
