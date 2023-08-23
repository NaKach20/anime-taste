"use client";

import { useQuery } from "react-query";

function Characters({ id }: { id: string }) {
  const { isLoading, data } = useQuery("Data", () =>
    fetch(`https://api.jikan.moe/v4/anime/${id}/characters_staff`).then((res) =>
      res.json()
    )
  );

  return (
    <div className="container flex flex-wrap items-center mx-auto p-4">
      Characters
    </div>
  );
}

export default Characters;
