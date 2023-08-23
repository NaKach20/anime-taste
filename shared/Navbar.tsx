import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="font-bold text-2xl text-[#09090B]" href="/">
          Anime Taste
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
