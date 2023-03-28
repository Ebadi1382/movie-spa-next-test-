/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const layout = ({ children }) => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setuser(data.data);
    });
  }, []);
  return (
    <div className="flex justify-between items-start gap-2 container mx-auto px-10">
      <main>{children}</main>
      <aside className="w-[20rem] p-4 rounded-lg flex flex-col justify-start items-center gap-5 bg-zinc-300">
        {user.map((item, index) => {
          return <div className="bg-zinc-400 w-[15rem] py-3 text-center rounded-xl" key={index}>{item.name}</div>;
        })}
      </aside>
    </div>
  );
};

export default layout;
