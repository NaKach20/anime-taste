import Animes from "@/shared/Animes";

export default function Home() {
  return (
    <div className="bg-white  min-h-screen">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Animes />
      </div>
    </div>
  );
}
