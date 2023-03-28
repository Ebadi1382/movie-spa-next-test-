import Image from "next/image";
import notFound from "../../not-found";

const getData = async (id) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return data.json();
};

const page = async ({ params }) => {
  const data = await getData(params.id);
  if (!data.id) {
    return notFound();
  }
  return (
    <div className="container flex flex-col mx-auto px-12 bg-zinc-300 p-10">
      <section className="flex justify-between items-start gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1>{data.title}</h1>
            <p>سال ساخت : {data.year}</p>
            <p>مدت زمان فیلم : {data.runtime}</p>
            <p>کارگردان : {data.director}</p>
            <p>امتیاز فیلم : {data.imdb_rating}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>خلاصه فیلم</p>
            <p>{data.plot}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>ژانر</p>
            <p className="flex">
              {data.genres.map((item, index) => {
                return (
                  <div className="bg-zinc-400 px-7 py-2 rounded-2xl mx-1" key={index}>
                    {item}
                  </div>
                );
              })}
            </p>
          </div>
        </div>
        <div>
          <Image className="rounded-2xl" alt={data.title} width={250} height={300} src={data.poster} priority={true} />
        </div>
      </section>
      <section className="flex justify-around flex-wrap items-center mt-10 gap-5">
        {data.images.map((item, index) => {
          return (
            <Image key={index} className="rounded-2xl" alt={data.title} width={420} height={300} src={item} priority={true} />
          );
        })}
      </section>
    </div>
  );
};

export default page;
