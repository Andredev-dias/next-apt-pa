"use client";

import { api } from "@/constants/api";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

interface IData {
  name: string;
  gender: string;
  status: string;
  species: string;
  image: string;
}

const AxiosPage = () => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    api.get("/character").then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, []);

  return (
    <section>
      <h1>Página com useEffect e Axios</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <Image
              className="h-auto w-[200px]"
              src={item.image}
              alt="Character Photo"
              width={200}
              height={300}
              priority={true}
            ></Image>
            <h3>{item.species}</h3>
            <p>{item.status}</p>
            <p>{item.gender}</p>
          </div>
        ))}
      </Suspense>
    </section>
  );
};

export default AxiosPage;
