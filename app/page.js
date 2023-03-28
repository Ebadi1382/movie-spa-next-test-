const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies", { cache: "no-store" });
  return data.json();
};

import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const data = await getData();
  return (
    <main className="flex flex-col items-center justify-center gap-8 container mx-auto px-10">
      <>
      <title>سایت فیلم</title>
      </>
      <div className="text-center text-2xl">صفحه اصلی</div>
      <div className="flex flex-wrap gap-8 justify-center text-center">
        {data.data.map((item, index) => {
          return (
            <Link href={`/movie/${item.id}`} key={index} className="relative flex flex-col h-[30rem] w-72 border-2 border-zinc-300 rounded-2xl p-4">
              <div className="flex justify-center">
                <Image alt="movies image" src={item.poster} width={240} height={260} />
              </div>
              <h3>{item.title}</h3>
              <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center">
                <div className="px-3 py-1 bg-zinc-300 rounded-xl">{item.year}</div>
                <div className="px-3 py-1 bg-zinc-300 rounded-xl">{item.country}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default page;
