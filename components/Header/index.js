import Link from "next/link";

const index = () => {
  return (
    <header className="bg-zinc-700 text-white h-[10vh] flex justify-center items-center">
      <nav className="container mx-auto px-10 flex justify-between items-center">
        <Link href={"/"} className="text-white text-xl hover:scale-125 transition-all duration-500">ایران فیلم</Link>
        <ul className="flex justify-start items-center gap-5">
            <li>
                <Link href={"/"} className="text-zinc-500 transition-all duration-500 hover:bg-zinc-800 hover:text-white bg-white flex justify-center items-center w-20 h-8 rounded-2xl">خانه</Link>
            </li>
            <li>
                <Link href={"/movie"} className="text-zinc-500 transition-all duration-500 hover:bg-zinc-800 hover:text-white bg-white flex justify-center items-center w-20 h-8 rounded-2xl">فیلم ها</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default index;
